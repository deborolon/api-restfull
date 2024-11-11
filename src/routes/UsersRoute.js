import UsersController from '../controllers/UsersController.js'
import express from 'express'

class UsersRoute{
    constructor(){
        this.router = express.Router()
        this.controller = new UsersController()
    }

    start(){
        this.router.get('/', this.controller.getAllUsers)
        this.router.get('/:id', this.controller.getUsersById)
        this.router.post('/', this.controller.postUsers)
        this.router.patch('/update/:id', this.controller.patchUsers)
        this.router.put('/update/all/:id', this.controller.putUsers)
        this.router.delete('/:id', this.controller.deleteUsers)

        return this.router
    }
}

export default UsersRoute