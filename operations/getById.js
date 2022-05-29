const getAll = require("./getAll");

function getById(arrayName, dataId) {
    var dataAll = getAll();
    return dataAll[arrayName].find(x => x.id == dataId)
}

module.exports = getById;