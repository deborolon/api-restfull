import GenericFactory from '../models/DAO/GenericFactory.js'
import config from '../config/config.js'

class UsersService{
    constructor(){
        this.service = GenericFactory.get(config.PERSISTENCE).users
    }

    getAllUsers = async () => {
        return await this.service.getAllUsers()
    }

    getUsersById = async (id) => {
        const userById = await this.service.getUsersById(id)
        return userById
    }

    postUsers = async (usr) => {
        const newUsr = await this.service.postUsers(usr)
        return newUsr
    }

    patchUsers = async (id, data) => {
        const result = await this.service.patchUsers(id, data)
        return result
    }

    putUsers = async (id, data) => {
        const result = await this.service.putUsers(id, data)
        return result
    }

    deleteUsers = async (id) => {
        const userRemoved = await this.service.deleteUsers(id)
        return userRemoved
    }
}

export default UsersService