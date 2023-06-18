
function Item ({nombre,precio,imagen,descripcion}){
return(
    <article className="mx-4 container is-danger">
        <header>
            <h2 className="title">
            {nombre}
            </h2>
        </header>
        <div className="container image is-128x128">
            <img src={imagen} alt={nombre}/>
        </div>
        <div className="container mt-4">
            <h3 >
                {precio}
            </h3>
            <p>
                {descripcion}
            </p>
        </div>
        <div className="container">
            <button className="button is-success is-light is-outlined mt-2">Comprar</button>
        </div>
    </article>
)
}

export default Item