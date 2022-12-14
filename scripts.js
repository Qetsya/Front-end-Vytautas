// TODO task
const inputEl = document.querySelector("#todo-input");
const btnEl = document.querySelector("#todo-btn");
const todoListEl = document.querySelector("#todo-list");

function removeTodo(elementToDelete) {
  todoListEl.removeChild(elementToDelete);
}

btnEl.addEventListener("click", function () {
  const inputText = inputEl.value;
  const todoEl = document.createElement("li");
  todoEl.textContent = inputText;
  inputEl.value = "";

  todoListEl.append(todoEl);

  todoEl.addEventListener("click", function () {
    removeTodo(todoEl);
  })
})


// function as VARIABLE. calling function in function
function myFunction() {
  console.log("myFunction");
}

const anotherFunction = myFunction;
anotherFunction();

const anonymousFunctionInVariable = function () {
  console.log("function");
}
anonymousFunctionInVariable();

function callOtherFunction(otherFunction) {
  return otherFunction;
}

const returnFunction = callOtherFunction(myFunction);
returnedFunction(); //????

