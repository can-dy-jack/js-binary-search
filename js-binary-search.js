(function (factory) {
typeof define === 'function' && define.amd ? define(factory) :
factory();
})((function () { 'use strict';

var ref = require('./lib/bisect');
var bisect_left = ref.bisect_left;
var bisect_right = ref.bisect_right;

module.exports = {
  bisect_left: bisect_left,
  bisect_right: bisect_right,
};

}));
