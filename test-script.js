// 1. Найди элемент на странице по его ID и измени его текстовое содержимое на что-то новое;
const changeText = document.getElementById('header');
changeText.textContent = 'Новый текст!';

// 2. Используй JavaScript, чтобы изменить фон и цвет текста элемента с определенным классом;
const blueColorOfText = document.querySelector('.blue');
const redColorOfText = document.querySelector('.red');
const yellowColorOfText = document.querySelector('.yellow');
blueColorOfText.style.color = 'blue';
redColorOfText.style.color = 'red';
yellowColorOfText.style.color = 'yellow';

// 3. Напиши код, который создает новый параграф с текстом и добавляет его в конец документа;
const newParagraph = document.createElement('p');
newParagraph.textContent = 'Это новый параграф!';
document.body.appendChild(newParagraph);

// 4. Напиши функцию, которая удаляет элемент с указанным ID из документа;
function removeElement(element) {
	element.parentNode.removeChild(element);
}

removeElement(removeMe);

// 5. Измени атрибут ссылки на новый URL и выведи его значение в консоль;
const changeAttribute = document.getElementById('changeURL');
changeAttribute.setAttribute('href', 'https://yandex.ru')
console.log(changeAttribute.getAttribute('href'));

// 6. Создай новый элемент, добавь к нему класс и добавь его в DOM;
const newElement = document.createElement('h4');
newElement.textContent= 'Это новый элемент, с новым классом!';
newElement.classList.add('new-class');
document.body.appendChild(newElement);

// 7. Переключи класс у существующего элемента и проверьте его наличие в консоли.
newElement.classList.toggle('changedClass');

console.log(newElement.classList.contains('changedClass'));