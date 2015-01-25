/**
 * handle-errors <https://github.com/tunnckoCore/handle-errors>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var path = require('path');
var fmt = require('util').format;

module.exports = function handleErrors(name) {
  if (!(this instanceof HandleErrors)) {
    return new HandleErrors(name);
  }
  return this;
};

function HandleErrors(name) {
  this.label = name;
  return this;
}

HandleErrors.prototype.error = function newError(err, callback) {
  err = fmt('%s: %s', this.label, err.toString());
  err = new Error(err);
  if (!callback) {
    throw err;
  }
  callback(err);
  return this;
};

HandleErrors.prototype.type = function newTypeError(err, callback) {
  err = fmt('%s: %s', this.label, err.toString());
  err = new TypeError(err);
  if (!callback) {
    throw err;
  }
  callback(err);
  return this;
};

