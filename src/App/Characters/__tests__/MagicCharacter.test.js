import MagicCharacter from "../MagicCharacter";

describe('Нельзя создать персонаж без передачи обязательных параметров', () => {
    it('ничего не передаём в конструктор', () => {
        expect(() => new MagicCharacter()).toThrow('Invalid type of character!');
    });

    it('передаём только один из двух параметров', () => {
        expect(() => new MagicCharacter('Name')).toThrow('Invalid type of character!');
    });
});

describe('Нельзя создать персонаж произвольного типа', () => {
    it('конструктор должен выбрасывать ошибку, если тип не соответствует перечню', () => {
        expect(() => new MagicCharacter('Clark', 'Superman')).toThrow('Invalid type of character!');
    });
});

describe('Имя персонажа должно быть от 2 до 10 символов', () => {
    it('конструктор должен выбрасывать ошибку при слишком коротком имени', () => {
        expect.assertions(1);
        try {
            new MagicCharacter('D', 'Daemon');
        } catch (e) {
            expect(e.message).toBe('Invalid name length!');
        }
    });

    it('конструктор должен выбрасывать ошибку при слишком длинном имени', () => {
        try {
            new MagicCharacter('aVeryLongName', 'Magician');
            expect(true).toBe(false);
        } catch (e) {
            expect(e.message).toBe('Invalid name length!');
        }
    });
});

describe('Тестируем сеттер здоровья', () => {
    it('нельзя увеличить уровень здоровья погибшему герою', () => {
        const character = new MagicCharacter('Люцифер', 'Daemon');
        character.health = 0;
        try {
            character.health = 30;
            expect(true).toBe(false);
        } catch (e) {
            expect(e.message).toBe('Impossible to raise the health level of the deceased character!');
        }
    });

    it('нельзя присвоить отрицательный уровень здоровья', () => {
        const character = new MagicCharacter('Люцифер', 'Daemon');
        character.health = -30;
        expect(character.health).toBe(0);
    });
});

describe('Тестируем атаку на расстоянии', () => {
    it('дистанция не может быть отрицательной', () => {
        const character = new MagicCharacter('Гендальф', 'Magician');
        character.distance = -5;
        expect(character.distance).toBe(0);
    });

    it('устанавливаем расстояние и высчитываем атаку', () => {
        const character = new MagicCharacter('Гендальф', 'Magician');
        character.attack = 40;
        character.distance = 2;
        expect(character.attack).toBe(32);
    });

    it('при большом расстоянии атака не должна стать отрицительной', () => {
        const character = new MagicCharacter('Люцифер', 'Daemon');
        character.attack = 40;
        character.distance = 20;
        expect(character.attack).toBe(0);
    });
});

describe('Тестируем атаку под дурманом', () => {
    it('дурман уcпешно насылается на персонажа', () => {
        const character = new MagicCharacter('Гендальф', 'Magician');
        expect(character.stoned).toBeFalsy();
        character.stoned = true;
        expect(character.stoned).toBeTruthy();
    });

    it('атака под дурманом ещё меньше', () => {
        const character = new MagicCharacter('Гендальф', 'Magician');
        character.attack = 100;
        character.distance = 1;
        expect(character.attack).toBe(90);
        character.stoned = true;
        expect(character.attack).toBe(85);
    });
});
