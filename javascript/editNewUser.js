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
  });
}

export { newUser };

