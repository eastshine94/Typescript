// 덕 타이핑은 런타임 시 동적으로 타입의 구조가 정해지는 타입 지정 방식
class Duck {
    speak() {
        console.log("Quak!");
    }

    swim() {
        console.log("Duck swimming");
    }
}

class Goose {
    speak() {
        console.log("squawk!");
    }

    swim() {
        console.log("Goose swimming");
    }
}

interface DuckGoose {
    speak();
    swim();
}

function swim(obj: DuckGoose) {
    obj.speak();
    obj.swim();
}

let duck = new Duck();
let goose = new Goose();
swim(duck);
swim(goose);

/*
    obj 매개변수처럼 런타임 시 객체가 전달되면 동적으로 객체의 구조가 결정된다.
    만약 obj가 swim()나 speak() 메소드가 없을 경우 런타임 에러가 발생한다.
    이를 방지하기 위해 interface를 이용하여 객체의 행동을 제한하여 안정성을 강화한다.
*/