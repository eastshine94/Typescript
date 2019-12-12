type EchoCallBackType = (message: string) => void;

const callbackEcho: EchoCallBackType = message => message;
const callbackEchoWithLength: EchoCallBackType = message => `${message}(${message.length})`;

const echoFunction2 = (message: string, callback) => {
    return callback(message);
}

const responseEcho = echoFunction2("hello", callbackEcho);
const responseEchoWithLength = echoFunction2("hello", callbackEchoWithLength);

console.log(responseEcho);
console.log(responseEchoWithLength);