// Promise.all()는 작업 완료 시점이 일정치 않아 뒤바뀐 결정 값의 순서를 호출 순서에 따라 출력해주는 역할을 한다.
function asyncDelay(order: number) {
    return new Promise((resolve, reject) => {
        let ms: number = Math.floor(Math.random() * 1000) + 1;
        setTimeout(function () {
            console.log("작업 완료 : ", order);
            resolve(order);
        }, ms);
    }).then();
}

function syncResultPromise() {
    let p1 = asyncDelay(1);
    let p2 = asyncDelay(2);
    let p3 = asyncDelay(3);
    let p4 = asyncDelay(4);

    Promise.all([p1, p2, p3, p4]).then(order => {
        console.log(`동기화된 출력 : ${order}`);
    });
}
syncResultPromise();