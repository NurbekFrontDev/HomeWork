// 1. Назначь для кнопки обработчик события click, который будет изменять текст этой кнопки при нажатии;
const changeText = document.getElementById("changeText");
changeText.addEventListener("click", () => {
  changeText.textContent = "Text changed!";
});

// 2. Назначь для любого элемента обработчик события mouseover, который будет изменять размер элемента при наведении;
changeText.addEventListener("mouseover", () => {
  changeText.style.width = "200px";
  changeText.style.height = "100px";
});
changeText.addEventListener('mouseout', () => {
  changeText.style.width = '';
  changeText.style.height = '';
});

// 3. Назначь для инпута обработчик события keyup, который будет выводить отпущенную клавишу в консоль;
const input = document.getElementById("input");
input.addEventListener("keyup", (event) => {
  console.log(event.key);
});

// 4. Создай форму и добавь обработчик события submit, который будет показывать сообщение об успешной отправке;
const form = document.getElementById("form");
form.addEventListener("submit", () => {
  alert("Сообщение успешно отправлено!");
});

// 5. Пусть на странице есть кнопка с надписью 'Изменить тему', которая позволяет переключать тему страницы. Например, по умолчанию тема светлая: задний фон - белый, текст - черный. Нажимаем на кнопку -> тема меняется на темную: цвет фона - черный, текст - белый. Еще раз нажимаем на кнопку -> тема снова светлая и т. д.
const changeTheme = document.getElementById("changeTheme");
changeTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});
