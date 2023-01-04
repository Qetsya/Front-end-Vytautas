// const catHealth = document.querySelector("#cat-health");
// const mouseHealth = document.querySelector("#mouse-health");

// const attackBtn = document.querySelector("#attack-btn");
// const defendBtn = document.querySelector("#defend-btn");
// const healBtn = document.querySelector("#heal-btn");

// const heroes = document.querySelector(".heroes");
// const winnerCat = document.querySelector(".winner-cat");
// const winnerHamster = document.querySelector(".winner-hamster");

// const combatLog = document.querySelector(".game-log");

// attackBtn.addEventListener("click", attackAction);
// defendBtn.addEventListener("click", defendAction);
// healBtn.addEventListener("click", healAction);

// catHealth.value = Number("200");
// mouseHealth.value = Number("100");
// catHealth.textContent = catHealth.value;
// mouseHealth.textContent = mouseHealth.value;

// let mouseDamage;
// let catDamage;
// let wasMouseDefending = false;
// let wasMouseHealing = false;
// let combatNumber = 0;

// function attackAction() {
//   const chanceCatTakesNoDmg = Math.random() * 100 < 34;
//   mouseDamage = Math.ceil(Math.random() * 10);

//   if(wasMouseDefending) {
//     mouseDamage = (Math.ceil(Math.random() * 10)) * 2;
//   } else {
//     mouseDamage = Math.ceil(Math.random() * 10);
//   }

//   console.log("was mouse defending: " + wasMouseDefending);
//   if(wasMouseDefending) {
//     mouseDamage = 0;
//     catDamage = 0;//double dmg
//     console.log("mouse defends");

    
//   } else {
//     if(chanceCatTakesNoDmg) {
//       mouseDamage = 0;
//       console.log(" cat blocked");
//       catAttack();
//     } else {
//       catHealth.value -= mouseDamage;
//       if(catHealth.value > 0) {
//         updateCatHealth();
//         catAttack();
//       } else {
//         displayWinner();
//       }
//     }
//   }

//   showCombatLog();
//   wasMouseDefending = false;
//   return mouseDamage;
// }

// function defendAction() {
// wasMouseDefending = true;
// attackAction();
// }

// function healAction() {
//   wasMouseHealing = true;
//   mouseDamage = 0;
//   mouseHealth.value += Math.ceil(Math.random() * 30);
//   catAttack();
//   showCombatLog();
//   wasMouseHealing = false;
// }

// function updateCatHealth() {
//   catHealth.textContent = catHealth.value;
// }

// function updateMouseHealth() {
//   mouseHealth.textContent = mouseHealth.value;
// }

// function displayWinner() {
//   heroes.classList.add("invisible");
//   if (catHealth.value <= 0) {
//     winnerHamster.classList.add("visible");
//     catHealth.textContent = "0";
//   } else if (mouseHealth.value <= 0) {
//     winnerCat.classList.add("visible");
//     mouseHealth.textContent = "0";
//   }
// }

// function catAttack() {
//   catDamage = Math.ceil(Math.random() * 21);
//   mouseHealth.value -= catDamage;
//   if(mouseHealth.value > 0) {
//     updateMouseHealth();
//   } else {
//     displayWinner();
//   }
//   return catDamage;
// }

// function showCombatLog() {
//   combatLog.id = "visible";
  
//   const round = document.createElement("p");
//   const mouseAction = document.createElement("p");
//   const catAction = document.createElement("p");
  
//   ++combatNumber;
//   round.textContent = "Round " + combatNumber;
//   round.style.fontWeight = "600";

//   combatLog.append(round, mouseAction, catAction);

// if(wasMouseDefending) {
//   mouseAction.textContent = `Mouse takes no damage.`;
// } else if(wasMouseHealing) {
//   mouseAction.textContent = `Mouse healed.`;
// } else {
//   if (mouseDamage === 0) {
//     mouseAction.textContent = `Mouse attacks and deals 0 damage. Cat has defended succesfully.`
//   } else if (mouseDamage > 0){
//     mouseAction.textContent = `Mouse attacks and deals: ${mouseDamage} damage.`
//   }
// }

// if (catDamage === 0) {
//   catAction.textContent = `Cat attacks and deals 0 damage. Mouse has defended succesfully.`
// } else {
//   catAction.textContent = `Cat attacks and deals: ${catDamage} damage.`
// }

//   combatLog.append(round, mouseAction, catAction);
// }