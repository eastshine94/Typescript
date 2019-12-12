/*
    never 타입은 다음과 같은 두 가지 상황에서 사용된다.
    1. 함수에 닿을 수 없는 코드 영역이 있어 반환값이 존재하지 않을 때 ex) 무한 루프로 인해 루프 다음 코드가 실행 될 수 없을 때
    2. 함수에 Throw 객체가 반환돼 오류가 발생할 때
*/

const neverTouch = () => {
    while (true) {
        console.log("Never");
    }
    console.log("Never Touch");
};

let resultNever: never = neverTouch();
