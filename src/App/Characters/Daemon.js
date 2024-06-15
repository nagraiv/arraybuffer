import MagicCharacter from "./MagicCharacter";

export default class Daemon extends MagicCharacter {
    constructor(name) {
        super(name, 'Daemon');
        this.attack = 10;
        this.defence = 40;
    }
}