/**
 * handle-errors <https://github.com/tunnckoCore/handle-errors>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var path = require('path');
var fmt = require('util').format;

module.exports = function handleErrors(label, stack) {
  checkType(label, 'label');

  return {
    error: newError,
    type: newTypeError
  };

  function newError(err, cb) {
    checkType(err, 'msg');
    err = new Error(fmt('[%s] %s', label, err));
    err = stack ? buildShortStack(err) : err;

    if (!cb) {
      throw err;
    }
    return cb(err);
  }

  function newTypeError(err, cb) {
    checkType(err, 'msg');
    err = new TypeError(fmt('[%s] %s', label, err));
    err = stack ? buildShortStack(err) : err;

    if (!cb) {
      throw err;
    }
    return cb(err);
  }
};

function buildShortStack(err) {
  var shortStack = err.stack.split('\n').filter(Boolean).filter(function(line) {
    return /\//.test(line)
  });

  shortStack[0] = err.toString();
  err.shortStack = shortStack.join('\n');
  return err;
}

function checkType(arg, name) {
  if (!arg) {
    throw new Error('[handle-errors] should have `' + name + '`')
  }
  if (typeof arg !== 'string') {
    throw new TypeError('[handle-errors] expect `' + name + '` be string')
  }
}
