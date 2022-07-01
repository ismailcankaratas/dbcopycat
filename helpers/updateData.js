const getAllData = require("./getAllData");
const writeDataJson = require("./writeDataJson");
const log = require("../utils/log");

function updateData(arrayName, data) {
    var dataAll = getAllData();

    if (dataAll[arrayName] == undefined) {
        log(`${arrayName} array not found.`, "Error", "error");
        return undefined
    }

    if (!data.id) {
        log(`There is no id data!`, "Error", "error");
        return undefined
    }

    const index = dataAll[arrayName].findIndex(i => i.id === data.id);

    if (index == -1) {
        log(`No data matching id found!`, "Error", "error");
        return undefined
    }

    Object.entries(dataAll[arrayName][index]).forEach(entry => {
        const [key, value] = entry;
        if (key != "id") {
            dataAll[arrayName][index][key] = data[key];
        }
    });
    writeDataJson(JSON.stringify(dataAll, null, 4));
}

module.exports = updateData;