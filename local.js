#!/usr/bin/env node

/**
 * dbcopycat
 * A JSON Database that saves your json data in a file. Easy and Simple to Use
 *
 * @author İsmail Can Karataş <https://ismailcankaratas.github.io/>
 */

const add = require('./operations/add');
const remove = require('./operations/remove');
const update = require('./operations/update');
const getAll = require('./operations/getAll');


module.exports.add = add;
module.exports.remove = remove;
module.exports.update = update;
module.exports.getAll = getAll;