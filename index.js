const { createRandomProduct, randomProductFactory } = require('./products')
const { writeJsonFile, readJsonFile } = require('./helpers')

const run = () => {
    // products is an array of objects OR if products.json is empty, then it is an empty array []
    let products = readJsonFile("./data", "products.json")
    if(process.argv[3]){
        // console.log( randomProductFactory(process.argv[3]) )
        // productsToAdd gets assigned the return value of the function call: randomProductFactory(process.argv[3]), which returns an ARRAY of objects
        const productsToAdd = randomProductFactory(process.argv[3])
        // We use the spread operator to push ALL OF THE CONTENTS of the productsToAdd array into the products array, as opposed to pushing the entire array giving us a nested array
        products.push(...productsToAdd)
        // Puts the products array into the file that we specify below: './data/products.json'
        writeJsonFile('./data', "products.json", products)
    } else {
        // Create a new product, returns an object representing a product
        const newProduct = createRandomProduct()
        // Push the new products into the products array
        products.push(newProduct)
        // Replace the contents of the products.json file with products(the array we created)
        writeJsonFile('./data', 'products.json', products)
    }
}

run()