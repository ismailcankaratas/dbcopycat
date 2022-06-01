#!/usr/bin/env node

/**
 * dbcopycat
 * A JSON Database that saves your json data in a file. Easy and Simple to Use
 *
 * @author İsmail Can Karataş <https://ismailcankaratas.github.io/>
 */

const getAll = require('./operations/getAll');
const getById = require('./operations/getById');
const add = require('./operations/add');
const deleteById = require('./operations/deleteById');
const update = require('./operations/update');
const filter = require('./operations/filter');
const find = require('./operations/filter');

module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.add = add;
module.exports.deleteById = deleteById;
module.exports.update = update;
module.exports.filter = filter;
module.exports.find = find;