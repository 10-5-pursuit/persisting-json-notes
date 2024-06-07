const { faker } = require('@faker-js/faker')


const createRandomProduct = () => {
    const product = {
        _id: faker.datatype.uuid(),
        name: `${faker.commerce.productAdjective()} ${faker.commerce.product()}`,
        description: faker.commerce.productDescription(),
        brand: faker.company.name(),
        price: faker.commerce.price(10, 200, 2, "$"),
        currency: "USD",
        inStock: faker.datatype.boolean(),
        attributes: {
            material: faker.commerce.productMaterial(),
            color: faker.vehicle.color()
        }
    }
    return product
}

// console.log(createRandomProduct())


const randomProductFactory = (number) => {
    const products = []
    for(let i = 0; i < number; i++){
        const newProduct = createRandomProduct()
        products.push(newProduct)
    }
    return products
}


// console.log(randomProductFactory(2))


module.exports = { createRandomProduct, randomProductFactory }