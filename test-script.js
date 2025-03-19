//1. Есть массив чисел. Преобразуй массив так, чтобы там были квадраты чисел. Пример: [2, 3] -> [4, 9];
const num = [1, 2, 3, 4, 5, 6];
const num2 = num.map((num) => num ** 2);

console.log(num2);

//2. Есть массив c повторяющимися элементами. Отфильтруй массив так, чтобы там остались только уникальные элементы. Пример: [1, 2, 2, 3, 4, 5, 5, 5, 6] -> [1, 2, 3, 4, 5, 6];
const notFilter = [1, 2, 2, 3, 4, 5, 5, 5, 6];
const filter = new Set(notFilter);

console.log(filter);

//3. Есть массив чисел, посчитай сумму его элементов. Пример: [1, 2, 3] -> 6. Подсказка: используй reduce;
const sum = num.reduce((total, num) => total + num, 0);

console.log(sum);

//4. Напиши программу, которая развернет массив, то есть все элементы будут в обратном порядке. Нельзя использовать reverse()!
const random = [1, 2, 3, 4, 5, 6, 7];
function reverseArray(reversed) {
  let left = 0;
  let right = reversed.length - 1;

  while (left < right) {
    let temp = reversed[left];
    reversed[left] = reversed[right];
    reversed[right] = temp;

    left++;
    right--;
  }

  return reversed;
}

console.log(reverseArray(random));

// Привет, можете пожалуйста объяснить, как выполнить 4-ую заданию? Я его сделал с помощью гпт, но не до конца понял)



//5. Создай две переменных - две строки с использованием let и const. Попробуйте изменить значения всех этих переменных. 
// Создайте два массива с использованием let и const. Попробуйте изменить массивы (добавить и удалить элементы) и переопределить сами массивы. 
// Посмотри на результаты и объясни своими словами (да, опять🙂), что и почему так произошло.
let str = 'hello ';
const str2 = 'world';

console.log(`${str} ${str2}`);


str = 'nothello';
// str2 = 'notworld';
// console.log(`${str} ${str2}`); 


let arrLet = [1, 2, 4, 5];
const arrConst = ['q', 'w', 'e', 'r', 't', 'y'];

console.log(arrLet);
console.log(arrConst);


arrLet.push(333, 777);
arrConst.push('1', '2');
arrLet.pop();
arrConst.pop();

console.log(arrLet);
console.log(arrConst);

arrLet = [10, 20, 40, 333];
console.log(arrLet);

arrConst = ['none'];
console.log(arrConst);

/*
Конечно же, со своими словами(почти):
На первом варианте всё понятно, let можно менять, а const нельля. Но добавлять/удалять значение можно, об этом чуть позже👇🏻👇🏻👇🏻

На втором варианте, когда мы переопределяем массивы с помощью let, то нет никаких проблем. Но когда мы делаем тоже самое с const, то не получится.
Потому что, как я сказал выше, к const можно добавлять или удалять значение, но полностью переопределить нельзя. А кот let, ему всё равно, он такой изменчивый, как погода😁

*/
