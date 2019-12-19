"use strict";
exports.__esModule = true;
var ns = require("./my-string-validator");
var ns2 = require("./my-number-validator");
var Validator;
(function (Validator) {
    Validator.isURL = ns.StringValidator.isURL;
    Validator.isPhone = ns2.NumberValidator.isPhone;
})(Validator = exports.Validator || (exports.Validator = {}));
