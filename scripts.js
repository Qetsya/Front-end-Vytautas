let i = 0;
i += 3;
console.log("pirmas", i); //1

i++; //prideda 1
console.log("antras", i);

++i;
console.log("tracias", i);

// //--------------------------------------------

let z = 0;
z += 1;
console.log(z++); // 0 // 1. console.log; 2. z+= 1; // 1
console.log(z); // 2
console.log(++z); // 2 // 1. z += 1; 2. console.log; //2

// /*
// 1. >
// 2. <
// 3. >=
// 4. <=
// 5. ==
// 6. ==
// 7. !=
// 8. !==
// */

const x = "asd";
const y = "as";
console.log(x.length > y.length);

const metai = prompt("Kokie dabar metai?");
if (metai === "2022") {
    alert("Tu teisus!");
} else if (Number(metai) < 2000) {
    alert("Visiskai nepataikei!");
} else {
    alert("Tu neteisus!");
}

//TASK with if

const color = prompt("Kokia spalva? (red, yello, blue)");
const model = prompt("Koks modelis? (Irasykite metus");
const make = prompt("Kokia marke? (Ferrari etc)");
const mileage = prompt("Kokia rida? (Kiek km nuvaziuota)");

if (color === "red") {
  if (Number(model) > 2010) {
    alert("Buy");
  } else if (mileage < 50000) {
    alert("Buy");
  } else {
    alert("Don't buy");
  }
} else {
  //no
  if (color === "yellow") {
    //yes
    if (make === ferrari) {
      alert("Buy");
    } else {
      alert("Don't buy");
    }
  } else {
    alert("Don't buy");
  }
}

//BMI task with if

const svoris = Number(prompt("Koks tavo svoris?kg"));
const ugisKv = Number(prompt("Koks tavo ugis?cm"))**2;

const kmi = svoris / ugisKv;

if (kmi < 18.5) {
    alert("Underweight");
}
else if (kmi < 25) {
    alert("Normal");
}
else if (kmi < 30) {
    alert("Overweight");
}
else if (kmi < 40) {
    alert("Obesity");
}
else {
    alert("Extreme obesity");
}

//TASK BMR

const gender = prompt("What is your gender? (male, female)");
const weight = Number(prompt("What is your weight? (kg)"));
const height = Number(prompt("What is your height? (cm)"));
const age = Number(prompt("What is your age? (years)"));
const activityLevel = Number(prompt("What is your body type? (0, 1, 2, 3)"));

let bmr;

if (gender === "vyras") {
    bmr = (66.5 + (13.75 * weight) + (5.003 + height) - (6.75 * age))
    console.log("vyras");
}
else {
    bmr = (655.1 + (9.563 * weight) + (1.850 + height) - (4.676 * age))
    console.log("moteris");
}

console.log(bmr);

if (activityLevel === 0) {
    alert(bmr * 1.2);
}
else if (activityLevel === 1) {
    alert(bmr * 1.375);
}
else if (activityLevel === 2) {
    alert(bmr * 1.55);
}
else if (activityLevel === 3) {
    alert(bmr * 1.725);
}
else (activityLevel === 1) {
    alert(bmr * 1.9);
}


//TASK project development

const positiveAnswer = "y";
const negativeAnswer = "n";
const options =  " " + positiveAnswer + " " + negativeAnswer;

const budget = prompt("Definite budget?" + options);


if (budget === positiveAnswer) {
    const champion = prompt("Known champion for it?" + options);
    if (champion === positiveAnswer) {
        const scope = prompt("Clear project scope?" + options);
        if (scope === positiveAnswer) {
            const timescale = prompt("Achievable Timescale?" + options);
            if (timescale === positiveAnswer) {
                alert("Go for it.");
            }
            else if (timescale === negativeAnswer) {
                alert("Get more time");
            }
        }
        else if (scope === negativeAnswer) {
            const profit = prompt("Happy to profit?" + options);
            if (profit === positiveAnswer) {
                alert("Cash in");
            }
            else if (profit === negativeAnswer) {
                alert("Explain why it matters");
            }
        }
    }
    else if (champion === negativeAnswer) {
        alert("Leave it alone");
    }
    
}
else if (budget === negativeAnswer) {
    const funding = prompt("Alternative funding?" + options);
    if (funding === positiveAnswer) {
        alert("Sort out funding");
    }
    else if (funding === negativeAnswer) {
        alert("Leave it alone");
    }
}





