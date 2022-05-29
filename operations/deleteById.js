const removeData = require('../helpers/removeData');

function deleteById(arrayName, dataId) {
    return removeData(arrayName, dataId);
}

module.exports = deleteById;
