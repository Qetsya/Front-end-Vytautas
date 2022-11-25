// console.log - debugging

// kintamieji
// let ir const deklaravimas

// naršyklės funkcijos
// prompt, alert

// duomenų tipai
// string, number, boolean, null, undefined
// tipų tikrinimas typeof

// operatoriai
// ===, +, -, *, /, >, <, **, !==, >=, <=, %

// if () {},  else if () {}, else {}

// function () {}

// funkcija pasiimti elementą
// const element = document.querySelector(".query")

// elemento parametrai
// element.innerText
// element.className


// TASK dark, light 
const lightMode = "light";
const darkMode = "dark";

const mode = document.querySelector("body");

function changeMode() {
    const modeLight = mode.className === lightMode;
    if (modeLight) {
        mode.className = darkMode;
    } else {
        mode.className = lightMode;
    }
}

// TASK input, button

const tips = document.querySelector("#tips");
const answer = document.querySelector("#answer");

function calculate() {
    const calculatedTips = Number(tips.value) * 0.18;
    console.log(calculatedTips);
    answer.innerText = "Atsakymas: " + calculatedTips;
}


//TASK BMI
const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");

const heightError = document.querySelector("#height-error");
const weightError = document.querySelector("#weight-error");
const result = document.querySelector("#result");

function calculateBMI() {
    cleanupResult();

    const heightCm = Number(heightInput.value);
    const weightKg = Number(weightInput.value);

    const isHeightValid = heightCm > 0;
    const isWeightValid = weightKg > 0;

    if (isHeightValid) {
        if (isWeightValid){
            const BMI = (weightKg / heightCm / heightCm) * 10_000;
            result.innerText = BMI;
            heightInput.value = "";
            weightInput.value = "";
        } else {
            showWeightError();
        }
    } else {
        showHeightError();
        if(!isWeightValid) {
            showWeightError();
        }
    }
}

function cleanupResult() {
    heightError.innerText = "";
    weightError.innerText = "";
    result.innerText = "";
}

function showHeightError() {
    heightError.innerText = "Error";
}

function showWeightError() {
    weightError.innerText = "Error";
}