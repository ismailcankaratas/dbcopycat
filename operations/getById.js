const getAll = require("./getAll");
const log = require('../utils/log');

function getById(arrayName, dataId) {
    var dataAll = getAll();
    if (dataAll[arrayName] == undefined) {
        log(`${arrayName} array not found.`, "Error", "error");
        return undefined
    }
    return dataAll[arrayName].find(x => x.id == dataId)
}

module.exports = getById;