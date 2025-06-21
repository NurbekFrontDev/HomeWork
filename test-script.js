const startButton = document.getElementById("start-btn");
const divs = document.querySelectorAll("div");
const header = document.getElementById("header");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");
const questions = [
  {
    question: '1. Что вернёт выражение typeof null?',
    answers: [
      'a) "null"',
      'b) "object" ✅',
      'c) "undefined"',
      'd) "boolean"',
    ],
    correctAnswer: 1,
    type: 'multiply',
  },
  {
    question: "2. Что делает метод Array.prototype.map()?",
    answers: [
      "a) Изменяет исходный массив",
      "b) Возвращает новый массив, не изменяя исходный ✅",
      "c) Фильтрует элементы",
      "d) Соединяет массив в строку",
    ],
    correctAnswer: 1,
    type: "multiple",
  },
  {
    question: "3. Какой результат у выражения: [] + 1 + 2?",
    answers: ['a) "3"', 'b) "12" ✅', "c) 3", "d) NaN"],
    correctAnswer: 1,
    type: "multiple",
  },
  {
    question: '4. Какой оператор используется для строгого сравнения?',
    answers: [
      'a) ==',
      'b) =',
      'c) !=',
      'd) === ✅',
    ],
    correctAnswer: 3,
    type: 'multiply',
  },
  {
    question: '5. Что делает event.preventDefault()?',
    answers: [
      'a) Останавливает всплытие события',
      'b) Удаляет элемент',
      'c) Предотвращает действие по умолчанию ✅',
      'd) Прерывает выполнение функции',
    ],
    correctAnswer: 2,
    type: 'multiply',
  },
  {
    question: '6. Что такое замыкание (closure)?',
    answers: [
      'a) Объект с методами',
      'b) Функция внутри объекта',
      'c) Функция, которая запоминает своё лексическое окружение ✅',
      'd) Область видимости переменных',
    ],
    correctAnswer: 2,
    type: 'multiply',
  },
  {
    question: '7. Какой будет вывод: console.log(0.1 + 0.2 === 0.3)?',
    answers: [
      'a) true',
      'b) false ✅',
      'c) undefined',
      'd) TypeError',
    ],
    correctAnswer: 1,
    type: 'multiply',
  },
];

let currentQuestionIndex = 0;
let score = 0;

startButton.addEventListener("click", () => {
  startButton.style.visibility = "hidden";
  renderQuestion(questions[currentQuestionIndex]);
});

function showResult() {
  header.textContent = `Вы ответили на ${score} из 10 вопросов (50%)`;
  answer1.textContent = '';
  answer2.textContent = '';
  answer3.textContent = '';
  answer4.textContent = '';
}

function renderQuestion(questionObj) {
  const { question, answers, correctAnswer } = questionObj;

  header.textContent = question;
  answer1.textContent = answers[0];
  answer2.textContent = answers[1];
  answer3.textContent = answers[2];
  answer4.textContent = answers[3];

  [answer1, answer2, answer3, answer4].forEach((el, index) => {
    el.onclick = () => {
      if (index === correctAnswer) {
        score++;
        alert('Правильно');
      } else {
        alert('Неправильно');
      }

      currentQuestionIndex++;

      if (currentQuestionIndex <= questions.length -1) {
        renderQuestion(questions[currentQuestionIndex]);
      } else {
        showResult();
      } 
      
    } 
  })
}

