import UsersRoute from './routes/UsersRoute.js'
import ProductsRoute from './routes/ProductsRoute.js'
import express from 'express'
import config from './config/config.js'
import MongoConnection from './models/MongoConnection.js'

class Server{
    constructor(){
        this.app = express()
        this.server = null
    }

    async start(){
        this.app.use(express.urlencoded({extended: true}))
        this.app.use(express.json())
        this.app.use(express.static('public'))

        this.app.use('/users', new UsersRoute().start())
        this.app.use('/products', new ProductsRoute().start())

        this.server = this.app.listen(config.PORT, () => console.log(`Server running on http://localhost:${config.PORT}`))
        this.server.on("error", (err) => console.error(`An error has occurred on the server: ${err}`))

        await MongoConnection.connect()
        return this.app
    }

    async stop() {
        if(this.server) {
            this.server.close()
            await CnxMongoDB.disconnect()
            this.server = null
        }
    }
}

export default Server