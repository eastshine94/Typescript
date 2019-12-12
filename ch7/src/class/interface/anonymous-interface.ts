interface IFormat {
    (data: string, toUpper?: boolean): string;
}

let format: IFormat = (str: string, isUpper: boolean) => {
    if (isUpper) {
        return str.toUpperCase();
    }
    else {
        return str;
    }
};

console.log(format("1 : Happy!"));
console.log(format("2 : Happy!", true));
console.log(format("3 : Happy!", false));