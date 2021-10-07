// scss
import './styles/styles.scss';

//js
import Popup from './js/popup.js';
import emailCheck from './js/validate.js';
import {startTimer, stopTimer} from './js/timer.js';

const popup = new Popup(document.querySelector('.js-popup'));

const video = document.querySelector('.js-video');
const buttonPlay = document.querySelector('.js-play');
const videoOverlay = document.querySelector('.js-overlay');

const form = document.querySelector('.js-form');
const emailInput = form.querySelector('.js-input');
const tip = form.querySelector('.js-error');

const startTimerWithActions = startTimer.bind(null, runLimitActions);

video.addEventListener('play', startTimerWithActions);
video.addEventListener('pause', stopTimer);

buttonPlay.addEventListener('click', () => {
    buttonPlay.remove();
    videoOverlay.classList.add('hidden');
    video.play();
});

emailInput.addEventListener('input', () => {
    tip.textContent = '';
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (emailCheck(emailInput) === true) {
        popup.hide();
        video.play();
    } else {
        tip.textContent = emailCheck(emailInput);
    }
});

function runLimitActions() {
    video.removeEventListener('play', startTimerWithActions);
    video.removeEventListener('pause', stopTimer);
    popup.show();
    if (document.fullscreenElement === video) {
        document.exitFullscreen();
    }
    video.pause();
}