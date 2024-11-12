import MongoConnection from '../MongoConnection.js'
import { ObjectId } from 'mongodb'

class ProductsMongoModel{
    constructor(){
    }

    getAllProducts = async () => {
        const allProducts = await MongoConnection.db.collection("products").find({}).toArray()
        return allProducts
    }

    getAllProductsByCategory = async (category) => {
        const prodByCategory = await MongoConnection.db.collection("products").find({ category: category }).toArray()
        return prodByCategory
    }

    getProductsById = async (id) => {
        const prodById = await MongoConnection.db.collection("products").findOne({ _id: ObjectId.createFromHexString(id) })
        return prodById
    }

    postProducts = async (prod) => {
        const newProd = await MongoConnection.db.collection("products").insertOne(prod)
        return newProd
    }

    patchProducts = async (id, data) => {
        const prodToPatch = await MongoConnection.db.collection("products").updateOne(
            {_id: ObjectId.createFromHexString(id)},
            {$set: data}
        )
        return prodToPatch
    }

    putProducts = async (id, data) => {
        const prodToPut = await MongoConnection.db.collection("products").replaceOne(
            {_id: ObjectId.createFromHexString(id)},
            data
        )
        return prodToPut
    }

    deleteProducts = async (id) => {
        const prodToDelete = await MongoConnection.db.collection("products").deleteOne(
            {_id: ObjectId.createFromHexString(id)}
        )
        return prodToDelete
    }
}

export default ProductsMongoModel