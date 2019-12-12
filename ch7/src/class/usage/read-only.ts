interface Icount{
    readonly count: number;
}
class TestReadonly implements Icount{
    readonly count: number = 0;
    static readonly count2: number;
    private readonly count3: number;
    readonly count4: number = 0;
}

let literalObj: {readonly alias: string} = {alias: "happy"};