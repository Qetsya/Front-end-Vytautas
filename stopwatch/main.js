

import timerState from "./state.js";
import { getTimeFormat } from "./utility.js";

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

    elements.timerBox.textContent = `${getTimeFormat(hours)}:${getTimeFormat(minutes)}:${getTimeFormat(seconds)}`;

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