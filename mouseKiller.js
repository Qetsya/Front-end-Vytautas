const elements = {
  catHealthText: document.querySelector("#cat-health"),
  mouseHealthText: document.querySelector("#mouse-health"),

  attackBtn: document.querySelector("#attack-btn"),
  defendBtn: document.querySelector("#defend-btn"),
  healBtn: document.querySelector("#heal-btn"),

  heroes: document.querySelector(".heroes"),
  winnerCat: document.querySelector(".winner-cat"),
  winnerHamster: document.querySelector(".winner-hamster"),

  combatLogContainer: document.querySelector(".game-log"),

  combatLog: null,
};

const roundType = {
  attack: "attack",
  defend: "defend",
  heal: "heal",
};

const state = {
  round: 0,
  catHealth: 200,
  mouseHealth: 100,
  update() {
    elements.catHealthText.textContent = state.catHealth;
    elements.mouseHealthText.textContent = state.mouseHealth;
  },
  increaseRound() {
    state.round++;
  },
};

function generateRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function playerAttack() {
  const damage = generateRandomNumber(10);
  state.catHealth -= damage;
  state.update();
  return damage;
}

function playerHeal(max) {
  const healing = generateRandomNumber(30);
  const sum = state.mouseHealth + healing;
  if (sum > 100) {
    state.mouseHealth = 100;
  } else {
    state.mouseHealth = sum;
  }

  state.update();
  return healing;
}

function catAttack() {
  const damage = generateRandomNumber(20);
  state.mouseHealth -= damage;
  state.update();
  return damage;
}

function writeLogToHTML(roundLog) {
  if (!elements.combatLog) {
    setupCombatLog(); //pasirupina, kad if salyga nebesikartotu kita cikla
  }

  const liElement = document.createElement("li");
  const titleElement = document.createElement("span");
  const titleBoldElement = document.createElement("b");
  const playerInfoElement = document.createElement("span");
  const catInfoElement = document.createElement("span");

  titleElement.append(titleBoldElement);
  liElement.append(titleElement, playerInfoElement, catInfoElement);

  titleBoldElement.textContent = `Round ${state.round}`;
  playerInfoElement.textContent = roundLog.playerText;
  catInfoElement.textContent = roundLog.catText;

  elements.combatLog.append(liElement);
}

function setupCombatLog() {
  const heading = document.createElement("h3");
  heading.textContent = "Combat Log";
  elements.combatLogContainer.append(heading);

  const combatLog = document.createElement("ul");
  combatLog.id = "combat-log";
  elements.combatLogContainer.append(combatLog);
  elements.combatLog = combatLog;
}

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
