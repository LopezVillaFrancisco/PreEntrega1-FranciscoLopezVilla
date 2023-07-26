import { useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount" 
import { Link } from "react-router-dom" 
import { CartContext } from "../../context/CartContext"


function ItemDetail ({id,categoria,nombre,precio,imagen,descripcion,stock}){

    const [quantityAdded , setQuantityAdded] = useState(0)
    
    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);

        const item = {
            id, nombre, precio
        } 
        addItem(item,quantity)
    }





    return(
        <div>
             <article className="mx-4 container card">
        <header>
            <h2 className="title">
            {nombre}
            </h2>
        </header>
        <div className="container image is-128x128">
            <img src={imagen} alt={nombre}/>
        </div>
        <div className="container mt-4">
            <p>
                Categoria: {categoria}
            </p>
            <p>
                Descripcion: {descripcion}
            </p>
            <h3 >
                Precio: ${precio}
            </h3> 

        </div>
        <div className="container is-flex is-justify-content-center"> 
            {
                quantityAdded > 0 ?(
                    <Link to='/cart' className='button is-success'>Terminar compra</Link>
                ):(
                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>

                )
            }
        </div> 
    </article>
        </div>
    )

}
export default ItemDetail