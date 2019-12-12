import * as express from "express";
import * as path from "path";
import { unique } from './a';
import * as m from "./b";
let app = express();
app.set("port", 3000);
app.use(express.static(path.join(__dirname, '')));
app.use("/", (res, req) => {
    console.log("a.js 모듈을 호출 => ", unique([1, 2, 3, 4]));
    console.log("b.js 모듈을 호출 => ", m.unique([1, 2, 3, 4]));
});

let server = app.listen(app.get("port"), () => {
    let port = app.get("port");
    console.log(port + " port Server");
});