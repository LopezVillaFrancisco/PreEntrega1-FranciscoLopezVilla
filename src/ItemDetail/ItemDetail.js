import ItemCount from "../components/ItemCount/ItemCount"
function ItemDetail ({categoria,nombre,precio,imagen,descripcion,stock}){
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
        <div className="container">
            <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('cantidad agregada:',quantity)}/>
        </div>

    </article>
        </div>
    )

}
export default ItemDetail