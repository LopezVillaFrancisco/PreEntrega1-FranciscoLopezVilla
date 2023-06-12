import cart from './assets/cart.svg';

function CartWidget () {
    return (
        <div>
            <button className='button is-info is-medium'><img src={cart} alt='carrito-img' />0</button>
                       
        </div>
    )
} 

export default CartWidget