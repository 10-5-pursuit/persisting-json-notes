const { writeFileSync, readFileSync } = require('node:fs')


const writeJsonFile = (path, fileName, data) => {
    // Takes three arguments:
    // 1: Path to the file and name of the file that we want to create
    // 2: The data that we want to add to that file that we just created
    // 3: Character encoding: ASCII
    data = JSON.stringify(data, 0, 2)
    return writeFileSync(`${path}/${fileName}`, data, { encoding: "utf-8" })
}

const readJsonFile = (path, fileName) => {
    const collection = readFileSync(`${path}/${fileName}`, "utf8")
    // JSON.parse() converts JSON to JS
    return collection ? JSON.parse(collection) : []
}

module.exports = { writeJsonFile, readJsonFile }