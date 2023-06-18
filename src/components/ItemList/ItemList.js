import Item from "../Item/Item"


function ItemList ({productos}) {
    return(
        <div className="container is-flex has-text-centered">
            {productos.map(prod=> <Item key={prod.id} {...prod}/>)}
        </div>
    )
}

export default ItemList