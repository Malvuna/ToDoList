import { inputDo } from "./javascript.js";
import { draweAllTask } from "./functionGettAndDraw.js";

//------Добавление новой задачи ----------
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
      user_id: localStorage.getItem("id"),
    }),
  })
    .then((data) => data.json()) // возвращенеие ответа от сервера
    .then((data) => {
      draweAllTask([data]);
    });
}
//------END Добавление новой задачи ----------

export { createTask };
