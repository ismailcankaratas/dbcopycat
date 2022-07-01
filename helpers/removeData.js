const getAllData = require("./getAllData");
const writeDataJson = require("./writeDataJson");
const log = require("../utils/log");

function removeData(arrayName, dataId) {
    var dataAll = getAllData();
    if (dataAll[arrayName] == undefined) {
        log(`${arrayName} array not found.`, "Error", "error");
        return undefined
    }
    const index = dataAll[arrayName].findIndex(x => x.id == dataId);
    dataAll[arrayName].splice(index, 1);
    writeDataJson(JSON.stringify(dataAll));
}

module.exports = removeData;