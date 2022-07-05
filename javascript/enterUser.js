import { buttonEnterUser } from "./javascript.js";
import { chekFrame } from "./javascript.js";

// получаем даные из заполненой формы
function formEnterUser() {
  let form = document.forms.enterUser; // форма в том виде какая она в html
  let formData = new FormData(form);
  EnterUser(formData);
}


//отправляем данные  юзера
async function EnterUser(formData) {
  
  let flag = true
  for(let val of formData.values()) {
    if (val === "" ){
      flag = false
    }
 }
  if (!flag){                  // проверяем не пустые ли окна
    alert("что-то пошло не так")
  }
  else {
  await fetch("http://24api.ru/rest-user/auth", {
    method: "POST",
    body: formData,
  })
    .then((data) => data.json()) // возвращенеие ответа от сервера
    .then((data) => {
      if (data === null) {
        alert("NO");
      } else {
        localStorage.setItem("id", data.id);
        localStorage.setItem("name", data.name);


        buttonEnterUser.addEventListener("click", () => {
          formEnterUser();
          startDiv.classList.toggle("displayNone");
          cardDiv.classList.toggle("displayNone");
          wrap.classList.toggle("displayNone");
        });
      }
    });
  }
}

export { formEnterUser };
