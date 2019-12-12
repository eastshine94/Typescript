// every 연산자를 이용하면 데이터 스트림의 값 전체가 조건에 부합하는지 아닌지를 검사할 수 있다. 
// 하나라도 조건에 부합하지 않으면 false

import * as Rx from "@reactivex/rxjs";

const source = Rx.Observable.of(1, 10, 20, 30, 40);
const $every = source.every(val => val % 2 === 0);
$every.subscribe(val => console.log(val));
