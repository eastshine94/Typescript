class Planet {
    public diameter: number;
    protected isTransduction: boolean = true;

    getIsTransduction(): boolean {
        return this.isTransduction;
    }

    stopTransduction(): void {
        console.log("stop1");
        this.isTransduction = false;
    }
}

class Earth extends Planet {
    public features: string[] = ["soil", "water", "oxyzen"];
    stopTransduction(): void {
        console.log("stop2");
        this.isTransduction = false;
    }
}

let earth: Planet = new Earth();
earth.diameter = 12656.2
console.log("1번 : ", earth.diameter);
console.log("2번 : ", earth.getIsTransduction());
earth.stopTransduction();
console.log("3번 : ", earth.getIsTransduction());
//console.log(earth.features) <- 접근불가
/*earth가 부모 클래스(Planet)의 타입으로 지정되어 있기 때문에 
자식 클래스(Earth)로 객체를 할당 받더라도 자식 클래스(Earth)에 접근할 수 없다.*/