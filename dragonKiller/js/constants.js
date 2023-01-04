export const elements = {
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
  
export  const roundType = {
    attack: "attack",
    defend: "defend",
    heal: "heal",
  };
  
export  const state = {
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