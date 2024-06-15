export default class ArrayBufferConverter {
    constructor(buffer) {
        this.dataView = this.load(buffer);
    }
    load(buffer) {
        return new Uint16Array(buffer);
    }

    toString() {
        // const arrToStr = [];
        // for (let i = 0; i < this.dataView.length; i += 1) {
        //     arrToStr.push(String.fromCharCode(this.dataView[i]));
        // }
        // return arrToStr.join('');

        return String.fromCharCode(...this.dataView);
    }
}