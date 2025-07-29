let greeting = 'Привет! Как тебя зовут?'
let name = prompt(greeting);

while (name == '' || name == null) {
  name = prompt(greeting);
}

alert(name + ', я загадал число от 1 до 100. Попробуй найти');

let number = Math.floor(Math.random() * 100) + 1;
alert(number);
let guess = prompt('Какое число я загадал?');
let numberOfGuess = 1;

while (guess != number) {
  numberOfGuess = numberOfGuess + 1;

  if (guess > number) {
    guess = prompt('Много');
  } else if (guess < number) {
    guess = prompt('Мало');
  }
}

alert(`Ты угадал! Это число ${number}. You need ${numberOfGuess} `);