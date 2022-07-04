import {newElement} from "./newElement.js";

// функция получения всех задачи user
async function allTask() {
    return fetch("http://24api.ru/rest-todo/items-by-id?id=" + localStorage.getItem("id"))
    .then((res) =>
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

  export {allTask}
  export {draweAllTask}