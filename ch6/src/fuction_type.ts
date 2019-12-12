type calcType = (a: number, b: number) => number;
const addCalc: calcType = (a, b) => {
    return a + b;
};
const minusCalc: calcType = (a, b) => {
    return a - b;
};
console.log("addCalc : " + addCalc(4, 2));
console.log("minusCalc : " + minusCalc(4, 2));