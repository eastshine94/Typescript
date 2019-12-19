/*
    테스트 파일을 작성할 때 가장 큰 단위는 테스트 스위트(test suite)이다. 테스트 스위트는 여러 테스트 케이스를 포함한다.
    테스트 스위트는 TDD 테스트에서 테스트 계획에서 도출된 하나의 요구사항에 해당한다.
    BDD에서는 테스트 시나리오에 해당한다.
    * suiteSetup() : 테스트 스위트가 실행되기 전에 초기화 작업을 진행한다.
    * suiteTeardown() : 테스트 스위트가 실행을 마치면 부가 작업을 진행한다.
    * setUp() : 각 테스트 케이스가 실행되기 전에 초기화 작업을 진행한다.
    * teardown() : 각 테스트 케이스가 실행되고 나서 부가 작업을 진행한다.
*/
import * as mocha from "mocha";
import hello from './hello';

const assert = require("assert");

suite("동일한 숫자인지를 테스트", () => {
    setup(() => {
        // 객체를 생성하거나 관련 변수를 초기화
    });
    suite('hello()', () => {
        test('1과 동일한지', () => {
            assert.equal(1, hello(1));
        });
        test('2와 동일한지', () => {
            assert.equal(2, hello(2));
        });
        test('3과 동일한지', () => {
            assert.equal(3, hello(3));
        });
    });
});

// cmd 창에서 mocha --ui tdd tdd.js 또는 mocha --ui tdd --reporter spec tdd.js
// reporter에는 base, doc, dot, html, index, json-stream, json, landing, list, markdown, min, nyan, progress, spec, tap, xunit이 있다.