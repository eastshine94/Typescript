function concat<T>(strs1: T, strs2: T) {
    console.log(typeof strs1, strs1);
    console.log(typeof strs2, strs2);
    // return strs1 + strs2; => 타입을 모르므로 T + T 연산이 불가능하다.
    return String(strs1) + String(strs2); // 불필요한 타입 캐스팅을 통해야 한다.
}

concat("abc", "123"); // 타입 인수를 생략 (타입을 추론해야 함)
concat<string>("abc", "123"); // 타입 인수 추가 (명시적인 타입이 선언됨)