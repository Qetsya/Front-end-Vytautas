// const stopBtn = document.querySelector("#stop-btn");

// stopBtn.addEventListener("click", stop);

// let time = 0;

// function tick() {
//     time++;
//     console.log(time);
// }

// const currentInterval = setInterval(tick, 1000); //ms = 1sec yra 1000ms

// function stop() {
//     clearInterval(currentInterval);
// }

//start ir stop btn

import timerState from "./state.js";

const elements = {
    startButton: document.querySelector("#start-btn"),
    stopButton: document.querySelector("#stop-btn"),
    timerBox: document.querySelector("#timer"),
};

function updateTimerText(timeElapsed) {
    console.log("update", timeElapsed);
    elements.timerBox.textContent = timeElapsed;

    const seconds = timeElapsed % 60;
    const minutes = Math.floor(timeElapsed / 60) % 60;
    const hours = Math.floor(Math.floor(timeElapsed / 60) / 60);

    elements.timerBox.textContent = `${hours}:${minutes}:${seconds}`;

    console.log(hours, minutes, seconds);
}

updateTimerText(0);
//callback
elements.startButton.addEventListener("click", function () {
    console.log("start")
    timerState.start(updateTimerText);
});

elements.stopButton.addEventListener("click", function () {
    timerState.stop();
});