class PC {
    constructor(public hddCapacity: string){}

    private ram: string = "0G";
    set ramCapacity(value: string) { this.ram = value; }
    get ramCapacity() { return this.ram; }

    protected getHddCapacity(){
        return this.hddCapacity;
    }
}

class Desktop extends PC {
    constructor(public hddCapacity: string) {
        super(hddCapacity);
    }
    
    getInfo(){
        console.log("1번 HDD 용량 : " + super.getHddCapacity(), super.hddCapacity);
        console.log("2번 HDD 용량 : " + this.getHddCapacity(), this.hddCapacity);

        this.hddCapacity = "2000G";
        console.log("3번 HDD 용량 : " + super.getHddCapacity(), super.hddCapacity);
        console.log("4번 HDD 용량 : " + this.getHddCapacity(), this.hddCapacity);

        super.ramCapacity = "16G";
        console.log("5번 RAM 용량 : " + this.ramCapacity, super.ramCapacity);

        this.ramCapacity = "8G";
        console.log("6번 RAM 용량 : " + this.ramCapacity, super.ramCapacity);
    }
}

let myDesktop = new Desktop("1000G");
myDesktop.getInfo();