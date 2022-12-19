// Programa pradeda veikti paspaudus pliusiuką.
// - pasiimam tekstą iš inputo
// - tikrinam ar tekstas yra
//    - Jei nėra:
//      - atsiranda raudonas border ant inputo.
//      - return

//    - Jei yra:
//     - Sukuriam naują elementą su dviem mygtukais.
//     - Į elementą įdedam tekstą.
//     - Prie mygtukų prikabinam atskiras funkcijas. Jos aprašomos kitame flow.
//     - Įdėti elementą į DOM. (dokumento medį)

const inputEl = document.querySelector("#todo-input");
const todoButtonEl = document.querySelector("#todo-btn");
const todoListEl = document.querySelector("#todo-list");
const doneListEl = document.querySelector("#done-list");

todoButtonEl.addEventListener("click", addTodo);

function addTodo() {
  inputEl.style.border = "";
  const inputValue = inputEl.value;

  if (!inputValue) {
    inputEl.style.border = "1px solid red";
    return;
  }
  inputEl.value = "";//kaip pasiema inputValue, jei ji istrinam??
  todoListEl.append(createNewTodo(inputValue));
}

function createNewTodo(text) {
  const newTodo = document.createElement("li");

  const textNode = document.createTextNode(text);
  const doneButton = document.createElement("button");
  const closeButton = document.createElement("button");

  closeButton.textContent = "X";
  doneButton.textContent = "V";

  closeButton.id = "close-button";
  doneButton.id = "done-button";

  newTodo.append(textNode, doneButton, closeButton);

  function deleteTodo() {
    newTodo.remove();
  }
  closeButton.addEventListener("click", deleteTodo);

  doneButton.addEventListener("click", function () {
    deleteTodo();
    createNewDoneEl(text);
  });

  return newTodo;
}

function createNewDoneEl(textNode) {
    const newDoneEL = document.createElement("li");

    const closeButton = document.createElement("button");

    closeButton.textContent = "X";
    closeButton.id = "close-button";

    newDoneEL.append(textNode, closeButton);
    doneListEl.append(newDoneEL);// kodel virsuj apendino viska i viena ul, o cia atskirai li ir ul?

    function deleteDoneEl() {
        newDoneEL.remove();
      }
      closeButton.addEventListener("click", deleteDoneEl);
}



