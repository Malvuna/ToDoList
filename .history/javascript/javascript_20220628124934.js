import { allTask } from "./function.js";
import { deletDo } from "./function.js";
import { createTask } from "./function.js";

// вызываем функцию отрисовки всех элементов
allTask(newElement);

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

//-------создание списка --------
let list = document.querySelector("#list");

//-------Карточка----------
function newElement(id, isDone, name) {
  // оболочка для записи
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
  //-------END Карточка----------

  // div чекбокса
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "checkbox";
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
  //-------  END создание элемента --------

  //когда нажимаем кнопку Добавить запускаем функиию.
  buttonDo.addEventListener("click", () => {
    createTask();
  });

  //----------Удаление-------------

  // наводим на крестик запускаем  функцию deletDo в которую передаем параметр deleteElem.dataset.id
  deleteElem.addEventListener("click", () => {
    deletDo(deleteElem.dataset.id);
  });

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

  //--- Удаление всех---------------

  // наводим на кнопку УДАЛИТЬ все запускаем функиию на получение всех задач
  buttonDeletAll.addEventListener("click", getAllTask);

  //переменая с массивом id
  let mapArr;

  //функция  получения всех задач
  async function getAllTask() {
    const allTask = await fetch(
      "http://24api.ru/rest-todo/items-by-id?id=131",
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      },
    );
    const data = await allTask.json();
    console.log(data);

    // перебираем массив и получаем обратно массив с id
    mapArr = data.map((elem) => {
      return elem.id;
    });
    console.log(mapArr);
    deletALL();
  }

  // функция на удаление данных в body массив данных с id которые нужно удалить
  async function deletALL() {
    await fetch("http://24api.ru/rest-todo/delete-items/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        items: mapArr,
      }),
    });
    list.innerHTML = " ";
    allTask(newElement);
  }

  //---END  Удаление всех задач

  // // ------- chek задачи
  // ставим чек бокс и он меняет текст на зачеркнутый
  checkbox.addEventListener("click", () => {
    strikeText(textDo);
  });
}
function strikeText(textDo) {
  textDo.classList.add("textThrough");
}
