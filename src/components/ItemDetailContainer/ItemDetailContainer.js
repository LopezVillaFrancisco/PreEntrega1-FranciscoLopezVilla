import { useState,useEffect } from "react"
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom"
import {getDoc,doc} from 'firebase/firestore' 
import {db} from '../../config/firebase'
function ItemDetailContainer (){

const [producto,setProducto] = useState(null) 

const {itemId} = useParams()      
    useEffect(() => {
        const docRef = doc(db,'productos',itemId)
        getDoc(docRef)
        .then( response=> {
            const data = response.data()
            const productoAdaptado = {id: response.id, ...data}
            setProducto(productoAdaptado)
        })
        .catch(error=> {
            console.log(error)
        }) 
    },[itemId]) 
    
    
    return(
        <div className="container">
            <ItemDetail {...producto}/>
        </div>
    )
} 
export default ItemDetailContainer