import ProductsController from '../controllers/ProductsController.js'
import express from 'express'
import { checkPermissions } from '../middleware/Authentication.js'

class ProductsRoute{
    constructor(){
        this.router = express.Router()
        this.controller = new ProductsController()
    }

    start(){
        this.router.get('/', this.controller.getAllProducts)
        this.router.get('/category/:category', checkPermissions, this.controller.getAllProductsByCategory)
        this.router.get('/:id', checkPermissions, this.controller.getProductsById)
        this.router.post('/', checkPermissions, this.controller.postProducts)
        this.router.patch('/update/:id', checkPermissions, this.controller.patchProducts)
        this.router.put('/update/all/:id', checkPermissions, this.controller.putProducts)
        this.router.delete('/:id', checkPermissions, this.controller.deleteProducts)

        return this.router
    }
}

export default ProductsRoute