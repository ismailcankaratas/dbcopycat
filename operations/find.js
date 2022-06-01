const dataFind = require('../helpers/dataFind');

function find(arrayName, condition) {
    return dataFind(arrayName, condition);
}

module.exports = find;
