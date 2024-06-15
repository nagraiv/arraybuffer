import {daemon, magician} from "./App/app";

console.log('=======TASK_1========');

daemon.stoned = 1;
daemon.distance = 3;
console.log('Демон атакует с силой: ', daemon.attack);

magician.health = 100 - daemon.attack;
console.log('Маг получил удар! Текущий уровень здоровья: ', magician.health);


