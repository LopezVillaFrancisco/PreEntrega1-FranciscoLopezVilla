const productos = [
    
    {
        id : 1, 
        nombre : 'Pantalon 01',
        categoria : 'pantalones', 
        precio : 6000, 
        imagen : 'https://tugroovy.com/wp-content/uploads/2022/08/Jean-Vintage-Frente-1000x1000.png', 
        descripcion : 'Pantalon de jean', 
        stock : '20'
    },
    {
        id : 2, 
        nombre : 'Buzo 01',
        categoria : 'buzos', 
        precio : 7000, 
        imagen : 'https://tugroovy.com/wp-content/uploads/2023/03/Buzo-Verde-1.jpg', 
        descripcion : 'Buzo canguro verde', 
        stock : '17'
    }, 
    {
        id : 3, 
        nombre : 'Remera 01',
        categoria : 'remeras', 
        precio : 5000, 
        imagen : 'https://http2.mlstatic.com/D_NQ_NP_959967-MLA51076527370_082022-O.webp', 
        descripcion : 'Remera Gucci', 
        stock : '23'
    }, 
    {
        id : 4, 
        nombre : 'Zapatillas',
        categoria : 'zapatillas', 
        precio : 20000, 
        imagen : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwsDPzZnDThebHVxbDss4Jux5QJdcviySOLg&usqp=CAU', 
        descripcion : 'Zapatillas Jordan blancas', 
        stock : '10'
    },
    {
        id : 5, 
        nombre : 'Buzo 02',
        categoria : 'buzos', 
        precio : 5200, 
        imagen : 'https://tugroovy.com/wp-content/uploads/2023/03/Buzo-Off-White-1.jpg', 
        descripcion : 'Buzo canguro blanco', 
        stock : '22'
    }, 
    {
        id : 6, 
        nombre : 'Buzo 03',
        categoria : 'buzos', 
        precio : 7500, 
        imagen : 'https://woker.vtexassets.com/arquivos/ids/331071-800-800?v=638121515605400000&width=800&height=800&aspect=true', 
        descripcion : 'Buzo canguro adidas beige', 
        stock : '12'
    }, 
    {
        id : 7, 
        nombre : 'Remera 02',
        categoria : 'remeras', 
        precio : 8000, 
        imagen : 'https://d3ugyf2ht6aenh.cloudfront.net/stores/943/997/products/boy-beige1-2e3a2fe4fc6ce264d016676887628942-1024-1024.webp', 
        descripcion : 'Remera beige lisa', 
        stock : '30'
    }, 
    {
        id : 8, 
        nombre : 'Pantalon 02',
        categoria : 'pantalones', 
        precio : 7000, 
        imagen : 'https://www.nakaoutdoors.com.ar/img/articulos/libo_pantalon_access_ripstop_imagen1.jpg', 
        descripcion : 'Pantalon de cargo negro', 
        stock : '15'
    },
    
]

export const getProductos =() => {
    return new Promise ((resolve) => {
        setTimeout(() => { resolve(productos) }, 500)
    })
}

export const getProductosById = (productoId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id == productoId))
        },500)
    })
}
export const getProductosByCategoria = (productoCategoria) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.filter(prod => prod.categoria === productoCategoria))
        },500)
    })
} 