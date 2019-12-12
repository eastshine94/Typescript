namespace Myinfo1 {
    export let name = "happy1";
    export function getName2(){
        return Myinfo2.name2;
    }
}

namespace Myinfo2 {
    export let name2 = "happy2";
    export function getName() {
        return Myinfo1.name;
    }
}


console.log(Myinfo1.getName2());
console.log(Myinfo2.getName());