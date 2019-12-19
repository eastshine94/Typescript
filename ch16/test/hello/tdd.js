"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hello_1 = require("./hello");
var assert = require("assert");
suite("동일한 숫자인지를 테스트", function () {
    setup(function () {
        // 객체를 생성하거나 관련 변수를 초기화
    });
    suite('hello()', function () {
        test('1과 동일한지', function () {
            assert.equal(1, hello_1.default(1));
        });
        test('2와 동일한지', function () {
            assert.equal(2, hello_1.default(2));
        });
        test('3과 동일한지', function () {
            assert.equal(3, hello_1.default(3));
        });
    });
});
// cmd 창에서 mocha --ui tdd tdd.js 또는 mocha --ui tdd --reporter spec tdd.js
// reporter에는 base, doc, dot, html, index, json-stream, json, landing, list, markdown, min, nyan, progress, spec, tap, xunit이 있다.
