//отправляем изменений чекбокса
async function checkTask(id) {
  await fetch("http://24api.ru/rest-todo/" + id, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      isDone: 1,
    }),
  });
}

export { checkTask };
