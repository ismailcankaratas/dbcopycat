const getAllData = require("./getAllData")

function dataFind(arrayName, condition) {
    const dataAll = getAllData();
    return dataAll[arrayName].find(condition)
}

module.exports = dataFind;