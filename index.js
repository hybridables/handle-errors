/**
 * handle-errors <https://github.com/tunnckoCore/handle-errors>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var path = require('path');
var fmt = require('util').format;

module.exports = function handleErrors(label) {
  return {
    error: newError,
    type: newTypeError
  };

  function newError(err, cb) {
    err = new Error(fmt('%s: %s', label, err));

    if (!cb) {
      throw err;
    }

    return cb(err);
  }

  function newTypeError(err, cb) {
    err = new TypeError(fmt('%s: %s', label, err));

    if (!cb) {
      throw err;
    }

    return cb(err);
  }
};
