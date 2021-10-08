const timeLimit = 5000;
const second = 1000;
let timerId;
let timer = 0;

export {startTimer, stopTimer};

function startTimer(actions) {
    setTimeout(function checkTime() {
        if (timer >= timeLimit) {
            stopTimer();
            actions();
        }
        timer += second;
        timerId = setTimeout(checkTime, second);
    }, second);
}

function stopTimer() {
    clearTimeout(timerId);
}