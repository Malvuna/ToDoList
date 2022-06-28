// функция получения всех задачи user131 
async function allTask() {
  return fetch("http://24api.ru/rest-todo/items-by-id?id=131")
    .then((res) => res.json())
    .then((data) => {
      return data;
});
}

// Функции для отрисовки всех задач
function draw
for (let i in data) {
newElement(data[i].id, data[i].isDone, data[i].name);
console.log(data[i].id);
console.log(data[i].name);
}


await allTask();




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

// кнопка удалить
let buttonDeletFin = document.createElement("button");
buttonDeletFin.type = "button";
buttonDeletFin.textContent = "Удалить завершенные";
buttonDeletFin.className = "buttonTwo";

//кнопка удалить все
let buttonDeletAll = document.createElement("button");
buttonDeletAll.type = "button";
buttonDeletAll.textContent = "Удалить все";
buttonDeletAll.className = "buttonThree";

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
      console.log(data);
    });

  allTask();
  list.innerHTML = " ";
}
//------END Добавление новой задачи ----------










//-------XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// // функция выводит все задачи user131
// function allTask() {
//   fetch("http://24api.ru/rest-todo/items-by-id?id=131")
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);

//       // запуск функции для отрисовки всех задач
//       for (let i in data) {
//         newElement(data[i].id, data[i].isDone, data[i].name);
//         console.log(data[i].id);
//         console.log(data[i].name);
//       }
//     });
// }

// allTask();

// // //-------БЛОК 1 -------------------

// //переменная newDo
// let newDo = document.querySelector("#newDo");

// // поле ввода
// let inputDo = document.createElement("input");
// inputDo.className = "input";
// inputDo.type = "input";
// inputDo.name = "inputName";
// inputDo.placeholder = "Сделать удаление завершенных и всех";

// // кнопка добавить
// let buttonDo = document.createElement("button");
// buttonDo.type = "button";
// buttonDo.textContent = "Добавить";
// buttonDo.className = "buttonOne";

// //сборка новой задачи
// newDo.append(inputDo);
// newDo.append(buttonDo);

// //-------БЛОК 1 КОНЕЦ---------

// //-------создание элемента --------
// let list = document.querySelector("#list");

// function newElement(id, isDone, name) {
//   //-------Карточка----------

//   // оболочка для запси
//   let element = document.createElement("div");
//   element.className = "element";

//   //div для чекбокса
//   let check = document.createElement("div");
//   check.className = "check";

//   //div для текста задачи
//   let text = document.createElement("div");
//   text.className = "text";

//   //div для крестика
//   let close = document.createElement("div");
//   close.className = "close";

//   //элемент в лист
//   list.append(element);

//   //сборка чеклиста в элемент
//   element.append(check);
//   element.append(text);
//   element.append(close);
//   //-------Карточка----------

//   // Чекбокс
//   let checkbox = document.createElement("input");
//   checkbox.type = "checkbox";
//   checkbox.name = "test";
//   check.append(checkbox);
//   isDone == 1 ? true : false;

//   // Меняем в чекбоксе текст на зачеркнутый
//   checkbox.addEventListener("click", () => {
//     strikeText(textDo);
//   });

//   function strikeText(textDo) {
//     textDo.classList.toggle("textThrough");
//     checkTask(deleteElem.dataset.id);
//   }

//   //Текст задачи
//   let textDo = document.createElement("label");
//   textDo.type = "label";
//   textDo.name = "test";
//   textDo.textContent = name;

//   text.append(textDo);

//   //Крестик удаление задачи
//   let deleteElem = document.createElement("p");
//   deleteElem.innerHTML = "X";
//   deleteElem.dataset.id = id;
//   close.append(deleteElem);

//   //-------  END создание элемента --------

//   //----------Удаление-------------

//   // наводим на крестик запускаем функиию.
//   deleteElem.addEventListener("click", deletDo);

//   async function deletDo() {
//     // в переменной id который удаляем
//     let deletId = deleteElem.dataset.id;
//     console.log(deletId);

