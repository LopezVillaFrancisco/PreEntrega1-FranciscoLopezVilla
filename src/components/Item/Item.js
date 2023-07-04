import { Link } from "react-router-dom"
function Item ({id,nombre,precio,imagen,stock}){
    console.log(id)
    return(
    <article className=" container card">
        <header>
            <h2>
            {nombre}
            </h2>
        </header>
        <div className="container image is-128x128">
            <img src={imagen} alt={nombre}/>
        </div>
        <div className="container mt-4">
            <h3 >
                Precio: ${precio}
            </h3> 
            <p>
                Stock: {stock}
            </p>
        </div>
        <div className="container">
            <Link to={`/item/${id}`}>
            <button className="button is-success is-light is-outlined mt-2">Ver detalle</button>
            </Link>
        </div>

    </article>
)
}

export default Item