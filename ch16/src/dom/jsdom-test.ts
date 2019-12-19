const jsdom = require("jsdom");
const { JSDOM } = jsdom;
import fs = require("fs");
let html = fs.readFileSync("src/dom/index.html", "utf-8");

let doc = new JSDOM(html);
let window = doc.window;

console.log(window.document.documentElement.outerHTML);
console.log(window.innerWidth);
console.log(typeof window.document.getElementsByClassName);