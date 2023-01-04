import { elements, roundType, state } from "./constants.js";
import { playerAttack, playerHeal, catAttack } from "./buttonFunctions.js";
import { writeLogToHTML, setupCombatLog } from "./combatLog.js";



function checkIfEndOfGame() {
  if (state.mouseHealth <= 0) {
    elements.heroes.classList.add("invisible");
    elements.winnerCat.classList.add("visible");
    
  } else if (state.catHealth <= 0) {
    elements.heroes.classList.add("invisible");
    elements.winnerHamster.classList.add("visible");
  }
}

function playRound(type) {
  state.increaseRound();

  const log = {
    playerText: null,
    catText: null,
  };

  //padaryti ataka drakonui
  //suzinoti kiek jam liko gyvybiu
  switch (type) {
    case roundType.attack:
      playerAttack();
      const damage = playerAttack();
      log.playerText = `Mouse attacks and deals ${damage} to cat.`;
      break;

    case roundType.defend:
      log.playerText = `Mouse defends succesfully.`;
      break;

    case roundType.heal:
      const healing = playerHeal();
      log.playerText = `Mouse heals himself and receives ${healing} health.`;
      break;
  }

  catAttack();
  const damage = catAttack();
  log.catText = `Cat attacks and deals ${damage} to mouse.`;
  writeLogToHTML(log);

  checkIfEndOfGame();
}

elements.attackBtn.addEventListener("click", function () {
  playRound(roundType.attack);
});
elements.defendBtn.addEventListener("click", function () {
  playRound(roundType.defend);
});
elements.healBtn.addEventListener("click", function () {
  playRound(roundType.heal);
});
