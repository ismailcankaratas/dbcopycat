const writeDataJson = require("../helpers/writeDataJson");
const getAll = require('./getAll');

function add(arrayName, data) {
    const newData = getAll();
    newData[arrayName].push(data);
    writeDataJson(JSON.stringify(newData));
}


module.exports = add;

