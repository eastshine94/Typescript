// 오버로드 함수를 통한 T + T
function concat<T>(strs1: T, strs2: T);
function concat(strs1: any, strs2: any){
    return strs1 + strs2;
}
console.log(concat<string>("Hello","World"));
// console.log(concat("Hello",123)); => 오버로드 함수에 선언된 매개변수의 형식과 일치하지 않기 때문에 에러 발생