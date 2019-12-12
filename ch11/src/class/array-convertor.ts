class ArrayConvertor<T> {
    elements: Array<T>;
    constructor(elms: Array<T>) {
        this.elements = elms;
    }

    array2string(): string {
        let text = "";
        for (let i = 0; i < this.elements.length; i++) {
            if (i > 0) {
                text += " ";
            }

            text += this.elements[i].toString();
        }
        return text;
    }

    getValue(elms: Array<T>, index: number): T {
        return elms[index];
    }

}

let arr = [1, 2];
let numConvertor = new ArrayConvertor<number>(arr);
console.log(numConvertor.array2string());
console.log(numConvertor.getValue(arr, 0));

let arr2 = [];
arr2.push("a");
arr2.push("b");
let stringConvertor = new ArrayConvertor<string>(arr2);
console.log(stringConvertor.array2string());
console.log(stringConvertor.getValue(arr2, 0));