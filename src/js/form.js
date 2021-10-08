import emailCheck from './validate.js';
import { hidePopup } from './popup.js';
import { video } from './video.js';

export function formActions() {
    const form = document.querySelector('.js-form');
    const emailInput = form.querySelector('.js-input');
    const tip = form.querySelector('.js-error');
    
    emailInput.addEventListener('input', () => {
        tip.textContent = '';
    })
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (emailCheck(emailInput) === true) {
            hidePopup();
            video.play();
        } else {
            tip.textContent = emailCheck(emailInput);
        }
    });
}