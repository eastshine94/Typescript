// 명목 타이핑은 명시적으로 지정된 타입 간에만 타입이 호환된다. like JAVA, C++
enum EastAsia1 { korea = 88, china = 86, japan = 81 }
enum EastAsia2 { korea = 88, china = 86, japan = 81 }

let east1: EastAsia1 = EastAsia1.china;
let east2: EastAsia2 = EastAsia2.korea;
/*
    다른 타입 간에는 타입 호환이 이뤄지지 않아서 아래와 같이 사용할 수 없다.
    let east1: EastAsia1 = EastAsia2.china;
    let east2: EastAsia2 = EastAsia1.korea;
    east1 = east2; // 에러
    east2 = east1; // 에러
*/
east1 = 1000;
east2 = 2000;

console.log(`east=${east1} ${typeof east1}
east2=${east2} ${typeof east2}
`);

