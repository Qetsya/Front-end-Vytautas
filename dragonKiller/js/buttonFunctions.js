import { elements, roundType, state } from "./constants.js";

function generateRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }

export function playerAttack() {
  const damage = generateRandomNumber(10);
  state.catHealth -= damage;
  state.update();
  return damage;
}

export function playerHeal(max) {
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

export function catAttack() {
  const damage = generateRandomNumber(20);
  state.mouseHealth -= damage;
  state.update();
  return damage;
}
