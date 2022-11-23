const cssSelector = "#some-element";
const element = document.querySelector(cssSelector);

element.className = "element-style";
element.className += " other-style"
console.log(element.className);

const heading = document.querySelector("#my-element h1");//heading objektas
const paragraph = document.querySelector("#my-element p");

console.log(heading, paragraph);

//heading.className stringas su klasem
//heading.innerText stringas su tekstu tarp elementu
heading.innerText = "Labas vakaras"; //innerText objekto kintamasis

console.log(heading.innerText);


if (true) {
    console.log("true");
}
//deklaracija
function myFunction() {
    console.log("labas");
}
console.log("1");
//panaudojimas
myFunction();

console.log("2");


//TASK button show clicks
const button = document.querySelector("#my-button");
let i = 0;

function myFunction() {
    i++;
    button.innerText = i;
}

// TASK DOPDOWN
const DROPDOWN_ACTIVE = "dropdown-menu active";
const DROPDOWN_HIDDEN = "dropdown-menu";

const dropdownElement = document.querySelector("#dropdown .dropdown-menu");

function toggle() {

    if (dropdownElement.className === DROPDOWN_ACTIVE) {
        dropdownElement.className = DROPDOWN_HIDDEN;
    } else {
        dropdownElement.className = DROPDOWN_ACTIVE;
    }
}


// TASK Question

const TEXT_ACTIVE = "accordeon-content"
const TEXT_HIDDEN = "accordeon-content hidden";

const accordeonContent = document.querySelector("#accordeon .accordeon-content");

function dropdownText() {
    const isAccordeonContentHidden = accordeonContent.className === TEXT_HIDDEN
    if (isAccordeonContentHidden) {
        accordeonContent.className = TEXT_ACTIVE;
    } else {
        accordeonContent.className = TEXT_HIDDEN;
    }
}