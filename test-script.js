// 1. Назначь для кнопки обработчик события click, который будет изменять текст этой кнопки при нажатии;
function getColor() {
  const colors = [
    "#49A16C",
    "#064236",
    "#ED6742",
    "#F498AD",
    "#1A5AD7",
    "#AFC9DA",
    "#FFD829",
    "#282A2E",
    "#5E6064",
    "#E6E6E6",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

const changeColor = document.getElementById("changeColor");
changeColor.addEventListener("click", () => {
    changeColor.style.backgroundColor = getColor();
});


// 2. Назначь для любого элемента обработчик события mouseover, который будет изменять размер элемента при наведении;
changeColor.addEventListener('mouseover', () => {
    changeColor.style.width = '200px';
    changeColor.style.height = '100px';
})


// 3. Назначь для инпута обработчик события keyup, который будет выводить отпущенную клавишу в консоль;
const input = document.getElementById('input');
input.addEventListener('keyup', (event) => {
    console.log(event.key);
});


// 4. Создай форму и добавь обработчик события submit, который будет показывать сообщение об успешной отправке;
const form = document.getElementById('form');
form.addEventListener('submit', () => {
    alert('Сообщение успешно отправлено!');
});


// 5. Пусть на странице есть кнопка с надписью 'Изменить тему', которая позволяет переключать тему страницы. Например, по умолчанию тема светлая: задний фон - белый, текст - черный. Нажимаем на кнопку -> тема меняется на темную: цвет фона - черный, текст - белый. Еще раз нажимаем на кнопку -> тема снова светлая и т. д.
const changeTheme = document.getElementById('changeTheme');
changeTheme.addEventListener('click', () => {
  document.body.classList.toggle('changeTheme');
});