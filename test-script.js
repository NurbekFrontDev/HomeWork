const num = 3;

if (num > 0) {
  console.log("Это число положительное");
} else if (num === 0) {
  console.log("Это число равно нулю");
} else if (num < 0) {
  console.log("Это число отрицательное");
}

const userHeight = prompt("Введите ваш рост:");
const userWeight = prompt("Введите ваш вес:");

const userWeightNum = Number(userWeight);
const userHeightNum = Number(userHeight) / 100;

const calc = userWeightNum / userHeightNum ** 2;
const calcFixed = Number(calc.toFixed(1));

const yourImt = `<h1>Ваш IMT: ${calcFixed}</h1>`;

if (calcFixed <= 16) {
  document.body.innerHTML = `${yourImt} <h2>Результат: Выраженный дефицит массы тела</h2>`;
} else if (calcFixed <= 18.5) {
  document.body.innerHTML = `${yourImt} <h2>Результат: Недостаточная масса тела</h2>`;
} else if (calcFixed <= 25) {
  document.body.innerHTML = `${yourImt} <h2>Результат: Нормальная масса тела</h2>`;
} else if (calcFixed <= 30) {
  document.body.innerHTML = `${yourImt} <h2>Результат: Избыточная масса тела (предожирение)</h2>`;
} else if (calcFixed <= 35) {
  document.body.innerHTML = `${yourImt} <h2>Результат: Ожирение 1-ой степени</h2>`;
} else if (calcFixed < 40) {
  document.body.innerHTML = `${yourImt} <h2>Результат: Ожирение 2-ой степени</h2>`;
} else if (calcFixed >= 40) {
  document.body.innerHTML = `${yourImt} <h2>Результат: Ожирение 3-ой степени</h2>`;
} else {
  console.log("error");
}

const userMonthNum = Number(prompt("Введите число этого месяца:"));
let MonthNum;

switch (userMonthNum) {
  case 1:
    MonthNum = "Январь";
    break;
  case 2:
    MonthNum = "Февраль";
    break;
  case 3:
    MonthNum = "Март";
    break;
  case 4:
    MonthNum = "Апрель";
    break;
  case 5:
    MonthNum = "Май";
    break;
  case 6:
    MonthNum = "Июнь";
    break;
  case 7:
    MonthNum = "Июль";
    break;
  case 8:
    MonthNum = "Август";
    break;
  case 9:
    MonthNum = "Сентябрь";
    break;
  case 10:
    MonthNum = "Октябрь";
    break;
  case 11:
    MonthNum = "Ноябрь";
    break;
  case 12:
    MonthNum = "Декабрь";
    break;
  default:
    MonthNum = "Неверный месяц!";
}

console.log(MonthNum);

const userGrade = Number(prompt("Честно напишите, как вы учились в школе?(1-5)"));
let grade;

switch (userGrade) {
    case 1:
        grade = 'Катастрофа! Даже Google не смог помочь... 📉';
        break;
    case 2:
        grade = 'Мда... Это уже был прогресс, но учитель плакал. 😭';
        break;
    case 3:
        grade = 'Ну, была троечка... Зато не двоечка! 😏'
        break;
    case 4:
        grade = 'Было хорошо! Учитель был доволен, но могло быть и лучше. 😉'
        break;
    case 5:
        grade = 'Гений! Ньютон был в шоке, Эйнштейн аплодировал стоя! 🚀🎓'
        break;
    default:
        grade = 'Неверная оценка!'
}

console.log(grade);