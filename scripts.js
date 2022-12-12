// TASK 1
const selectElement = document.querySelector("#ice-cream");

function selectListener(event) {
  console.log("event", event);
  console.log("event.target", event.target);
  console.log("event.target.value", event.target.value);
  console.log("selectElement", selectElement);
}

selectElement.addEventListener("change", selectListener);



window.addEventListener("resize", function (evt) {
  console.log("resize");
})


// TASK 2
const genderSelectElement = document.querySelector("#gender");
const ageSelectElement = document.querySelector("#age");
const changeLogElement = document.querySelector("#chenge-log");

function changeListener(event) {
  const changeElement = event.target;
  console.log(changeElement);

  const selectName = event.target.name;
  const selectValue = event.target.value;

  const text = `User has changed ${selectName} select with a value ${selectValue}`;
  changeLogElement.innerText += "\n" + text;
}

ageSelectElement.addEventListener("change", changeListener);
genderSelectElement.addEventListener("change", changeListener);

// example
document.querySelector("#my-input").addEventListener("input", function (event) {
  console.log(event.target.value);
})