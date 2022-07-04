
// получаем даные из заполненой формы
function formEnterUser() {
  let form = document.forms.enterUser; // форма в том виде какая она в html
  let formData = new FormData(form); 
  EnterUser(formData)
 }

//отправляем данные  юзера
async function EnterUser(formData) {
  await fetch("http://24api.ru/rest-user/auth", {
    method: "POST",
    body: formData,
  })
    .then((data) => data.json()) // возвращенеие ответа от сервера
    .then((data) => {
      localStorage.setItem("id", data.id);
      console.log(data.id);
      console.log(data.username);
    });
}

export { formEnterUser };