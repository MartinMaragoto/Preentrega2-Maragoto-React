const misProductos = [
    { id: '1', nombre: 'Auriculares Retro Idance', precio: 'USD 150', img: '/retroAuriculares.png', idCat: '1' },
    { id: '2', nombre: 'Camara Instantanea Fujifilm', precio: 'USD 100', img: '/camaraInstantanea.jpg', idCat: '2' },
    { id: '3', nombre: 'Tocadiscos Gadnic', precio: 'USD 200', img: '/tocadiscos.png', idCat: '3' },
    { id: '4', nombre: 'Consola Retro Sup', precio: 'USD 50', img: '/consolaretrosup.png', idCat: '4' }




]
export const getProductos = () => {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve(misProductos);
        }, 1000)
    })

}
// Actividad número 3 Detalle de un producto
//vamos a crear una función como la anterior pero que solo nos retorne un ítem 
//en vez de todo el array

export const getSingleProduct = (id) => {

    return new Promise(resolve => {

        setTimeout(() => {

            const producto = misProductos.find(item => item.id === id)
            resolve(producto)
        }, 1000)
    })

}

//Función que retorna una categoría

export const getProductType = (idCategoria) => {

    return new Promise(resolve => {

        setTimeout(() => {
            const productsType = misProductos.filter(item => item.idCat === idCategoria)
            resolve(productsType)
        }, 1000)
    })

}