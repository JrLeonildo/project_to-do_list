const buttonAddTask = document.querySelector(".buttonAddTask");
const inputTask = document.querySelector("#inputTask");
const ulTask = document.querySelector(".ulTasks");
let taskArray = [];

function addTask(task) {
  const createLi = document.createElement("li");
  createLi.innerHTML = `
  <input type="checkbox" name="" id="checkboxInput" autofocus> 
  <p>${task}</p>`;
  const createButtonDelete = document.createElement("button");
  const createSpan = document.createElement("span");
  createSpan.classList.add("material-symbols-outlined");
  const specifyingIcon = document.createTextNode("delete");  
  createSpan.appendChild(specifyingIcon);
  createButtonDelete.appendChild(createSpan);
  createLi.appendChild(createButtonDelete);
  if(taskArray.length>=10) {
    alert("Limite de tarefas atingido");
  }else {
    ulTask.appendChild(createLi);
    taskArray.push(createLi);
    createButtonDelete.addEventListener("click", () => {
      deleteTask(ulTask, createLi);
    });
  }
}

function deleteTask(ul, li){
  ul.removeChild(li);
  taskArray.shift();
}

const start = () => {
  event.preventDefault();
  if(inputTask.value=="") {
    alert("Você não descreveu sua compra");
  }else{
    addTask(inputTask.value);
  }
}

buttonAddTask.addEventListener("click", start);