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

// TASK BMR calculator
const woman = document.querySelector("#gender-woman");
const man = document.querySelector("#gender-man");
const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const age = document.querySelector("#age");

const weightError = document.querySelector("#weight-error");
const heightError = document.querySelector("#height-error");
const ageError = document.querySelector("#age-error");

function calculateBMR() {
    cleanupError()

  const weightKg = Number(weight.value);
  const heightCm = Number(height.value);
  const ageY = Number(age.value);

  const isWeightValid = weightKg > 0;
  const isHeightValid = heightCm > 0;
  const isAgeValid = ageY > 0;
  const isGenderValid = "man" === gender || "woman" === gender;
  const isActivityValid = "sedentary" === activity || "light" === activity || "moderately" === activity || "very" === activity || "extra" === activity;

  const BMRMan = 66.5 + 13.75 * weightKg + 5.003 * heightCm - 6.75 * ageY;
  const BMRWoman = 655.1 + 9.563 * weightKg + 1.85 * heightCm - 4.676 * ageY;


//   if (isWeightValid && isHeightValid && isAgeValid) {
//         if (man.checked === true) {
//           result.innerText = "Your BMR is: " + BMRMan;
//           cleanupInput();
//         } else if (woman.checked === true) {
//           result.innerText = "Your BMR is: " + BMRWoman;
//           cleanupInput();
//         } else {
//             result.innerText = "Error";
//         }
//   } else {
//     if(!isHeightValid) {
//         showHeightError();
//     }
//     if(!isAgeValid) {
//         showAgeError();
//     }
//     if(!isWeightValid) {
//         showWeightError();
//     }
//   }
// }
const genderEl = document.querySelector("input[name='gender']:checked");
let gender;

if (genderEl) {
    gender = genderEl.value;
}

const activityEl = document.querySelector("input[name='activity-level']:checked");
let activity;

if (activity-El) {
    activity = activityEl.value;
}

function cleanupInput() {
  weight.value = "";
  height.value = "";
  age.value = "";
}

function cleanupError() {
    weightError.innerText = "";
    heightError.innerText = "";
    ageError.innerText = "";
  }

function showWeightError() {
  weightError.innerText = "Error";
}

function showHeightError() {
  heightError.innerText = "Error";
}

function showAgeError() {
  ageError.innerText = "Error";
}
