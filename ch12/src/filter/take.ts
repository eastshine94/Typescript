// 1000ms 마다 숫자를 0, 1, 2 ... 와 같은 형태로 순차적으로 데이터 스트림을 생성
// take가 3이므로 0, 1, 2가 출력
import * as Rx from "@reactivex/rxjs";

const interval = Rx.Observable.interval(1000);
const take$ = interval.take(3);
take$.subscribe(val => console.log(val));