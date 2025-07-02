const jsConfetti = new JSConfetti();
const emojiSets = [
  ["🎉", "✨", "🎊", "🥳"],
  ["🍀", "🌟", "🍭", "🌈"],
  ["🌸", "💐", "🌺", "🌼", "🌻"],
  ["🔥", "💥", "⚡", "💫"],
  ["🍕", "🍔", "🍟", "🌮"],
  ["🐱", "🐶", "🐭", "🦊"],
];
const correctSound = new Audio('sounds/correct.wav');
const wrongSound = new Audio('sounds/wrong.mp3');
correctSound.volume = 0.5;
wrongSound.volume = 0.5;
const header = document.getElementById("header");
const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");
const answersBox = document.querySelectorAll(".answer");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");
const textAnswer = document.getElementById("text-answer");
const submitAnswerBtn = document.getElementById("submit-answer-btn");
const feedback = document.getElementById("feedback");
const progress = document.getElementById("progress");
const answers = document.querySelector(".answers");

const questions = [
  {
    question: "1. Что вернёт выражение typeof null?",
    answers: ['a) "null"', 'b) "object"', 'c) "undefined"', 'd) "boolean"'],
    correctAnswer: 1,
  },
  {
    question: "2. Что делает метод Array.prototype.map()?",
    answers: [
      "a) Изменяет исходный массив",
      "b) Возвращает новый массив, не изменяя исходный",
      "c) Фильтрует элементы",
      "d) Соединяет массив в строку",
    ],
    correctAnswer: 1,
  },
  {
    question: "3. Какой результат у выражения: [] + 1 + 2?",
    answers: ['a) "3"', 'b) "12"', "c) 3", "d) NaN"],
    correctAnswer: 1,
  },
  {
    question: "4. Какой оператор используется для строгого сравнения?",
    answers: ["a) ==", "b) =", "c) !=", "d) ==="],
    correctAnswer: 3,
  },
  {
    question: "5. Что делает event.preventDefault()?",
    answers: [
      "a) Останавливает всплытие события",
      "b) Удаляет элемент",
      "c) Предотвращает действие по умолчанию",
      "d) Прерывает выполнение функции",
    ],
    correctAnswer: 2,
  },
  {
    question: "6. Что такое замыкание (closure)?",
    answers: [
      'a) Объект с методами"',
      "b) Функция внутри объекта",
      "c) Функция, которая запоминает своё лексическое окружение",
      "d) Область видимости переменных",
    ],
    correctAnswer: 2,
  },
  {
    question: "7. Какой будет вывод: console.log(0.1 + 0.2 === 0.3)?",
    answers: ["a) true", "b) false", "c) undefined", 'd) TypeError"'],
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
let currentQuestion = null;
const allAnswers = [answer1, answer2, answer3, answer4];

function getRandomEmojiSet() {
  const index = Math.floor(Math.random() * emojiSets.length);
  return emojiSets[index];
}

submitAnswerBtn.addEventListener("click", function (e) {
  if (!textAnswer.value.trim()) {
    feedback.textContent = "Введите ответ!";
    feedback.classList.add("incorrect");
    return;
  }

  if (textAnswer && textAnswer.value.trim().toLowerCase() === currentQuestion.correctAnswer.toLowerCase()) {
    const emojis = getRandomEmojiSet();

    correctSound.play();

    feedback.textContent = "Correct✅";
    feedback.classList.add("correct");

    score++;

    jsConfetti.addConfetti({
      emojis: emojis,
      emojiSize: 40,
      confettiNumber: 60,
    });
  } else {
    wrongSound.play();

    feedback.textContent = "Wrong❌";
    feedback.classList.add("incorrect");
  }

  setTimeout(() => {
    currentIndex++;

    if (currentIndex < questions.length) {
      showNextQuestion();
    } else {
      showResult();
    }
  }, 2000);

  return;
});

function showNextQuestion() {
  currentQuestion = questions[currentIndex];
  progress.textContent = `Вопрос ${currentIndex + 1} из ${questions.length}`;

  if (!currentQuestion.answers) {
    textAnswer.style.display = "block";
    submitAnswerBtn.style.display = "block";

    header.textContent = currentQuestion.question;
    answer1.style.display = "none";
    answer2.style.display = "none";
    answer3.style.display = "none";
    answer4.style.display = "none";

    feedback.textContent = "";
    feedback.classList.remove("correct", "incorrect");

    textAnswer.value = "";
  } else {
    answer1.style.display = "block";
    answer2.style.display = "block";
    answer3.style.display = "block";
    answer4.style.display = "block";
    header.textContent = currentQuestion.question;
    answer1.textContent = currentQuestion.answers[0];
    answer2.textContent = currentQuestion.answers[1];
    answer3.textContent = currentQuestion.answers[2];
    answer4.textContent = currentQuestion.answers[3];

    allAnswers.forEach(function (answer, index) {
      answer.onclick = () => handleAnswerClick(index);
    });

    allAnswers.forEach((a) => {
      a.classList.remove("correct", "incorrect");
    });

    feedback.textContent = "";
    feedback.classList.remove("correct", "incorrect");
  }
}

function handleAnswerClick(index) {
  currentQuestion = questions[currentIndex];
  const answers = [answer1, answer2, answer3, answer4];

  if (index === currentQuestion.correctAnswer) {
    correctSound.play();
    feedback.textContent = "Correct✅";
    feedback.classList.add("correct");
    score++;
    const emojis = getRandomEmojiSet();
    jsConfetti.addConfetti({
      emojis: emojis,
      emojiSize: 40,
      confettiNumber: 60,
    });
  } else {
    wrongSound.play();
    feedback.textContent = "Wrong❌";
    feedback.classList.add("incorrect");
    answers[currentQuestion.correctAnswer].classList.add("correct");
  }

  setTimeout(() => {
    currentIndex++;

    if (currentIndex < questions.length) {
      showNextQuestion();
    } else {
      showResult();
    }
  }, 2000);
}

function showResult() {
  header.textContent = `Поздравляю! Вы нашли ${score} из 10 вопросов (${Math.round(
    (score / questions.length) * 100
  )}%)`;
  answer1.textContent = "";
  answer2.textContent = "";
  answer3.textContent = "";
  answer4.textContent = "";
  restartBtn.style.display = "block";
  feedback.textContent = "";
  feedback.classList.remove("correct", "incorrect");
  progress.textContent = "";
  textAnswer.style.display = "none";
  submitAnswerBtn.style.display = "none";

  allAnswers.forEach(function (answer, index) {
    answer.onclick = null;
  });
}

startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  answers.style.display = "block";

  showNextQuestion();
});

restartBtn.addEventListener("click", () => {
  currentIndex = 0;
  score = 0;
  answers.style.display = "block";

  feedback.textContent = "";
  feedback.classList.remove("correct", "incorrect");
  progress.textContent = "";
  textAnswer.style.display = "none";
  submitAnswerBtn.style.display = "none";
  restartBtn.style.display = "none";
  startBtn.style.display = "block";

  header.textContent = "Проверь уровень знаний по JavaScript";

  allAnswers.forEach(function (answer, index) {
    answer.onclick = null;
  });
});
