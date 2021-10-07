export default class Popup {
    constructor(el) {
        this.el = el;
    }
    hide() {
        this.el.classList.remove('visible');
    }
    show() {
        this.el.classList.add('visible');
    }
}