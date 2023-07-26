import { createContext,useState } from "react"; 

export const CartContext =createContext({
    cart: []
}) 

export const CartPorvider = ({children})=>{
    const [cart,setCart]=useState([]); 

    const addItem = (item,quantity) => {
        if(isInCart(item.id)) {
           for(let i=0; i<cart.length; i++) {
                if(cart[i].id === item.id) {
                    cart[i].quantity = cart[i].quantity+quantity; 
                }
           }
        }else{
             
            setCart(prev =>[...prev,{...item,quantity}]);
        }
    }

    const removeItem = (itemId) => {
        setCart(cart.filter(item => item.id !== itemId))
    }

    const clearCart = () => {

        setCart([]);

    }

    const isInCart = (itemId) => {
        return cart.some(prod=>prod.id === itemId)
    }
    const TotalQuantity = () => {
        let cantidadTotal=0;
        for(let i=0; i<cart.length; i++) {
            cantidadTotal=cantidadTotal + cart[i].quantity; 
        }
        return cantidadTotal;
    }
    const Total = () =>{
        let total = 0;
        for(let i=0; i<cart.length; i++) {
            total=total + cart[i].precio*cart[i].quantity;
        }
        return total;
    }

    return (
        <CartContext.Provider value={{cart,addItem,removeItem,clearCart,TotalQuantity,Total}}>
            {children}
        </CartContext.Provider>
    )
}