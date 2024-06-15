import Magician from "../Magician";

describe('Нельзя создать персонаж Magician без имени', () => {
    it('ничего не передаём в конструктор', () => {
        expect(() => new Magician()).toThrow('Invalid name length!');
    });
});

describe('Должен создаваться персонаж Magician с правильными параметрами', () => {
    it('attack/defence: 10/40', () => {
        const magician = new Magician('Гендальф');
        expect(magician.name).toBe('Гендальф');
        expect(magician.type).toBe('Magician');
        expect(magician.level).toBe(1);
        expect(magician.health).toBe(100);
        expect(magician.attack).toBe(10);
        expect(magician.defence).toBe(40);
        expect(magician.distance).toBe(0);
        expect(magician.stoned).toBeFalsy();
    });
});



