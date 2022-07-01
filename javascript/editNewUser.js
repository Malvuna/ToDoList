import { getAllTask } from "./getAllTask.js";

// получаем даные из заполненой формы
function newUser() {
  let form = document.forms.formNewUser; // форма в том виде какая она в html
  let formData = new FormData(form); //

  sendNewUser(formData)
}

//отправляем нового юзера
async function sendNewUser (formData) {
  await fetch("http://24api.ru/rest-user", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(
      formData
    ),
  })
  .then((data) => data.json()) // возвращенеие ответа от сервера
  .then((data) => {
    // console.log(data.id);
    localStorage.setItem("id", data.id)
  });
  
}

export { newUser };

