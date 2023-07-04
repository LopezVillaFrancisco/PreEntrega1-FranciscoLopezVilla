import Item from "../Item/Item"


function ItemList ({productos}) {
    return(
        <div className=" is-flex flex-auto has-text-centered">
            {productos.map(prod=> <Item key={prod.id} {...prod}/>)}
        </div>
    )
}

export default ItemList