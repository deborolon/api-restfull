import generator from '../utils/generator.js'
import { expect } from 'chai'
import supertest from 'supertest'

const path = supertest('http://localhost:8080')

describe('Users', () => {
    const data = generator.randomUsers()
  
    it('GET ALL', async () => {
        const res = await path.get('/users').set('permission', 'ADMIN')
        expect(res.status).to.eq(200)
    })

    it('GET BY ID', async () => {
        const res = await path.get('/users/1').set('permission', 'ADMIN')
        expect(res.status).to.eq(200)
    })

    it('POST', async () => {
        return path.post("/users")
                    .send(data)
                    .set('permission', 'ADMIN')
                    .then((response) => {
                        expect(response.status).to.eq(200)
                        expect(response.body).to.include.keys("name", "age", "email", "username")
                    })
                    .catch((err) => console.error(err))
    })
})