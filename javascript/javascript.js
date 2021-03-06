import { allTask, draweAllTask } from "./functionGettAndDraw.js";
import { getAllTask } from "./getAllTask.js";
import { createTask } from "./createTask.js";
import { deletALL } from "./deleteTask.js";
import { newUser } from "./editNewUser.js";
import { formEnterUser } from "./enterUser.js";


//получаем задачи и отрисовываем через полученный массив
let tasks = allTask();
tasks.then((data) => {
  draweAllTask(data);
});

//-------БЛОК 1 ВВОД НОВОЙ ЗАДАЧИ -------------------

//переменная newDo
let newDo = document.querySelector("#newDo");

// поле ввода
export let inputDo = document.createElement("input");
inputDo.className = "input";
inputDo.type = "input";
inputDo.name = "inputName";
inputDo.onfocus = function () {
  this.value = "";
}; // функция очистки строки
inputDo.placeholder = "не откладывай на завтра...";

// кнопка добавить
let buttonDo = document.createElement("button");
buttonDo.type = "button";
buttonDo.textContent = "Добавить";
buttonDo.className = "buttonOne";

//когда нажимаем кнопку Добавить запускаем функиию.
buttonDo.addEventListener("click", createTask);

//сборка новой задачи
newDo.append(inputDo);
newDo.append(buttonDo);

//-------КОНЕЦ БЛОК 1---------

//-------БЛОК 2 СО СПИСКОМ ЗАДАЧ-------------------

//-------создаем весь блок --------
let list = document.querySelector("#list");

//-------КОНЕЦ БЛОК 2-------------------

//-------БЛОК 3 КНОПКИ УДАЛИТЬ ЗАВЕРШЕННЫЕ УДАЛИТЬ ВСЕ-------------------

//переменная delete
let deleteButtons = document.querySelector("#delete");

// кнопка удалить завершенные
let buttonDeletFin = document.createElement("button");
buttonDeletFin.type = "button";
buttonDeletFin.textContent = "Удалить завершенные";
buttonDeletFin.className = "buttonTwo";

// наводим на кнопку УДАЛИТЬ завершенные запускаем функиию
buttonDeletFin.addEventListener("click", () => {
  deletALL(getAllTask(true)); // вызывает getAllTask - она возвращает массив - запускает deletALL
});

//кнопка удалить все
let buttonDeletAll = document.createElement("button");
buttonDeletAll.type = "button";
buttonDeletAll.textContent = "Удалить все";
buttonDeletAll.className = "buttonThree";

// наводим на кнопку УДАЛИТЬ все запускаем функиию на получение всех задач
buttonDeletAll.addEventListener("click", () => {
  deletALL(getAllTask(false)); // вызывает getAllTask - она возвращает массив - запускает deletALL
});

//кнопки с удалением
deleteButtons.append(buttonDeletFin);
deleteButtons.append(buttonDeletAll);

//-------КОНЕЦ БЛОК 3---------

//----------------------------
//переменная для кнопки регистрации
let buttonReg = document.querySelector("#buttonRegistration");

// наводим на кнопку зарегистрироваться и все запускаем функиию
buttonReg.addEventListener("click", (event) => {
  event.preventDefault();
  newUser();
  div();
});

//переменная для кнопки Новый пользователь
let buttonNew = document.querySelector("#buttonNewUser");

//переменая для стартового окна
let startDiv = document.querySelector("#start");

//переменая для формы регистрации
let registrationDiv = document.querySelector("#registration");

//переменная для todo list
let cardDiv = document.querySelector("#card");

//переменная для wrap
let wrap = document.querySelector("#wrap");

// наводим на кнопку Новый пользователь
buttonNew.addEventListener("click", () => {
  registrationDiv.classList.toggle("displayNone");
  startDiv.classList.toggle("displayNone");
});

//функция смены окон на кнопку Регистрация
function div() {
  cardDiv.classList.toggle("displayNone");
  registrationDiv.classList.toggle("displayNone");
  wrap.classList.toggle("displayNone");
}

//переменная для кнопки выход
let buttonwrap = document.querySelector("#exit");

// наводим на кнопку выход, очищаем ID и переходим на index
buttonwrap.addEventListener("click", () => {
  window.location.href = "index.html";
  localStorage.clear();
});

//переменная для кнопки вход
export let buttonEnterUser = document.querySelector("#enter");

// наводим на кнопку вход и запускаем функцию проверки/отправки данных
buttonEnterUser.addEventListener("click", () => {
  formEnterUser(startDiv, cardDiv, wrap);
  // startDiv.classList.toggle("displayNone");
  // cardDiv.classList.toggle("displayNone");
  // wrap.classList.toggle("displayNone");
});

//----------- вставка имени в приветствие
export let hiName = document.createElement("p");
hiName.innerHTML = "Привет,   " + localStorage.getItem("name");
hello.append(hiName);
//-----------

//-----------

//-----------Функции проверки на пустую окна при авторизации
function chekFrame() {
  if (
    document.querySelector("input[name='username']").value === "" ||
    document.querySelector("input[name='password_hash']").value === ""
  ) {
    console.log(document.getElementById("nickname").value);
    console.dir(document.querySelector("#nickname"));

    return false;
  }
  return true;
}

export { chekFrame };
