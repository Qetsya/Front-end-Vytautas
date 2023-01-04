import { elements, roundType, state } from "./constants.js";

export function writeLogToHTML(roundLog) {
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
  
export function setupCombatLog() {
    const heading = document.createElement("h3");
    heading.textContent = "Combat Log";
    elements.combatLogContainer.append(heading);
  
    const combatLog = document.createElement("ul");
    combatLog.id = "combat-log";
    elements.combatLogContainer.append(combatLog);
    elements.combatLog = combatLog;
  }