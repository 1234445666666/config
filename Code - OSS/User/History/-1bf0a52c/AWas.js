//создание do to list
const toDo = document.querySelector(".to__do");
const toDoList = document.querySelector("#to__do__list");
const toDoInput = document.querySelector("#to__do");
const addToDo = document.querySelector("#add__to__do");
const removeAll = document.querySelector("#remove__all__to__do");

addToDo.addEventListener("click", () => {
  if (toDoInput.value.trim !== "") {
    createTodoItem(toDoInput.value.trim());
    toDoInput.value = "";
  } else {
    alert("Введите задачу");
  }
});

//функция создания задач,выполнение и удаление
// createTodoItem =(text) => {
//   const todoItem = document.createElement("li");
//   todoItem.className = "to__do__list__item";

//   const iconDone = document.createElement("span");
//   iconDone.className = "icon icon__done";

//   const taskText = document.createElement("span");
//   taskText.textContent = text;

//   const iconDelete = document.createElement("span");
//   iconDelete.className = "icon icon__delete";

//   todoItem.append(iconDone, taskText, iconDelete);
//   toDoList.append(todoItem);

//   iconDone.addEventListener("click", () => {
//     todoItem.classList.toggle("complete");
//   });

//   iconDelete.addEventListener("click", () => {
//     toDoList.removeChild(todoItem);
//     counterTODO.textContent = toDoList.childElementCount;
//   });
// }

createTOdoItem = (text) => {
  const todoItem = document.createElement("li");
  todoItem.insertAdjacentHTML('beforebegin' , <li class = "to__do__list__item"></li>);

  const taskTEXT = document.createElement("p");
  taskTEXT.insertAdjacentHTML('afterbegin' , <p></p>);
  taskTEXT.textContent = text;

  const iconDone = document.createElement("span");
  iconDone.insertAdjacentHTML('afterbegin' , <span class = "icon icon__done"></span>);

  const iconDelete = document.createElement("span");
  iconDelete.insertAdjacentHTML('afterbegin' , <span class = "icon icon__delete"></span>);

  todoItem.append(iconDone, taskTEXT, iconDelete);
  toDoList.append(todoItem);



 
  counterTODO.textContent = toDoList.childElementCount;

  todoItem.addEventListener("click", () => {
    todoItem.classList.toggle("complete");
  });

  todoItem.addEventListener("click", () => {
    toDoList.removeChild(todoItem);
    counterTODO.textContent = toDoList.childElementCount;
  });
};

removeAll.addEventListener("click", () => {
  toDoList.innerHTML = "";
});

//счетчик задач
const counterTODO = document.querySelector("#counter");

addToDo.addEventListener("click", () => {
  counterTODO.textContent = toDoList.childElementCount;
});

removeAll.addEventListener("click", () => {
  counterTODO.textContent = toDoList.childElementCount;
});

//возвращение назад
const btnBack3 = document.querySelector("#btnBack3");

btnBack3.addEventListener("click", () => {
  document.querySelector(".registration").style.display = "none";
  document.querySelector(".password").style.display = "flex";
  document.querySelector(".users__base").style.display = "none";
  document.querySelector(".to__do").style.display = "none";
});
