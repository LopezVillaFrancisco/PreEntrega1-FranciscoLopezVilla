const products = [
    {
        id : '1', 
        nombre : 'Pantalon 01',
        tipo : 'Pantalon', 
        precio : 3000, 
        imagen : 'https://tugroovy.com/wp-content/uploads/2022/08/Jean-Vintage-Frente-1000x1000.png', 
        descripcion : 'Pantalon 🥶🥶'
    },
    {
        id : '2', 
        nombre : 'Buzo 01',
        tipo : 'Buzo', 
        precio : 4000, 
        imagen : 'https://tugroovy.com/wp-content/uploads/2023/03/Buzo-Verde-1.jpg', 
        descripcion : 'Buzo 🔥🔥'
    }, 
    {
        id : '3', 
        nombre : 'Remera 01',
        tipo : 'Remera', 
        precio : 2000, 
        imagen : 'https://http2.mlstatic.com/D_NQ_NP_959967-MLA51076527370_082022-O.webp', 
        descripcion : 'Remera 🥵🥵'
    }, 
    {
        id : '4', 
        nombre : 'Zapatillas',
        tipo : 'Zapatilla', 
        precio : 20000, 
        imagen : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwsDPzZnDThebHVxbDss4Jux5QJdcviySOLg&usqp=CAU', 
        descripcion : 'Zapatillas 🤑🤑'
    },
]

export const getProducts =() => {
    return new Promise ((resolve) => {
        setTimeout(() => { resolve(products) }, 500)
    })
}