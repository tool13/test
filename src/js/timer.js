const timeLimit = 5000;
const second = 1000;
let timerId;
let timer = 0;

export {startTimer, stopTimer};

function startTimer(actions) {
    setTimeout(function checkTime() {
        timer += second;
        timerId = setTimeout(checkTime, second);
        if (timer >= timeLimit) {
            stopTimer();
            actions();
        }
    }, second);
}

function stopTimer() {
    clearTimeout(timerId);
}