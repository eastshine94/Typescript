const promiseAsync = new Promise((resolve, reject) => {
    let sec: number = (Math.floor(Math.random() * 5) + 1);
    setTimeout((isTrue) => {
        if (isTrue) {
            resolve(sec);
        }
        else {
            reject("ERROR!!");
        }
    }, sec * 1000, true);
}).then(res => {
    console.log(res + "s");
}).catch(e => {
    console.error(e);
});