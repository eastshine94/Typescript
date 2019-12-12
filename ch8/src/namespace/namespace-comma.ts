namespace Animal {
    export function run() {
        console.log("동물이 달린다!!");
    }
}

namespace Animal.Land {
    Animal.run();
    export function run() {
        console.log("육상 동물이 달린다!!");
    }
}

namespace Animal.Land.Pet {
    Animal.Land.run();
    export function run() {
        console.log("애완 동물이 달린다!!!");
    }
    export class Cat {
        run() {
            Animal.Land.Pet.run();
        }
    }
}



let cat = new (Animal.Land.Pet).Cat();
cat.run();