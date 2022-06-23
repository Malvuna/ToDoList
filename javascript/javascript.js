// переменная card
let card = document.querySelector("#card");

// //-------БЛОК 1 -------------------

//переменная newDo
let newDo = document.querySelector("#newDo");

// поле ввода
let inputDo = document.createElement("input");
inputDo.className = "input"
inputDo.type = "input";
inputDo.name = "inputName";
inputDo.placeholder = "Сделать удаление завершенных и всех"

// кнопка добавить
let buttonDo = document.createElement('button');
buttonDo.type = "button";
buttonDo.textContent = "Добавить";
buttonDo.className = "buttonOne"

//сборка новой задачи
newDo.append(inputDo);
newDo.append(buttonDo);

//-------БЛОК 1 КОНЕЦ---------



//-------БЛОК 2 - id="list"
let list = document.querySelector("#list");

// оболочка для одного дела
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

// div чекбокса
let checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.name = "test";
check.append(checkbox);

//div текст задачи
let input = document.createElement("label");
input.type = "label";
input.name = "test";
text.append(input);

//крестик удаление задачи
let deleteElem = document.createElement("p");
deleteElem.innerHTML = "X";
close.append(deleteElem);

//-------БЛОК 2 КОНЕЦ --------




{/* <input class="input" type="text" id="idinput" name="inputName" placeholder="Сделать удаление завершенных и всех"> <br>
          <button class="buttonOne">Добавить</button> */}