//     //отправляем данные на удаление
//     await fetch(`http://24api.ru/rest-todo/${deletId}`, {
//       method: "DELETE",
//     });

//     list.innerHTML = " ";
//     allTask();
//   }
// }

// //----------END Удаление-------------

// //-------БЛОК 3 -------------------

// //переменная delete
// let deleteButtons = document.querySelector("#delete");

// // кнопка удалить
// let buttonDeletFin = document.createElement("button");
// buttonDeletFin.type = "button";
// buttonDeletFin.textContent = "Удалить завершенные";
// buttonDeletFin.className = "buttonTwo";

// //кнопка удалить все
// let buttonDeletAll = document.createElement("button");
// buttonDeletAll.type = "button";
// buttonDeletAll.textContent = "Удалить все";
// buttonDeletAll.className = "buttonThree";

// //кнопки с удалением
// deleteButtons.append(buttonDeletFin);
// deleteButtons.append(buttonDeletAll);

// //-------БЛОК 3 КОНЕЦ---------

// //------Добавление новой задачи ----------

// //когда нажимаем кнопку Добавить запускаем функиию.
// buttonDo.addEventListener("click", createTask);

// async function createTask() {
//   // в переменно то что вводим в поиск
//   let valueInput = inputDo.value;

//   //отправляем данные с задачей
//   await fetch("http://24api.ru/rest-todo", {
//     method: "POST",
//     headers: {
//       "content-type": "application/json",
//     },
//     body: JSON.stringify({
//       name: valueInput,
//       isDone: 0,
//       user_id: 131,
//     }),
//   })
//     .then((data) => data.json())
//     .then((data) => {
//       console.log(data);
//     });

//   allTask();
//   list.innerHTML = " ";
// }
// //------END Добавление новой задачи ----------

// //--- Удаление всех---------------

// // наводим на кнопку УДАЛИТЬ все запускаем функиию на получение всех задач
// buttonDeletAll.addEventListener("click", getAllTask);

// //переменая с массивом id
// let mapArr;

// //функция  получения всех задач
// async function getAllTask() {
//   const allTask = await fetch("http://24api.ru/rest-todo/items-by-id?id=131", {
//     method: "GET",
//     headers: {
//       "content-type": "application/json",
//     },
//   });
//   const data = await allTask.json();
//   console.log(data);

//   // перебираем массив и получаем обратно массив с id
//   mapArr = data.map((elem) => {
//     return elem.id;
//   });
//   console.log(mapArr);
//   deletALL(mapArr);
// }

// // функция на удаление данных в body массив данных с id которые нужно удалить
// async function deletALL(idArr) {
//   await fetch("http://24api.ru/rest-todo/delete-items/", {
//     method: "POST",
//     headers: {
//       "content-type": "application/json",
//     },
//     body: JSON.stringify({
//       items: idArr,
//     }),
//   });
//   list.innerHTML = " ";
//   allTask();
// }

// //---END  Удаление всех задач

// async function checkTask(id) {
//   //отправляем изменений чекбокса
//   await fetch("http://24api.ru/rest-todo/" + id, {
//     method: "PUT",
//     headers: {
//       "content-type": "application/json",
//     },
//     body: JSON.stringify({
//       isDone: 1,
//     }),
//   });
//   list.innerHTML = " ";
//   allTask();
// }

// // УДАЛИТЬ ЧЕКНУТЫЕ

// buttonDeletFin.addEventListener("click", getFinTask);

// //переменая с массивом id
// let getFin;
// let getFinMap;

// //функция  получения всех задач
// async function getFinTask() {
//   const allTask = await fetch("http://24api.ru/rest-todo/items-by-id?id=131", {
//     method: "GET",
//     headers: {
//       "content-type": "application/json",
//     },
//   });
//   const data = await allTask.json();
//   console.log(data);

//   // перебираем массив и получаем обратно массив с id у которых isDone 1
//   getFin = data.filter((elem) => {
//     if (elem.isDone === 1) {
//       return true;
//     }
//   });

//   getFinMap = getFin.map((elem) => {
//     return elem.id;
//   });

//   console.log(getFinMap);

//   deletALL(getFinMap);
// }
