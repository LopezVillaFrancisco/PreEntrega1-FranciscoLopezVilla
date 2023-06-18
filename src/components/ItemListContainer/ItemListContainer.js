import { useState,useEffect } from "react" 
import { getProducts } from "../../async"
import ItemList from "../ItemList/ItemList"


function ItemListContainer ({greeting}){

    const [productos,setProductos] = useState([])

    useEffect(() => {
        getProducts()
        .then(response => {
            setProductos(response)
        })
        .catch(error => {
            console.error(error)
        })  
    })

    return (
        <div className="container">
            <h1 className="title has-text-centered">{greeting}</h1>
            <ItemList productos={productos}/>
        </div>
    )
} 

export default ItemListContainer