"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var expect = require('chai').expect;
var jsdom = require("jsdom");
var JSDOM = jsdom.JSDOM;
var fs = require("fs");
describe('입력 테스트', function () {
    var $;
    before(function () {
        var html = fs.readFileSync("./index.html", "utf-8");
        var document = new JSDOM(html);
        var window = document.window;
        $ = require('jquery')(window);
    });
    it('ID 입력 최소길이와 최대길이에 대한 테스트', function () {
        expect($('input[name=userID]').attr("minlength")).eql('3');
        expect($('input[name=userID]').attr("maxlength")).eql('5');
    });
    it('비밀번호의 최소길이와 최대길이에 대한 테스트', function () {
        expect($('input[name=userPW]').attr("minlength")).eql('3');
        expect($('input[name=userPW]').attr("maxlength")).eql('5');
    });
});
