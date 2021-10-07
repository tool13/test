// scss
import './styles/styles.scss';

//js
const timeLimit = 5000;
const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const video = document.querySelector('.js-video');
const buttonPlay = document.querySelector('.js-play');
const videoOverlay = document.querySelector('.js-overlay');

const popup = document.querySelector('.js-popup');

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
    if (emailCheck()) {
        popup.classList.remove('visible');
        video.play();
    }
});

function emailCheck() {
    if (emailInput.value.trim() === '') {
        tip.textContent = emailInput.dataset.empty;
        return false;
    }
    if (!regEmail.test(emailInput.value)) {
        tip.textContent = emailInput.dataset.wrong;
        return false;
    }
    return true;
}

function startTimer() {
    setTimeout(function checkTime() {
        timer += 1000;
        timerId = setTimeout(checkTime, 1000);
        if (timer >= timeLimit) {
            stopTimer();
            video.removeEventListener('play', startTimer);
            video.removeEventListener('pause', stopTimer);
            popup.classList.add('visible');
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