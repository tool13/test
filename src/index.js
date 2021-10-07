// scss
import './styles/styles.scss';

//js
import Popup from './js/popup.js';
import emailCheck from './js/validate.js';

const timeLimit = 5000;

const video = document.querySelector('.js-video');
const buttonPlay = document.querySelector('.js-play');
const videoOverlay = document.querySelector('.js-overlay');

const popup = new Popup(document.querySelector('.js-popup'));

const form = document.querySelector('.js-form');
const emailInput = form.querySelector('.js-input');
const tip = form.querySelector('.js-error');

let timerId;
let timer = 0;

video.addEventListener('play', startTimer);
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

function startTimer() {
    setTimeout(function checkTime() {
        timer += 1000;
        timerId = setTimeout(checkTime, 1000);
        if (timer >= timeLimit) {
            stopTimer();
            video.removeEventListener('play', startTimer);
            video.removeEventListener('pause', stopTimer);
            popup.show();
            if (document.fullscreenElement === video) {
                document.exitFullscreen();
            }
            video.pause();
        }
    }, 1000);
}

function stopTimer() {
    clearTimeout(timerId);
}