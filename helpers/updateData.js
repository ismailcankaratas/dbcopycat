const getAllData = require("./getAllData");
const writeDataJson = require("./writeDataJson");

function updateData(arrayName, data) {
    var dataAll = getAllData();
    const index = dataAll[arrayName].findIndex(i => i.id === data.id);
    Object.entries(dataAll[arrayName][index]).forEach(entry => {
        const [key, value] = entry;
        if (key != "id") {
            dataAll[arrayName][index][key] = data[key];
        }
    });
    writeDataJson(JSON.stringify(dataAll));
}

module.exports = updateData;