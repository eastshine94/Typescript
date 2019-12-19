"use strict";
exports.__esModule = true;
var NumberValidator;
(function (NumberValidator) {
    function isPhone(input) {
        var regex = /^01([0|1|6|7|8|9]?)-\d{3,4}-\d{4}$/;
        return regex.test(input);
    }
    NumberValidator.isPhone = isPhone;
})(NumberValidator = exports.NumberValidator || (exports.NumberValidator = {}));
