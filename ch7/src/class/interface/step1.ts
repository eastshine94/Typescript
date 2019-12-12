class Person1{
    public full: string;
    constructor(public name: string, public city: string) {
        this.full = `${name}(${city})`;
    }
}
let person1: Person1[] = [
    new Person1("kim", "seoul"),
    new Person1("park", "daejeon")
]

console.log(JSON.stringify(person1));