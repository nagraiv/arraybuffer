export default class MagicCharacter {
    #health;
    #stoned;
    #attack;
    #distance;

    constructor(name, type) {
        if(!(new Set(['Magician', 'Daemon']).has(type))) {
            throw new Error('Invalid type of character!');
        }
        if (!name || name.length > 10 || name.length < 2) {
            throw new Error('Invalid name length!');
        }
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = 0;
        this.defence = 0;
        this.stoned = false;
        this.distance = 0;
    }

    set health(newValue) {
        if (this.health <= 0) {
            throw new Error('Impossible to raise the health level of the deceased character!');
        }
        if (newValue < 0) {
            this.#health = 0;
        } else {
            this.#health = newValue;
        }
    }

    get health() {
        return this.#health;
    }

    set stoned(bool) {
        this.#stoned = !!bool;
    }

    get stoned() {
        return this.#stoned;
    }

    set distance(value) {
        this.#distance = value > 0 ? value : 0;
    }

    get distance() {
        return this.#distance;
    }

    set attack(value) {
        this.#attack = value > 0 ? value : 0;
    }

    get attack() {
        let damage = this.#attack * (1 - 0.1 * this.distance);
        if (this.stoned) {
            damage -= 5 * Math.log2(this.distance + 1);
        }
        return damage > 0 ? Math.floor(damage) : 0;
    }
}