import { useState,useEffect } from "react"
import { getProductosById } from "../../async"
import ItemDetail from "../../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

function ItemDetailContainer (){

const [producto,setProducto] = useState(null)
const {itemId} = useParams()      
    useEffect(() => {
        getProductosById(itemId) 
            .then(response => {
                    setProducto(response) 
            })
            .catch(error => {
                console.error(error)
            })
        
    },[itemId]) 
    
    
    return(
        <div className="container">
            <ItemDetail {...producto}/>
        </div>
    )
} 
export default ItemDetailContainer