/* tsoonfig.json에서 "strictNullChecks": true로 할 때,
null과 undefined를 변수에 할당할 수 없다. */

let studentName: string ;
studentName = "happy";
// studentName = null; => 에러
// studentName = undefined; => 에러

// null과 undefiend를 타입으로 설정하면 변수에 할당 가능
let title: string | null;
title = "Typescript Programming!";
title = null;

let title2: string | undefined;
title2 = "Typescript Programming!";
title2 = undefined;
