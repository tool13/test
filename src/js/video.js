const video = document.querySelector('.js-video');
const buttonPlay = document.querySelector('.js-play');
const videoOverlay = document.querySelector('.js-overlay');

import {startTimer, stopTimer} from './timer.js';
import { showPopup } from './popup.js';

const startTimerWithActions = startTimer.bind(null, runLimitActions);

function runLimitActions() {
    video.removeEventListener('play', startTimerWithActions);
    video.removeEventListener('pause', stopTimer);
    showPopup();
    if (document.fullscreenElement === video) {
        document.exitFullscreen();
    }
    video.pause();
}

function videoActions() {
    video.addEventListener('play', startTimerWithActions);
    video.addEventListener('pause', stopTimer);
    
    buttonPlay.addEventListener('click', () => {
        buttonPlay.remove();
        videoOverlay.classList.add('hidden');
        video.play();
    });
}

export {video, videoActions};