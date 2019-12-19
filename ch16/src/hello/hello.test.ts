/* 
    카이(chai)라는 어설션 라이브러리 사용
    대표적인 어설션은 assert(), expert(), should 가 있다
    이러한 어설션들은 입력값에 대한 조건을 주어 입력이 참인지 거짓인지 판단한다.
 */
import * as mocha from "mocha";

import * as chai from "chai";
import hello from "./hello";

describe("hello 테스트", () => {
    it("동일한 문자를 반환하는지를 테스트", () => {
        chai.expect(hello("world")).to.be.equals("world");
    });
});

// tsc hello.test.ts & mocha hello.test.js;