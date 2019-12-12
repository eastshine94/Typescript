
/*static을 쓸 경우 클래스에 객체 생성 없이 접근 가능 */
class Circle {
    private static pi: number = 3.14;
    static circleArea: number = 10;

    static getArea(radius: number) {
        this.circleArea = radius * radius * this.pi;
        return this.circleArea;
    }

    static set area(pArea: number) {
        this.circleArea = pArea;
    }
    get area() {
        /*get area가 static 함수가 아니므로 this.circleArea로 못받고 Circle.circleArea로만 받아짐.*/
        return Circle.circleArea;
    }
}

console.log("1번 : " + Circle.getArea(3));

Circle.area = 100;

let circle = new Circle();

console.log("2번 : " + circle.area);