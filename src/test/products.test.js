import generator from '../utils/generator.js'
import { expect } from 'chai'
import supertest from 'supertest'

const path = supertest('http://localhost:8080')

describe('Products', () => {
    const data = generator.randomProducts()

    it('GET ALL', async () => {
        const res = await path.get('/products').set('permission', 'ADMIN')
        expect(res.status).to.eq(200)
    })

    it('GET BY ID', async () => {
        const res = await path.get('/products/1').set('permission', 'ADMIN')
        expect(res.status).to.eq(200)
    })

    it('POST', async () => {
        return path.post("/products")
                    .send(data)
                    .set('permission', 'ADMIN')
                    .then((response) => {
                        expect(response.status).to.eq(200)
                        expect(response.body).to.include.keys("name", "price", "category", "stock")
                    })
                    .catch((err) => console.error(err))
    })
})