//темная и светлая тема на сайте

const themeDark = document.querySelector(".theme-dark");
const themeLight = document.querySelector(".theme-light");

themeDark.addEventListener("click", () => {
  document.body.classList.add("dark");
  localStorage.setItem("theme", "dark");
});

themeLight.addEventListener("click", () => {
  document.body.classList.remove("dark");
  localStorage.setItem("theme", "light");
});

//загрузка темы при запуске страницы
window.addEventListener("load", () => {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.classList.add("dark");
  }
  if (theme === "light") {
    document.body.classList.remove("dark");
  }
})

window.addEventListener("load", () => {
  loadData();
})

//кнопки

const Input = document.querySelector(".main__input");

const btnAdd = document.querySelector(".main__add");

const btnRemoveONE = document.querySelector(".main__removeOne");

const btnRemoveALL = document.querySelector(".main__removeAll");

const list = document.querySelector(".main__list");

const wrapper = document.querySelector(".main__wrapper");

btnAdd.addEventListener("click", () => {
  if (Input.value !== "") {
    const li = document.createElement("li");
    li.textContent = Input.value;
    list.appendChild(li);
    Input.value = "";
    updateTaskCount();
    saveData();
  } else {
    alert("Введите задачу");
  }
  for (let i = 0; i < list.children.length; i++) {
    list.children[i].classList.add("li__style");
  }
});

//сохранение

function saveData() {
  localStorage.setItem("data", list.innerHTML);
  localStorage.setItem("taskCount", list.childElementCount);
}

function loadData() {
  list.innerHTML = localStorage.getItem("data") || "";
  numberTasks.textContent = localStorage.getItem("taskCount") || 0;
}

//удаление

btnRemoveONE.addEventListener("click", () => {
  if (list.children.length > 0) {
    list.removeChild(list.lastElementChild);
    updateTaskCount();
    }
  saveData();
});

btnRemoveALL.addEventListener("click", () => {
  list.innerHTML = "";
  updateTaskCount();
  saveData();
});

//счетчик

const numberTasks = document.querySelector(".header__span");

numberTasks.addEventListener("click", () => {
  numberTasks.textContent = list.childElementCount;
  saveData();
});

btnAdd.addEventListener("click", () => {
  count = 0;
  for (let i = 0; i < list.childElementCount; i++) {
    count++;
  }
  numberTasks.textContent = count;
  saveData();
});

btnRemoveONE.addEventListener("click", () => {
  count = 0;
  for (let i = 0; i < list.childElementCount; i++) {
    count++;
  }
  saveData();
  numberTasks.textContent = count;
});

btnRemoveALL.addEventListener("click", () => {
  count = 0;
  for (let i = 0; i < list.childElementCount; i++) {
    count++;
  }
  numberTasks.textContent = count;
  saveData();
});

//удаление через лист

wrapper.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("removeLi");
  }
  saveData();
});




// Удаление всех задач
btnRemoveALL.addEventListener("click", () => {
  list.innerHTML = "";
  updateTaskCount(); // Обновляем счетчик задач
  saveData(); // Сохраняем данные
});

// Удаление задачи через клик на элемент списка
wrapper.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("removeLi");
    saveData(); // Сохраняем данные
  }
});


// Обновление счетчика задач
function updateTaskCount() {
  const count = list.childElementCount;
  numberTasks.textContent = count;
}
