import ProductsService from '../services/ProductsService.js'

class ProductsController{
    constructor(){
        this.controller = new ProductsService()
    }

    getAllProducts = async (req, res) => {
        const allProducts = await this.controller.getAllProducts()
        res.send(allProducts)
    }

    getProductsById = async (req, res) => {
        const { id } = req.params
        const prodByID = await this.controller.getProductsById(id)
        res.send(prodByID)
    }

    postProducts = async (req, res) => {
        const newProd = req.body
        const result = await this.controller.postProducts(newProd)
        res.send(result)
    }

    patchProducts = async (req, res) => {
        const { id } = req.params
        const data = req.body
        const result = await this.controller.patchProducts(id, data)
        res.send(result)
    }

    putProducts = async (req, res) => {
        const { id } = req.params
        const data = req.body
        const result = await this.controller.putProducts(id, data)
        res.send(result)
    }

    deleteProducts = async (req, res) => {
        const { id } = req.params
        const productRemoved = await this.controller.deleteProducts(id)
        res.send(productRemoved)
    }
}

export default ProductsController