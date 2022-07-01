const log = require("../utils/log");
const getAllData = require("./getAllData")

function dataFilter(arrayName, condition) {
    const dataAll = getAllData();
    if (dataAll[arrayName] == undefined) {
        log(`${arrayName} array not found.`, "Error", "error");
        return undefined
    }
    return dataAll[arrayName].filter(condition)
}

module.exports = dataFilter;