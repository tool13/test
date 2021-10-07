const timeLimit = 5000;
let timerId;
let timer = 0;

export {startTimer, stopTimer};

function startTimer(actions) {
    setTimeout(function checkTime() {
        timer += 1000;
        timerId = setTimeout(checkTime, 1000);
        if (timer >= timeLimit) {
            stopTimer();
            actions();
        }
    }, 1000);
}

function stopTimer() {
    clearTimeout(timerId);
}