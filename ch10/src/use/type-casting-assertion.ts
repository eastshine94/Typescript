// 함수를 이용한 타입 캐스팅과 타입 어설션을 이용한 타입 호환
let myNum: any = "2017";

// 타입 캐스팅
let num1 = + myNum; // + 연산자를 이용하여 string을 number로 변환
let num2 = Number(myNum);
let num3 = parseInt(myNum);
console.log(`num1=${num1}, ${typeof num1}`);
console.log(`num2=${num2}, ${typeof num2}`);
console.log(`num3=${num3}, ${typeof num3}`);

// 타입 호환이 되어 컴파일 시 에러가 발생하지 않음
// num4, num5가 number이지만 결과값은 string 타입임
let num4: number = <number>myNum;
let num5: number = myNum as number;
console.log(`num4=${num4}, ${typeof num4}`);
console.log(`num5=${num5}, ${typeof num5}`);

