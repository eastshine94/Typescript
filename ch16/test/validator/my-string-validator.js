"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringValidator;
(function (StringValidator) {
    function isURL(url) {
        return /^(http|https):\/\/[^ "]+$/.test(url);
    }
    StringValidator.isURL = isURL;
})(StringValidator = exports.StringValidator || (exports.StringValidator = {}));
