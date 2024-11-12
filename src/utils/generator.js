import { faker } from '@faker-js/faker'

const randomUsers = () => {
    const user = {
        name: faker.person.fullName(),
        age: faker.string.numeric(2),
        email: faker.internet.email(),
        username: faker.internet.username()
    }
    return user
}

const randomProducts = () => {
    const prod = {
        name: faker.commerce.productName(),
        price: parseFloat(faker.commerce.price()),
        category: faker.commerce.department(),
        stock: faker.string.numeric(7)
    }
    return prod
}

export default {
    randomProducts,
    randomUsers
}