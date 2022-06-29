import {checkTask} from "./editCheck.js";
import {deletDo} from "./deleteTask.js";

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
    deleteElem.addEventListener("click", () => deletDo(deletId));
    //---
  }

  export {newElement}