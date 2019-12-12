// 유니온 타입을 이용해 제너릭 타입 설정
function concat<T extends string | number>(strs1: T, strs2: T): T;
function concat(strs1: any, strs2: any) {
    return strs1 + strs2;
}
console.log(concat<string | number>("Hello", 123));
