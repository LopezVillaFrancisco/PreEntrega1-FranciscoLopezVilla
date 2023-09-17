import { useState,useEffect } from "react" 
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import {getDocs,collection,query,where} from 'firebase/firestore'
import {db} from '../../config/firebase'



function ItemListContainer ({greeting}){
    const [productos,setProductos] = useState([]) 
    const {categoriaId} = useParams();   
    useEffect(() => { 
        const collectionRef=categoriaId 
        ? query(collection(db,'productos'),where('categoria','==',categoriaId))
        :collection(db,'productos')
        
        getDocs(collectionRef)
        .then(response=> {
            const productosAdaptados = response.docs.map(doc => {
                const data = doc.data();
                return {id:doc.id,...data}
            })
            setProductos(productosAdaptados)
        }) 
        .catch(error =>{
            console.log(error)
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