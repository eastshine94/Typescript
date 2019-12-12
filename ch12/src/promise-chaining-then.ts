let chainingPromise = new Promise((resolve, reject) => {
    resolve(1);
}).then((value) => {
    console.log(value); 
    return 2;
}).then((value) => {
    console.log(2);
    throw "Exception!!";
}).catch((e) => {
    console.error(e);
})