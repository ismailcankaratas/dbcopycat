#!/usr/bin/env node

/**
 * dbcopycat
 * A JSON Database that saves your json data in a file. Easy and Simple to Use
 *
 * @author İsmail Can Karataş <https://ismailcankaratas.github.io/>
 */

const add = require('./operations/add');
const remove = require('./operations/add');
const update = require('./operations/add');
const getAll = require('./operations/add');


module.exports.add = add;
module.exports.remove = remove;
module.exports.update = update;
module.exports.getAll = getAll;