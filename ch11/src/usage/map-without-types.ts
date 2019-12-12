let myMap = new Map();
myMap.set(1,"one");
myMap.set(2,"two");

for (let v of myMap){
    console.log(v);
}

let mapIter = myMap[Symbol.iterator]();
console.log(mapIter.next().value);
console.log(mapIter.next().value);
