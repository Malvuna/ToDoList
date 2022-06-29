import { allTask, draweAllTask } from "./functionGettAndDraw.js";

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

export { deletDo };
export { deletALL };
