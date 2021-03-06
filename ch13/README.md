# 서드 파티 라이브러리와 타입 정의 파일
## 타입 정의 파일
타입 정의 파일은 타입이 없는 자바스크립트 아리브러리에 대한 타입 정보를 타입스크립트 컴파일러에 전달해 컴파일 수행을 돕는다. 타입 정의 파일은 .d.ts 확장자를 사용한다.   
자바스크립트 라이브러리에는 타입 정보나 구조 정보가 없기 때문에 타입스크립트 컴파일러가 자바스크립트 라이브러리의 API를 인식할 수 있게 하려면 타입 정의 파일을 정의해야 한다.   
타입 정의 파일은 컴파일러가 이용하는데 타입을 검사하거나 코드 어시스트, 컴파일 에러를 표시할 때 사용한다.

### 타입 정의 파일 작성시 앰비언트 선언
자바스크립트 라이브러리는 API 형태로 외부로 공개된 모듈을 포함한다. 외부로 공개된 모듈은 보통 export로 선언되었다. 이들 모듈은 declare 키워드를 통해 선언된다. 이러한 선언을 **앰비언트 선언(ambient declarations)**이라 한다. declare 선언은 실제 구현 내용은 포함하지 않고 단지 정의만 포함한다.   
ex) export declare function area( ... ) { ... };
    declare module "url" {
        export interface Url{ ... }
    }

위와 같이 선언하며 module 키워드를 이용해 별도의 이름 영역으로 분리해 서언함으로써 전역 오염이 생기는 것을 방지한다.