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

// функциЯ deletDo в которой мы отправляем данные на удаление
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
//----------END Удаление-------------
  


export {allTask}