import UsersService from '../services/UsersService.js'

class UsersController{
    constructor(){
        this.controller = new UsersService()
    }

    getAllUsers = async (req, res) => {
        const allUsers = await this.controller.getAllUsers()
        res.send(allUsers)
    }

    getUsersById = async (req, res) => {
        const { id } = req.params
        const userById = await this.controller.getUsersById(id)
        res.send(userById)
    }

    postUsers = async (req, res) => {
        const newUsr = req.body
        const result = await this.controller.postUsers(newUsr)  
        res.send(result)
    }

    patchUsers = async (req, res) => {
        const { id } = req.params
        const data = req.body
        const result = await this.controller.patchUsers(id, data)
        res.send(result)
    }

    putUsers = async (req, res) => {
        const { id } = req.params
        const data = req.body
        const result = await this.controller.putUsers(id, data)
        res.send(result)
    }

    deleteUsers = async (req, res) => {
        const { id } = req.params
        const userRemoved = await this.controller.deleteUsers(id)
        res.send(userRemoved)
    }
}

export default UsersController