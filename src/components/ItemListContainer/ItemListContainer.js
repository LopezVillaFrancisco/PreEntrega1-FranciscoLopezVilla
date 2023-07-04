import { useState,useEffect } from "react" 
import { getProductos,getProductosByCategoria } from "../../async"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

function ItemListContainer ({greeting}){

    const [productos,setProductos] = useState([])
    const {categoriaId} = useParams();   
    useEffect(() => {
        const asyncFunc= categoriaId ? getProductosByCategoria : getProductos
        asyncFunc(categoriaId)
        .then(response => {
            setProductos(response)
        })
        .catch(error => {
            console.error(error)
        })  
    },[categoriaId])

    return (
        <div className="container">
            <h1 className="title has-text-centered">{greeting}</h1>
            <ItemList productos={productos}/>
        </div>
    )
} 

export default ItemListContainer