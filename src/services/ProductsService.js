import GenericFactory from '../models/DAO/GenericFactory.js'
import config from '../config/config.js'

class ProductsService{
    constructor(){
        this.service = GenericFactory.get(config.PERSISTENCE).products
    }

    getAllProducts = async () => {
        return await this.service.getAllProducts()
    }

    getProductsById = async (id) => {
        const prodById = await this.service.getProductsById(id)
        return prodById
    }

    postProducts = async (prod) => {
        const result = await this.service.postProducts(prod)
        return result
    }

    patchProducts = async (id, data) => {
        const result = await this.service.patchProducts(id, data)
        return result
    }

    putProducts = async (id, data) => {
        const result = await this.service.putProducts(id, data)
        return result
    }

    deleteProducts = async (id) => {
        const productRemoved = await this.service.deleteProducts(id)
        return productRemoved
    }
}

export default ProductsService