import { useState } from "react"

function ItemCount ({stock,initial,onAdd}) {
    const [quantity,setQuantity] = useState(initial);
    

    function handleClickSuma () { 
        if (quantity<stock){
            setQuantity(quantity +  1); 
        }
    }
    function handleClickResta() { 
        if (quantity>1){             
        setQuantity(quantity -  1);
        }
    }

    return(
        <div className="container text has-text-centered">
            <div className="is-flex is-justify-content-center mb-3">
                <button className="button is-success mr-2" onClick={handleClickSuma}>+</button> 
                <p className="is-justify-content-center mt-2">{quantity}</p>
                <button className="button is-success ml-2" onClick={handleClickResta}>-</button> 
            </div> 
            <div>
                <button className="button is-success" onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al carrito</button>
            </div>
        </div>
    )
} 

export default ItemCount