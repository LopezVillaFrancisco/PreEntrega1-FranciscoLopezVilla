import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom" 
import CartItem from "../CartItem/CartItem"




function Cart () {
    const {cart,clearCart,TotalQuantity,Total} = useContext(CartContext) 

    
    if( TotalQuantity() === 0){
        return(
            <div className="title is-flex is-justify-content-center mt-5">
                <h1 className="mr-2 mb-2">No hay items en el carrito vea los</h1> 
                <Link to='/' >productos</Link>
                
            </div>
        )
    } 
    return(
        <div>
            {cart.map(productos => <CartItem key={productos.id} productos={productos}/>)}
            <div className="is-flex is-flex-direction-column is-align-items-center">
            <h3>Total: ${Total()}</h3>
            <button onClick={() => clearCart()} className="button is-success">Limpiar carrito </button>  
            <Link to='/checkout'><button className="button is-success mt-2">Checkout</button></Link>
            </div>
        </div>
    )
}


export default Cart