import GenericFactory from '../models/DAO/GenericFactory.js'
import config from '../config/config.js'
import { prodValidation } from '../validators/products.schema.js'

class ProductsService{
    constructor(){
        this.service = GenericFactory.get(config.PERSISTENCE).products
    }

    getAllProducts = async () => {
        return await this.service.getAllProducts()
    }

    getAllProductsByCategory = async (category) => {
        return await this.service.getAllProductsByCategory(category)
    }

    getProductsById = async (id) => {
        const prodById = await this.service.getProductsById(id)
        return prodById
    }

    postProducts = async (prod) => {
        const validate = await prodValidation(prod)
        if(validate === true){
            const result = await this.service.postProducts(prod)
            return result
        } else{
            return validate.details[0].message
        }
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