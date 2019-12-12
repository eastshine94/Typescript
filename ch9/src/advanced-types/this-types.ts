class AddCalc {
    public constructor(public value: number = 0) { }
    public add(operand: number): this {
        this.value += operand;
        return this;
    }
}

class MyCalc extends AddCalc {
    public multiply(operand: number): this {
        this.value *= operand;
        return this;
    }
}

let calc = new MyCalc(3).add(10).multiply(5);
console.log(calc.value);

/*
    return this를 해주지 않으면( 메서드 체이닝을 해주지 않을 때 )
    메서드가 더는 MyCalc 클래스를 참조할 수 없기 때문에 다음 체이닝 메서드를 추가 할 수 없게 된다.
    따라서 다음과 같이 각각 해줘야 원하는 값이 나오게 된다.
    
    let calc = new MyCalc(3);
    calc.add(10);
    calc.multiply(5);
*/