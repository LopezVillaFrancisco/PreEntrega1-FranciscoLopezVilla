import { useContext } from 'react';
import cart from './assets/cart.svg';
import { CartContext } from '../../context/CartContext'; 
import { Link } from 'react-router-dom';


function CartWidget () {

    const {TotalQuantity} = useContext(CartContext)

    return (    
        <Link to='/cart' className='button is-info is-medium'>
            <img src={cart} alt='carrito-img'/> 
            <p>{TotalQuantity()}</p>
        </Link>
    )
} 

export default CartWidget