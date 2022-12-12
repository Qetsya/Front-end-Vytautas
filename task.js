// TASK 3
const firstNumberInput = document.querySelector("#first-number");
const secondeNumberInput = document.querySelector("#second-number");
const multiplyButton = document.querySelector("#multiply-btn");
const divideButton = document.querySelector("#divide-btn");
const resultElement = document.querySelector("#result");


multiplyButton.addEventListener("click", function () {
    const firstValue = getElementValue(firstNumberInput);
    const secondValue = getElementValue(secondeNumberInput);
    const result = multiply(firstValue, secondValue);
    resultElement.innerText = result;
});


divideButton.addEventListener("click", function () {
    const firstValue = getElementValue(firstNumberInput);
    const secondValue = getElementValue(secondeNumberInput);
    const result = divide(firstValue, secondValue);
    resultElement.innerText = firstValue / secondValue;
});

function getElementValue(element) {
    const elementValue = Number(element.value);
    return elementValue;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}