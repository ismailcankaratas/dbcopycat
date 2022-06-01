const getAllData = require("./getAllData")

function dataFilter(arrayName, condition) {
    const dataAll = getAllData();
    return dataAll[arrayName].filter(condition)
}

module.exports = dataFilter;