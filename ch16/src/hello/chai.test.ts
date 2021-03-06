import * as mocha from "mocha";
import * as chai from "chai";

const assert = chai.assert;
let should = chai.should();
const expect = chai.expect;
let fruit = "apple",
fruits = { favorite: ["apple", "banana", "mango"]};

describe("chai", () => {
    it("assert test", () => {
        assert.typeOf(fruit, "string");
        assert.typeOf(fruit, "string", "fruit의 타입은 string입니다.");
        assert.equal(fruit, "apple", "fruit 값은 apple입니다.");
        assert.lengthOf(fruit, 5, "fruit 값의 길이는 5입니다.");
        assert.lengthOf(fruits.favorite, 3, "fruits.favorite의 요소 개수는 3개입니다.");
    });

    it("expect test", () => {
        expect(fruit).to.be.a("string"); // 타입이 동등한지
        expect(fruit).to.equal("apple"); // 값이 동등한지
        expect(fruit).to.have.lengthOf(5); // 길이가 적합한지
        expect(fruits).to.have.property("favorite").with.lengthOf(3);
    });
    // should는 왜인지 안됨..
    it("should test", () => {
        fruit.should.be.a("string");
        fruit.should.equal("apple");
        fruit.should.have.lengthOf(5);
        fruits.should.have.property("favorite").with.lengthOf(3);
    });
});
