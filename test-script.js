console.log(
  "1. Напиши программу, которая использует цикл for, чтобы вывести числа от 1 до 10"
);
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
console.log('2. Напиши программу, которая использует цикл while, чтобы посчитать сумму чисел от 1 до 100')
let i = 1;
let count = 0;
while (i <= 100) {
  count += i;
  i++;
}
console.log(count);

console.log('3.*Выведи в консоль все простые числа от 0 до 100.')
for (let i = 2; i <= 100; i++) {
  let j;
  for (j = 2; j < i; j++) {
    if (i % j === 0) {
      break;
    }
  }
  if (j === i) {
    console.log(i);
  }
} 