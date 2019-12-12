// 구조 타이핑은 타입의 구조만 같으면 서로 호환 가능한 타입 지정 방식이다.

class Animal {
    name: number;
    constructor(name: string, weight: number) { }
}

class Bird {
    name: number;
    constructor(speed: number) { }
}

let animal: Animal = new Animal("happy", 100);
let bird: Bird = new Bird(10);

animal = bird; // 타입 호환이 가능
bird = animal; // 타입 호환이 가능

/*
    animal과 bird 모두 name이라는 멤버변수만 가지고 있기 때문에 타입 호환이 가능하다.
    생성자의 매개 변수가 달라도 접근 제한자가 설정되지 않아 private가 defalut 값으로 들어간다.
    따라서 생성자 내부에서만 사용가능하므로 클래스 구조에 영향을 미치지 않는다.
*/