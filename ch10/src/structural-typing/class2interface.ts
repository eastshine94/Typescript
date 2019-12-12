
interface Person {
    name: string;
}

class Employee {
    name: string;
}

let person: Person;
person = new Employee(); // 구조가 같을 시 타입 호환이 가능함