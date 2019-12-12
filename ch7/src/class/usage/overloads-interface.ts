/*클래스를 상속해 오버로딩하는 것보다 구조만을 포함하고 있는 인터페이스를 이용하는 것이 복잡도가 낮다.*/
interface IPoint {
    getX(x: any): any;
}

class Point implements IPoint {
    getX(x?: number | string): any {
        if (typeof x === "number") {
            return x;
        } else if (typeof x === "string") {
            return x;
        }
    }
}

let p = new Point();
console.log(p.getX());
console.log(p.getX("hello"));
console.log(p.getX(123));
