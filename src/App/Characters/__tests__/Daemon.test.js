import Daemon from "../Daemon";

describe('Нельзя создать персонаж Daemon без имени', () => {
    it('ничего не передаём в конструктор', () => {
        expect(() => new Daemon()).toThrow('Invalid name length!');
    });
});

describe('Должен создаваться персонаж Daemon с правильными параметрами', () => {
    it('attack/defence: 10/40', () => {
        const daemon = new Daemon('Люцифер');
        expect(daemon.name).toBe('Люцифер');
        expect(daemon.type).toBe('Daemon');
        expect(daemon.level).toBe(1);
        expect(daemon.health).toBe(100);
        expect(daemon.attack).toBe(10);
        expect(daemon.defence).toBe(40);
        expect(daemon.distance).toBe(0);
        expect(daemon.stoned).toBeFalsy();
    });
});


