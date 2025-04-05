// 1. Напиши функцию, которая принимает строку и проверяет, является ли она палиндромом. Если да - функция возвращает true, если нет - false;

function isPalindrome(str) {
  const lowerStr = str.toLowerCase();
  const reversedStr = lowerStr.split('').reverse().join('');
  return lowerStr === reversedStr;
}

const userAnswer = prompt('Введите палиндром, чтобы узнать, является ли он реально палиндромом😄');
console.log(isPalindrome(userAnswer));

// 2. Напиши функцию, которая принимает строку (предложение) и находит первое самое короткое слово в ней и возвращает его;

// function findShortestWord(sentence) {
//   const words = sentence.split(' ');
//   let shortestWord = words[0];
//   for (let i = 1; i < words.length; i++) {
//     if (words[i].length < shortestWord.length) {
//       shortestWord = words[i];
//     }
//   }
//   return shortestWord;
// }

// const userSentence = prompt('Просто введите предложение, чтобы найти что-то короткое...)');
// console.log(findShortestWord(userSentence));

// 3. Напиши функцию, которая форматирует строку с цифрами в телефонный номер. Пример: createPhoneNumber(123456789) → 8 (123) 456-789;

// function formatPhoneNumber(number) {
//   const areaCode = number.slice(0, 3);
//   const firstPart = number.slice(3, 6);
//   const secondPart = number.slice(6, 9);
//   const correctNumber = `+7 (${areaCode }) ${firstPart }-${secondPart}`;
//   return correctNumber;
// }

// const userPhone = prompt('Введите свой номер:');
// console.log(formatPhoneNumber(userPhone));

// 4. Напиши функцию, которая ищет минимальное и максимальное значение в массиве;

// function findMinMax(array) {
//   const min  = Math.min(...array);
//   const max = Math.max(...array);
//   return `Min Value: ${min}\nMax Value: ${max}`;
// }

// const numbers = [43, 4398, 43920, 76943, 3974];
// console.log(findMinMax(numbers));

// 5. *Напиши функцию, которая на вход принимает массив, а на выходе возвращает новый, отсортированный в порядке возрастания, массив.
// Попробуй реализовать алгоритм сортировки самостоятельно. Если не получается - почитай про bubble sort и попробуй реализовать её.

//Вариант 1:
// function bubbleSort(array) {
//   const sortedArray = array.sort();
//   return sortedArray;
// }

// const numbers = [7, 3, 9, 4, 2, 5, 1, 6, 8];
// console.log(bubbleSort(numbers));

//Вариант 2:

// function bubbleSort2(arr) {
//   const newArr = arr.slice();
//   for (let j = newArr.length - 1; j > 0; j--) {
//     let swapped = false;
//     for (let i = 0; i < j; i++) {
//       if (newArr[i] > newArr[i + 1]) {
//         let temp = newArr[i];
//         newArr[i] = newArr[i + 1];
//         newArr[i + 1] = temp;
//         swapped = true;
//       }
//     }
//     if (!swapped) break;
//   }
//   return newArr;
// }

// const arrNums = [9, 1, 10, 6, 8, 2, 7, 4, 3];
// console.log(bubbleSort2(arrNums));

