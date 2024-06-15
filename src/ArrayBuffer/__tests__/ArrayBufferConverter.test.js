import getBuffer from "../ArrayBuffer";
import ArrayBufferConverter from "../ArrayBufferConverter";
describe('Тестируем ArrayBufferConverter', () => {
    it('полученная строка совпадает с отправленной', () => {
        const buffer = getBuffer();
        const converter = new ArrayBufferConverter(buffer);
        const convStr = converter.toString();
        expect(convStr).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
        });
});