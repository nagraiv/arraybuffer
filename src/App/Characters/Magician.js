import MagicCharacter from "./MagicCharacter";

export default class Magician extends MagicCharacter {
    constructor(name) {
        super(name, 'Magician');
        this.attack = 10;
        this.defence = 40;
    }
}