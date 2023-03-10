"use strict";

var callable = require("es5-ext/object/valid-callable")
  , forOf    = require("es6-iterator/for-of")
  , call     = Function.prototype.call;

module.exports = function (cb /*, thisArg*/) {
	var thisArg = arguments[1], result = false;
	callable(cb);
	forOf(this, function (value, doBreak) {
		if (call.call(cb, thisArg, value)) {
			result = true;
			doBreak();
		}
	});
	return result;
};
