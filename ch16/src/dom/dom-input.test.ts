/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
import * as mocha from 'mocha';

let expect = require('chai').expect;
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
import fs = require("fs");


describe('입력 테스트', function () {    
    let $;

    before(function () {
        let html = fs.readFileSync("./index.html", "utf-8");
        let document = new JSDOM(html);
        let window = document.window;
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