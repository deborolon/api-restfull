import UsersController from '../controllers/UsersController.js'
import express from 'express'
import { checkPermissions } from '../middleware/Authentication.js'

class UsersRoute{
    constructor(){
        this.router = express.Router()
        this.controller = new UsersController()
    }

    start(){
        this.router.get('/', checkPermissions, this.controller.getAllUsers)
        this.router.get('/:id', checkPermissions, this.controller.getUsersById)
        this.router.post('/', checkPermissions, this.controller.postUsers)
        this.router.patch('/update/:id', checkPermissions, this.controller.patchUsers)
        this.router.put('/update/all/:id', checkPermissions, this.controller.putUsers)
        this.router.delete('/:id', checkPermissions, this.controller.deleteUsers)

        return this.router
    }
}

export default UsersRoute