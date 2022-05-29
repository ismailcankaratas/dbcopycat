const getAllData = require("./getAllData");
const writeDataJson = require("./writeDataJson");

function removeData(arrayName, dataId) {
    var dataAll = getAllData();
    const index = dataAll[arrayName].findIndex(x => x.id == dataId);
    dataAll[arrayName].splice(index, 1);
    writeDataJson(JSON.stringify(dataAll));
}

module.exports = removeData;