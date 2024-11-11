class ProductsMemoryModel{
    constructor(){
        this.products = [
            {id: 1, name: "Laptop HP Pavilion", price: 750, catogory: "Electrónica", stock: 20},
            {id: 2, name: "Cafetera Nespresso", price: 120, catogory: "Electrodomésticos", stock: 50},
            {id: 3, name: "Smartphone Samsung Galaxy", price: 300, category: "Electrónica", stock: 30},
            {id: 4, name: "Silla ergonómica", price: 200, category: "Muebles", stock: 15},
            {id: 5, name: "Auriculares Sony WH-1000XM4", price: 350, category: "Accesorios", stock: 25}
          ]
          
    }

    getAllProducts = async () => {
        return this.products
    }

    getProductsById = async (id) => {
        const prodById = this.products.find((prod) => prod.id == id)
        return prodById
    }

    postProducts = async (prod) => {
        prod.id = this.products[this.products.length -1].id +1
        this.products.push(prod)
        return prod
    }

    patchProducts = async (id, data) => {
        const index = this.products.findIndex((e) => e.id == id)
        if(index == -1) throw new Error("El índice no existe.")
        const updateProd = {...this.products[index], ...data}
        this.products.splice(index, 1, updateProd)
        return updateProd
    }

    putProducts = async (id, data) => {
        const index = this.products.findIndex((e) => e.id == id)
        if(index == -1) throw new Error("El índice no existe.")
        const updateProd = {...this.products[index], ...data}
        this.products.splice(index, 1, updateProd)
        return updateProd
    }

    deleteProducts = async (id) => {
        const index = this.products.findIndex((e) => e.id == id)
        if(index == -1){
            throw new Error("El índice no existe.")
        } else{
            this.products.splice(index, 1)
            return "El producto se eliminó correctamente."
        }
    }
}

export default ProductsMemoryModel