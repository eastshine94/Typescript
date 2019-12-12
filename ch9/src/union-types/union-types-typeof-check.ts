function myIndexOf(x: number | string, y: string){
    /* 타입 가드 : 변수가 유니온 타입으로 선언되었을 때, 
    변수의 타입을 검사하여 타입 안정성을 확보하고 해당 기능을 수행한다. */
    if(typeof x === "string"){
        return x.indexOf(y);
    }

    else{
        return -1;
    }
}

console.log(myIndexOf("hello", "e"));
console.log(myIndexOf(1, "e"));