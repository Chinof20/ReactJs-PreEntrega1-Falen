import Chowfan from "./img/chaufan2023.png";
import Aeropuerto from "./img/aeropuerto.png";
import Fideos from "./img/fideos2023.png";
import Sopa from "./img/SopaFuchifu.png";

const products = [
    {
        id: "1",
        name: "Arroz Chow Fan",
        price: 10,
        category: "arroces",
        imagen: Chowfan,
        description: "Arroz salteado con pollo y huevo"
    },
    {
        id: "2",
        name: "Aeropuerto",
        price: 15,
        category: "arroces",
        imagen: Aeropuerto,
        description: "Arroz salteado con verduras, pollo y huevo"
    },
    {
        id: "3",
        name: "Fideos Saltados",
        price: 16,
        category: "fideos",
        imagen: Fideos,
        description: "Fideos saltados con verdura y carne"
    },
    {
        id: "4",
        name: "Sopa Fu Chifu",
        price: 14,
        category: "sopas",
        imagen: Sopa,
        description: "Caldo de pollo con fideos chino y jengibre"
    }

]

export const getProducts = () => {
    return new Promise( (resolve) => {
        setTimeout( ()=> {
            resolve(products)
        } ,500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout( ()=>{
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    } )
}

export const getProductsByCategory = (productCategory) => {
    return new Promise( (resolve) => {
        setTimeout( ()=> {
            resolve(products.filter(prod => prod.category === productCategory))
        }, 500)
    } )
}