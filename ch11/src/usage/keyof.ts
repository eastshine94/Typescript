// 룩업 타입은 keyof로 속성을 포함하는 대상을 탐색해 유니언 타입처럼 동작한다.

function getValue<T, K extends keyof T>(obj: T, key : K){
    return obj[key];
}

let numbersKeys = { one: 1, two: 2, three: 3 };
console.log(getValue(numbersKeys, "one"));