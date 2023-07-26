import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

function CartItem ({productos}){

    const {removeItem} = useContext(CartContext)
    return(
    <article className="container card is-flex is-justify-content-space-between mt-2 mb-2">
        <h3>{productos.nombre}</h3>  
        <p>Cantidad:{productos.quantity} </p>
        <p>Precio: ${productos.precio}</p> 
        <p>Subtotal: ${productos.precio*productos.quantity}</p> 
       <button onClick={() => removeItem(productos.id)} className="button is-danger p-2">X</button>
    </article>
)
}

export default CartItem