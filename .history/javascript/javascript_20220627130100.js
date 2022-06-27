// функция выводит все задачи user131
function allTask() {
fetch("http://24api.ru/rest-todo/items-by-id?id=131")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    // запуск функции для отрисовки всех задач
    for (let i in data) {
      newElement(data[i].id, data[i].isDone, data[i].name);
      console.log(data[i].id);
      console.log(data[i].name);
    }
  });
}

allTask();


// //-------БЛОК 1 -------------------

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

//-------БЛОК 1 КОНЕЦ---------

//-------создание элемента --------
function newElement(id, isDone, name) {
  //-------Карточка----------
  let list = document.querySelector("#list");

  // оболочка для запси
  let element = document.createElement("div");
  element.className = "element";

  //1 div в list
  let check = document.createElement("div");
  check.className = "check";

  //2 div в list
  let text = document.createElement("div");
  text.className = "text";

  //3 div в list
  let close = document.createElement("div");
  close.className = "close";

  //элемент в лист
  list.append(element);

  //сборка чеклиста в элемент
  element.append(check);
  element.append(text);
  element.append(close);
  //-------Карточка----------

  // div чекбокса
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "test";
  check.append(checkbox);
  isDone == 1 ? true : false;

  //div текст задачи
  let textDo = document.createElement("label");
  textDo.type = "label";
  textDo.name = "test";
  textDo.textContent = name;

  text.append(textDo);

  //крестик удаление задачи
  let deleteElem = document.createElement("p");
  deleteElem.innerHTML = "X";
  deleteElem.dataset.id = id;
  close.append(deleteElem);

  allTask();
}
  //-------создание элемента --------

  // наводим на крестик запускаем функиию.
  deleteElem.addEventListener("click", deletDo);

  async function deletDo() {
    // в переменной id который удаляем
    let deletId = deleteElem.dataset.id;
    console.log(deletId);

    //отправляем данные на удаление
    await fetch(`http://24api.ru/rest-todo/${deletId}`, {
      method: "DELETE",
    });
    
  }
  


// function deletDo(event) {
//   console.log(event.target);
// }

//-------БЛОК 3 -------------------

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

//-------БЛОК 3 КОНЕЦ---------

//когда нажимаем кнопку запускаем функиию.
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
}
