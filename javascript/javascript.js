// функция получения всех задачи user131
async function allTask() {
  return fetch("http://24api.ru/rest-todo/items-by-id?id=131").then((res) =>
    res.json(),
  );
}

// Функции для отрисовки всех задач - принимает массив обьектов
function draweAllTask(data) {
  for (let i in data) {
    newElement(data[i].id, data[i].isDone, data[i].name);
    console.log(data[i].id);
    console.log(data[i].name);
  }
}

//получаем задачи и отрисовываем через полученный массив
let tasks = allTask();
tasks.then((data) => {
  draweAllTask(data);
});

//-------БЛОК 1 ВВОД НОВОЙ ЗАДАЧИ -------------------

//переменная newDo
let newDo = document.querySelector("#newDo");

// поле ввода
let inputDo = document.createElement("input");
inputDo.className = "input";
inputDo.type = "input";
inputDo.name = "inputName";
inputDo.placeholder = "Сделать удаление завершенных и всех";

// кнопка добавить
let buttonDo = document.createElement("button");
buttonDo.type = "button";
buttonDo.textContent = "Добавить";
buttonDo.className = "buttonOne";

//сборка новой задачи
newDo.append(inputDo);
newDo.append(buttonDo);

//-------КОНЕЦ БЛОК 1 ВВОД НОВОЙ ЗАДАЧИ---------

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

//-------КОНЕЦ БЛОК 3 КНОПКИ УДАЛИТЬ ЗАВЕРШЕННЫЕ УДАЛИТЬ ВСЕ---------

//-------БЛОК 2 СО СПИСКОМ ЗАДАЧ-------------------

//-------создаем весь блок --------
let list = document.querySelector("#list");

// Функция для создания 1 элемента
function newElement(id, isDone, name) {
  // оболочка для создания одной задачи
  let element = document.createElement("div");
  element.className = "element";

  //элемент кладем в блок
  list.append(element);

  //---
  //div для чекбокса
  let check = document.createElement("div");
  check.className = "check";
  //div для чекбокса кладем в элемент
  element.append(check);

  // Содержание Чекбокс
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "test";
  check.append(checkbox);
  isDone == 1 ? true : false;

  // Меняем в чекбоксе текст на зачеркнутый при чеке
  checkbox.addEventListener("click", () => {
    strikeText(textDo);
  });

  function strikeText(textDo) {
    textDo.classList.toggle("textThrough");
    checkTask(deleteElem.dataset.id);
  }
  //---

  //---
  //div для текста задачи
  let text = document.createElement("div");
  text.className = "text";
  //div для текста кладем в элемент
  element.append(text);

  //Содержание Текст задачи
  let textDo = document.createElement("label");
  textDo.type = "label";
  textDo.name = "test";
  textDo.textContent = name;

  //текст кладем в div с текстом
  text.append(textDo);
  ///---

  //---
  //div для крестика
  let close = document.createElement("div");
  close.className = "close";
  //div для крестика кладем в элемент
  element.append(close);

  //Содержание Крестик
  let deleteElem = document.createElement("p");
  deleteElem.innerHTML = "X";
  deleteElem.dataset.id = id;

  //Крестик  кладем в div для крестика
  close.append(deleteElem);

  //---для удаления одной задачи-----
  // в переменной id который удаляем
  let deletId = deleteElem.dataset.id;
  // наводим на крестик запускаем функиию.
  deleteElem.addEventListener("click", () => deletDo());
  //---
}

//------Добавление новой задачи ----------

//когда нажимаем кнопку Добавить запускаем функиию.
buttonDo.addEventListener("click", createTask);

async function createTask() {
  // в переменно то что вводим в поиск
  let valueInput = inputDo.value;

  //отправляем данные с задачей
  await fetch("http://24api.ru/rest-todo", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      name: valueInput,
      isDone: 0,
      user_id: 131,
    }),
  })
    .then((data) => data.json())
    .then((data) => {
      draweAllTask([data]);
    });
}
//------END Добавление новой задачи ----------

//----------Удаление одной задачи-------------
async function deletDo(deletId) {
  //отправляем данные на удаление
  await fetch("http://24api.ru/rest-todo/" + deletId, {
    method: "DELETE",
  });

  list.innerHTML = " ";
  let tasks = allTask();
  tasks.then((data) => {
    draweAllTask(data);
  });
}
//---------END Удаление одной задачи-------------

//функция для получение масиива с id / false - id всех элементов что есть / true - все Чеканутуе элементы
function getAllTask(select=false) { 
  
  let taskAll = document.querySelectorAll(".element");
  const result = [];
  if (select == false){
  taskAll.forEach((node) => {
    result.push(node.childNodes[2].childNodes[0].dataset.id);
  });
} else {
  taskAll.forEach((node) => {
    console.log(node.childNodes[0].childNodes[0].checked);
    if(node.childNodes[0].childNodes[0].checked == true){
      result.push(node.childNodes[2].childNodes[0].dataset.id);
    }
  });
}
  console.log(result);
  return result;
}

// функция на удаление данных / в body массив данных с id которые нужно удалить/ в deletALL
// передаем результат функции getAllTask
async function deletALL(idArr) {
  await fetch("http://24api.ru/rest-todo/delete-items/", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      items: idArr,
    }),
  });

  list.innerHTML = " ";
  let tasks = allTask();
  tasks.then((data) => {
  draweAllTask(data);
  });
}

//отправляем изменений чекбокса
async function checkTask(id) {
  await fetch("http://24api.ru/rest-todo/" + id, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      isDone: 1,
    }),
  });
}
