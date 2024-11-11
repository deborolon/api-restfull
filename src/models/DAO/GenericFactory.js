import UsersMemoryModel from './UsersMemoryModel.js'
import ProductsMemoryModel from './ProductsMemoryModel.js'

class GenericFactory {
  static get(persistencia) {

    switch (persistencia) {
      case "MEMORY":
        console.warn("Persistence in server memory.")
        return {
          products: new ProductsMemoryModel(),
          users: new UsersMemoryModel()
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