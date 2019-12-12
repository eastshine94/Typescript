class Flashlight {
    constructor(public lightIntensity){}

    getLightIntensity(){
        return this.lightIntensity;
    }
}

class Bicycle {
    constructor(public numberOfWheel) {

    }

    getNumberOfWheel(){
        return this.numberOfWheel;
    }
}

class MountainBike extends Bicycle{
    flashlight: Flashlight;
    
    constructor(public numberOfWheel: number, public hasBackSaddle: boolean){
        super(numberOfWheel);

        this.flashlight = new Flashlight(90);
    }

    getHasBackSaddle() {
        return this.hasBackSaddle;
    }
    getLightIntensity() {
        return this.flashlight.getLightIntensity();
    }
}
let numberOfWheel = 4;
let hasBackSaddle = true;

let mountainBike = new MountainBike(numberOfWheel, hasBackSaddle);
console.log("자전거 안장의 유무 : " + mountainBike.getHasBackSaddle());
console.log("자전거의 바퀴 개수 : " + mountainBike.getNumberOfWheel());
console.log("라이트의 세기 : " + mountainBike.getLightIntensity());