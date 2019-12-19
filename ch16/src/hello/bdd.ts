/*
    BDD에서 테스트 스위트는 describe() 훅으로 나타내고
    테스트 케이스는 it() 훅으로 나타낸다.
    it() 훅 내에는 참/거짓을 판별할 수 있는 expect(), assert(), should와 같은 어설션이 포함될 수 있다.
    그리고 테스트가 실행되기 전이나 테스트가 실행되고 나서 사용할 수 있는 테스트의 셋업과 관련한 훅은 다음과 같다.
    * before(): 테스트 스위트가 실행되기 전에 초기화 작업을 진행한다.
    * after(): 테스트 스위트가 실행을 마치면 부가 작업을 진행한다.
    * beforeEach(): 각 테스트 케이스가 실행되기 전에 초기화 작업을 진행한다.
    * afterEach(): 각 테스트 케이스가 실행되고 나서 부가 작업을 진행한다.
*/

import * as mocha from "mocha";
import hello from "./hello";

const assert = require("assert");

describe("동일한 숫자인지를 테스트", () => {
    before(() => {
        // 모든 테스트가 실행되기 전에 한 번만 실행
    });
    after(() => {
        // 모든 테스트를 끝마친 후 한 번만 실행
    });
    beforeEach(() => {
        // 각 테스트가 실행되기 전마다 수행
    });

    afterEach(() => {
        // 각 테스트가 실행된 후마다 수행
    });

    describe("hello()", () => {
        it("1과 동일한지", () => {
            assert.equal(1, hello(1));
        });
        it("2와 동일한지", () => {
            assert.equal(2, hello(2));
        });
        it("3과 동일한지", () => {
            assert.equal(3, hello(3));
        });
    });
});