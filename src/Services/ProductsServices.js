import instance from "../Config/mercadoLibre";

export function getAll() {
    return instance.get('sites/MLA/search?category=MLA1743')
}

export function getProduct(idItem){
    return instance.get(`items?ids=${idItem}`)
}