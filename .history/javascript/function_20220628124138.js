// ---- функция выводит все задачи user131
function allTask(newElement) {
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
  // ----

//------Добавление новой задачи ----------
async function createTask() {
  

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

  allTask(newElement);
  list.innerHTML = " ";
}
//------END Добавление новой задачи ----------

// ---- Функция deletDo в которой мы отправляем данные на удаление
async function deletDo(id) {
  
  // в переменной id который удаляем
  let deletId = id;
  console.log(deletId);

  //отправляем данные на удаление
  await fetch(`http://24api.ru/rest-todo/${deletId}`, {
    method: "DELETE",
  });

  list.innerHTML = " ";
  allTask(newElement);
}
// ----


export {allTask}
export {deletDo}
export {createTask}