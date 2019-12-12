import * as ns from './car1';
namespace Car {
    let wheels: number;
    console.log(ns.Car.auto);

    class Taxi implements ns.Car.ICar{
        name: string;
        vendor: string;
    }
}

console.log(ns.Car.auto);
//console.log(Car.wheels) <- 접근 불가
//import한 car1의 namespace에 접근하는 것이므로 wheels엔 접근할 수 없다.