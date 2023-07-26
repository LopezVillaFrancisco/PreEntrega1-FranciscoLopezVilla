import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Timestamp, addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";
import { db } from "../../config/firebase"; 
import CheckOutForm from "../ChekOutForm/CheckOutForm";



function CheckOut (){
    const [orderId,setOrderId] = useState('') 
    const [loading,setLoading] = useState(false)
    
    const {cart,Total,clearCart} = useContext(CartContext)
    const total = Total()
        console.log(total)

    const createOrder = async ({nombre,email,telefono}) => {
        setLoading(true)
        try {
            const objOrder = {
                comprador:{
                    nombre,email,telefono
                },
                items : cart,
                total: total,
                dia: Timestamp.fromDate(new Date())
            }
        
        const batch = writeBatch(db) 
        
        const sinStock = []
        
        const ids = cart.map(producto => producto.id)
        
        const referenciaProductos = collection(db,'productos') 

        const productosFirebase = await getDocs(query(referenciaProductos,where(documentId(),'in',ids)));
        
        const {docs} = productosFirebase; 

        docs.forEach(doc => {
            const dataDoc = doc.data();
            const stockDb = dataDoc.stock;

            const productoEnCarrito = cart.find(producto => producto.id === doc.id)
            const cantidadProducto = productoEnCarrito?.quantity 

            if (stockDb >= cantidadProducto) {
                batch.update(doc.ref, {stock: stockDb - cantidadProducto})
            }else{
                sinStock.push ({id:doc.id,...dataDoc})
            }
        })

        if(sinStock.length === 0){
            await batch.commit()

            const orderRef = collection(db, 'orders') 
            const orderAdded = await addDoc(orderRef, objOrder) 

            setOrderId(orderAdded.id) 
            clearCart()
        }else{
            console.error('Error hay productos fuera de stock')
        }
        }
        catch (error){
            console.log(error)
        } finally{
            setLoading(false)
        }
    }  
    if(loading){
        return <h2 className="title container">Generando orden</h2>
    }
    if(orderId){
        return <h2 className="title container">El id de la orden es: {orderId}</h2>
    } 

    return(
        <div>
            <h2 className="title container">ChekOut</h2>
            <CheckOutForm Onconfirm={createOrder}/>
        </div>
    )
}

export default CheckOut