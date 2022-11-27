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
const woman = document.querySelector(".woman");
const man = document.querySelector(".man");
const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const age = document.querySelector("#age");

const weightError = document.querySelector("#weight-error");
const heightError = document.querySelector("#height-error");
const ageError = document.querySelector("#age-error");

function calculateBMR() {
  const weightKg = Number(weight.value);
  const heightCm = Number(height.value);
  const ageY = Number(age.value);

  const isWeightValid = weightKg > 0;
  const isHeightValid = heightCm > 0;
  const isAgeValid = ageY > 0;

  const BMRMan = 66.5 + 13.75 * weightKg + 5.003 * heightCm - 6.75 * ageY;
  const BMRWoman = 655.1 + 9.563 * weightKg + 1.85 * heightCm - 4.676 * ageY;

  if (isWeightValid) {
    if (isHeightValid) {
      if (isAgeValid) {
        if (man.checked === true) {
          result.innerText = "Your BMR is: " + BMRMan;
          cleanup();
        } else if (woman.checked === true) {
          result.innerText = "Your BMR is: " + BMRWoman;
          cleanup();
        } else {
            result.innerText = "Error";
          }
      } else {
        showAgeError();
      }
    } else {
        showHeightError();
    }
  } else {
    showWeightError();
    if(!isHeightValid) {
        showHeightError();
        if(!isAgeValid) {
            showAgeError();
        }
    }
  }
}

//     if (man.checked === true) {
//         if (isWeightValid) {
//         result.innerText = "Your BMR is: " + BMRMan;
//         cleanup ();
//         } else {
//             weightError ();
//         }

//     } else if(woman.checked === true){
//         result.innerText = "Your BMR is: " + BMRWoman;
//         cleanup ();
//     } else {
//         result.innerText = "Error";
//     }
// }

function cleanup() {
  weight.value = "";
  height.value = "";
  age.value = "";
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
