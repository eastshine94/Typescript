import { CarInfo } from './car-info-module';

CarInfo.Hello();

let car = new CarInfo.car("My car");
console.log(car.name);

let engine = new CarInfo.engine("My Engine");
console.log(engine.name);