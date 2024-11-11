import ProductsController from '../controllers/ProductsController.js'
import express from 'express'

class ProductsRoute{
    constructor(){
        this.router = express.Router()
        this.controller = new ProductsController()
    }

    start(){
        this.router.get('/', this.controller.getAllProducts)
        this.router.get('/:id', this.controller.getProductsById)
        this.router.post('/', this.controller.postProducts)
        this.router.patch('/update/:id', this.controller.patchProducts)
        this.router.put('/update/all/:id', this.controller.putProducts)
        this.router.delete('/:id', this.controller.deleteProducts)

        return this.router
    }
}

export default ProductsRoute