interface Monitor{
    getName(): string;
}

class Led implements Monitor{
    constructor(private name : string){}
    getName(): string {
        return "LED => " + this.name;
    }
}

class Oled implements Monitor{
    constructor(private name : string){}
    getName(): string {
        return "OLED => " + this.name;
    }
}

class MonitorDisplayTest{
    display(monitor:Monitor){
        let myMonitor: Monitor = monitor;
        return myMonitor.getName();
    }
}

let displayTest = new MonitorDisplayTest();
console.log("1번 : ", displayTest.display(new Led("LED TV")));
console.log("2번 : ", displayTest.display(new Oled("OLED TV")));