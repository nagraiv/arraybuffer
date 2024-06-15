import {daemon, magician} from "./App/app";
import getBuffer from "./ArrayBuffer/ArrayBuffer";
import ArrayBufferConverter from "./ArrayBuffer/ArrayBufferConverter";

console.log('=======TASK_1========');

daemon.stoned = 1;
daemon.distance = 3;
console.log('Демон атакует с силой: ', daemon.attack);

magician.health = 100 - daemon.attack;
console.log('Маг получил удар! Текущий уровень здоровья: ', magician.health);

console.log('=======TASK_2========');

const bufferToConvert = getBuffer();
console.log(bufferToConvert);

const arrayBufferConverter = new ArrayBufferConverter(bufferToConvert);
const convertedString = arrayBufferConverter.toString();

console.log(convertedString, JSON.parse(convertedString));


