interface Profile {
    name: string;
    gender?: string;
    age: number;
}

type Profile1 = keyof Profile;
type Profile2 = keyof Profile[]; // === []
type Profile3 = keyof { [x: string]: Profile };
type Profile4 = keyof Profile["name"]; // === string

let pValue: Profile = { name: "aa", age: 2 };
let pValue1: Profile1 = "name"; // === let pValue1: "name | gender | age" = "name";
// let pValue2: Profile1 = "name2";  => 인터페이스에 일치하는 속성 이름이 없으므로 에러
let pValue3: Profile2 = "length"; // 배열 타입의 내장 속성인 length concat 등을 할당해 사용 가능
let pValue4: Profile2 = "push";
// let pValue5: Profile2 = "pus"; pus는 배열 타입의 내장 속성이 아니므로 에러
let pValue5: Profile3 = "hello"; // 어떤 문자열도 입력 가능
let pValue6: Profile4 = "length"; // string 타입의 내장 속성을 할당해 사용 가능
// let pValue7: Profile4 = "abc"; => strig의 내장 속성에 abc가 없으므로 에러

console.log(`1번 : ${pValue1} / 2번 : 오류 / 3번 : ${pValue3} / 4번 : ${pValue4}
/ 5번 : ${pValue5} / 6번 : ${pValue6} / 7번 : 오류`);
