const writeDataJson = require("../helpers/writeDataJson");
const getAll = require('./getAll');
const log = require('../utils/log');

function add(arrayName, data) {
    const newData = getAll();
    if (newData[arrayName] != undefined) {
        var isArray = newData[arrayName].constructor === Array ? true : false
        if (isArray) {
            newData[arrayName].push(data)
        } else {
            log(`${arrayName} is not an array.`, "Error", "error");
        }
    } else {
        newData[arrayName] = []
        newData[arrayName].push(data);
    }
    writeDataJson(JSON.stringify(newData, null, 4));
}

module.exports = add;