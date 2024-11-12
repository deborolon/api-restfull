import UsersMemoryModel from './UsersMemoryModel.js'
import ProductsMemoryModel from './ProductsMemoryModel.js'
import UsersMongoModel from './UsersMongoModel.js'
import ProductsMongoModel from './ProductsMongoModel.js'

class GenericFactory {
  static get(persistencia) {

    switch (persistencia) {
      case "MEMORY":
        console.warn("Persistence in server memory.")
        return {
          products: new ProductsMemoryModel(),
          users: new UsersMemoryModel()
        }
      case "MONGO":
        console.warn("Persistence in MongoDB.")
        return {
          products: new ProductsMongoModel(),
          users: new UsersMongoModel()
        }
      default:
        console.warn("Persistence by default.")
        return {
          products: new ProductsMemoryModel(),
          users: new UsersMemoryModel()
        }
    }
  
  }
}

export default GenericFactory