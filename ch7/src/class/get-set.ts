class Student{
    private studentName: string;
    private studentBirthYear: number;

    get name(): string{
        return this.studentName;
    }

    set name(name: string){
        if(name.indexOf("happy") === -1){
            this.studentName = name;
        }
    }

    get birthYear(): number{
        return this.studentBirthYear;
    }
    
    set birthYear(year: number){
        if(year <= 2000) {
            this.studentBirthYear = year;
        }
    }
}

let student = new Student();
student.birthYear = 2001;
console.log("1번 : " + student.birthYear);

student.birthYear = 2000;
console.log("2번 : " + student.birthYear);

student.name = "happy";
console.log("3번 : " + student.name);

student.name = "lucky";
console.log("4번 : " + student.name);
