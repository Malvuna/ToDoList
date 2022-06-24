//функция выводит все задачи user131
fetch('http://24api.ru/rest-todo/items-by-id?id=131')
.then(res => res.json())
.then(data => {
  console.log(data)
  /// DRaw
  // [
  //     {}, 
  // ]
})

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

// div чекбокса
let checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.name = "test";
check.append(checkbox);

//div текст задачи
let textDo = document.createElement("label");
textDo.type = "label";
textDo.name = "test";
textDo.textContent = " ";
text.append(textDo);

//крестик удаление задачи
let deleteElem = document.createElement("p");
deleteElem.innerHTML = "X";
close.append(deleteElem);
//-------создание элемента --------



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

// когда изменяем инпут запускаем функиию
inputDo.addEventListener("change", inputText);

// в переменно то что вводим в поиск
let valueInput = inputDo.value;

function inputText() {
  // функция выводит в дело то что ввели
  valueInput = inputDo.value;
  textDo.textContent = inputDo.value;
}

// после нажатия кнопки добавить
// отправляем данные с тем что ввели
// и возвращаем обратно
buttonDo.addEventListener("click", createTask);

async function createTask() {
  await fetch(
    "http://24api.ru/rest-todo",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: valueInput,
        isDone: 0,
        user_id: 131,
      }),
    },
  ).then((data) =>data.json())
  .then((data) =>{
    console.log(data)
    // отрисовать 
//     {
//         id: 742
// isDone: 0
// name: "fwefwefwef"
// user_id: 131
//     }
  });

}
