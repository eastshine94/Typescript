interface Person2{
    name: string;
    city: string;
}

let person2: Person2[] = [
    { name: "a", city: "seoul" },
    { name: "b", city: "daejeon" },
    { name: "c", city: "daegu" }
];

console.log(JSON.stringify(person2));