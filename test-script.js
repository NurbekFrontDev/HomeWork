const header = document.getElementById("header");
const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");
const answersBox = document.querySelectorAll(".answer");
const resultText = document.getElementById("result");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");

const questions = [
  {
    question: "1. Что вернёт выражение typeof null?",
    answers: ['a) "null"', 'b) "object" ✅', 'c) "undefined"', 'd) "boolean"'],
    correctAnswer: 1,
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
  },
  {
    question: "3. Какой результат у выражения: [] + 1 + 2?",
    answers: ['a) "3"', 'b) "12" ✅', "c) 3", "d) NaN"],
    correctAnswer: 1,
  },
  {
    question: "4. Какой оператор используется для строгого сравнения?",
    answers: ["a) ==", "b) =", "c) !=", "d) === ✅"],
    correctAnswer: 3,
  },
  {
    question: "5. Что делает event.preventDefault()?",
    answers: [
      "a) Останавливает всплытие события",
      "b) Удаляет элемент",
      "c) Предотвращает действие по умолчанию ✅",
      "d) Прерывает выполнение функции",
    ],
    correctAnswer: 2,
  },
  {
    question: "6. Что такое замыкание (closure)?",
    answers: [
      'a) Объект с методами"',
      "b) Функция внутри объекта",
      "c) Функция, которая запоминает своё лексическое окружение ✅",
      "d) Область видимости переменных",
    ],
    correctAnswer: 2,
  },
  {
    question: "7. Какой будет вывод: console.log(0.1 + 0.2 === 0.3)?",
    answers: ["a) true", "b) false ✅", "c) undefined", 'd) TypeError"'],
    correctAnswer: 1,
  },
  {
    question: "8. Как называется область, в которой видна переменная?",
    correctAnswer: "область видимости",
  },
  {
    question: "9. Какой тип данных у значения true?",
    correctAnswer: "булевый",
  },
  {
    question:
      "10. Как называется массивоподобный объект, возвращаемый document.querySelectorAll()?",
    correctAnswer: "NodeList",
  },
];

let currentIndex = 0;
let score = 0;

function showNextQuestion() {
  const currentQuestion = questions[currentIndex];

  if (!currentQuestion.answers) {
    const userAnswer = prompt(currentQuestion.question);
    if (userAnswer && userAnswer.trim().toLowerCase() === currentQuestion.correctAnswer.toLowerCase()) {
      alert("Correct✅");
      score++;
    } else {
      alert("Wrong❌");
    }

    currentIndex++;

    if (currentIndex < questions.length) {
      showNextQuestion();
    } else {
      showResult();
    }

    return;
  }

  header.textContent = currentQuestion.question;
  answer1.textContent = currentQuestion.answers[0];
  answer2.textContent = currentQuestion.answers[1];
  answer3.textContent = currentQuestion.answers[2];
  answer4.textContent = currentQuestion.answers[3];

  [answer1, answer2, answer3, answer4].forEach(function (answer, index) {
    answer.onclick = () => handleAnswerClick(index);
  });
}

function handleAnswerClick(index) {
  const currentQuestion = questions[currentIndex];
  if (index === currentQuestion.correctAnswer) {
    alert("Correct✅");
    score++;
  } else {
    alert("Wrong❌");
  }

  currentIndex++;

  if (currentIndex < questions.length) {
    showNextQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  header.textContent = `Поздравляю! Вы нашли ${score} из 10 вопросов (${Math.round((score / questions.length) * 100)}%)`
  answer1.textContent = '';
  answer2.textContent = '';
  answer3.textContent = '';
  answer4.textContent = '';
  restartBtn.style.display = 'block';
  
  [answer1, answer2, answer3, answer4].forEach(function (answer, index) {
    answer.onclick = null;
  });
}

startBtn.onclick = () => {
  startBtn.style.visibility = "hidden";

  showNextQuestion();

};


restartBtn.onclick = () => {
  currentIndex = 0;
  score = 0;

  restartBtn.style.display = 'none';
  startBtn.style.visibility = 'visible';
  
  header.textContent = 'Проверь уровень знаний по JavaScript';

  [answer1, answer2, answer3, answer4].forEach(function (answer, index) {
    answer.onclick = null;
  });
}

