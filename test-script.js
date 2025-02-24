//Вариант превый:
const a = 2;

console.log(a * a + a);

//Вариант второй:
console.log(2 * 2 + 2);

//Вариант третьий:
const result = 2 * 2 + 2;

console.log(result);


const sin54 = Math.sin(54);
const cos16 = Math.cos(16);
const result2 = sin54 * cos16;
const finalResult = result2 ** 2;

console.log(Math.round(finalResult));

const a1 = 13.2 * 71.90;
const a2 = Math.sqrt(a1);
const b = 7 ** 4;
const c = 2.4 / b;
const d = (16 * a2) / c;

const leftSide = d + 3 ** Math.sqrt(49);
const finalResult2 = leftSide * 2 ** 7;

console.log(Math.round(finalResult2));


const number1 = 25;
const number2 = 100;
const number3 = 939;

function checkEvenOdd(num) {
    if (num % 2 === 0) {
        console.log(`${num} четное`)
    } else {
        console.log(`${num} нечетное`)
    }
}

checkEvenOdd(number1);
checkEvenOdd(number2);
checkEvenOdd(number3);

const isName = prompt('Как вас зовут?');

if (isName) {
    console.log(`Hello, ${isName}`);
} else {
    console.log('Hello, Guest!')
}