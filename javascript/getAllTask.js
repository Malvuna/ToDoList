//функция для получение масиива с id / false - id всех элементов что есть / true - все Чеканутуе элементы
function getAllTask(select = false) {
    let taskAll = document.querySelectorAll(".element");
    const result = [];
    if (select == false) {
      taskAll.forEach((node) => {
        result.push(node.childNodes[2].childNodes[0].dataset.id);
      });
    } else {
      taskAll.forEach((node) => {
        // console.log(node.childNodes[0].childNodes[0].checked);
        if (node.childNodes[0].childNodes[0].checked == true) {
          result.push(node.childNodes[2].childNodes[0].dataset.id);
        }
      });
    }
    // console.log(result);
    return result;
  }


  export {getAllTask}