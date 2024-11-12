import { MongoClient } from 'mongodb'
import config from '../config/config.js'

class MongoConnection{
    static client

    static async connect() {
        if (this.client?.topology?.isConnected()) {
            this.db =  this.client.db(config.NAMEBASE)
            return this.db
        }

        this.client = new MongoClient(config.STRC)
        await this.client.connect()
        console.log('//---------Database connected---------//')
        this.db = this.client.db(config.NAMEBASE)
        return this.db
    }

    static async disconnect() {
        if (this.client?.topology?.isConnected()) {
            await this.client.close()
            console.log('//---------Database disconnected---------//')
        }
    }

}

export default MongoConnection