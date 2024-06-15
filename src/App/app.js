import Magician from "./Characters/Magician";
import Daemon from "./Characters/Daemon";

const daemon = new Daemon('Люцифер');
const magician = new Magician('Гендальф');

console.log('Characters are created!\n', daemon, magician);

export {
    daemon,
    magician,
}