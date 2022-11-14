// let svoris = prompt("koks jusu svoris? (kg)");
// // let svorisKg = Number(svoris);

// // console.log(svorisKg, typeof svorisKg)

let svoris = prompt("koks jusu svoris? (kg)");
let svorisKg = Number(svoris);


let ugisCm = Number(ugis);
let ugis = prompt('koks jusu ugis? (cm)');

let ugisCmKv = ugisCm**2;

const daugiklis = 10_000;

const bmi = svorisKg / ugisCmKv * daugiklis; 

console.log(bmi);
alert(`jusu BMI yra ${bmi}`);
