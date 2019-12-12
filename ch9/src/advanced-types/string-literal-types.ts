type EventType = "keyup" | "mouseover"; /* keyup과 mouseover 이벤트로 제한함 */

const myEvent: EventType = "keyup";
console.log(typeof myEvent, myEvent);

function on(event: EventType, callback: (message: string) => any) {
    console.log(typeof event, event);
    callback("callback");
}

on(myEvent, (message) => console.log(message));