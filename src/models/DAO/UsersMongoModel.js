import MongoConnection from '../MongoConnection.js'
import { ObjectId } from 'mongodb'

class UsersMongoModel{
    constructor(){
    }

    getAllUsers = async () => {
        const allUsers = await MongoConnection.db.collection("users").find({}).toArray()
        return allUsers
    }

    getUsersById = async (id) => {
        const usrById = await MongoConnection.db.collection("users").findOne({ _id: ObjectId.createFromHexString(id) })
        return usrById
    }

    postUsers = async (usr) => {
        const newUsr = await MongoConnection.db.collection("users").insertOne(usr)
        return newUsr
    }

    patchUsers = async (id, data) => {
        const usrToPatch = await MongoConnection.db.collection("users").updateOne(
            {_id: ObjectId.createFromHexString(id)},
            {$set: data}
        )
        return usrToPatch
    }

    putUsers = async (id, data) => {
        const usrToPut = await MongoConnection.db.collection("users").replaceOne(
            {_id: ObjectId.createFromHexString(id)},
            data
        )
        return usrToPut
    }

    deleteUsers = async (id) => {
        const usrToDelete = await MongoConnection.db.collection("users").deleteOne(
            {_id: ObjectId.createFromHexString(id)}
        )
        return usrToDelete
    }
}

export default UsersMongoModel