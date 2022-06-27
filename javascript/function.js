

// функция выводит все задачи user131
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
  
  


export {allTask}