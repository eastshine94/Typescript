const basicRejectPromise = new Promise((resolve, reject) => {
    reject("ERROR!");
}).catch((err) => {
    console.log(err);
});

