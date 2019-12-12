const getSum = nums => {
    let sum = nums.reduce((a,b) => {
        return a+b;
    });
    
    return sum;
}
let numSum = getSum([1,2,3,4,5]);
console.log(numSum);