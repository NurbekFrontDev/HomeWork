// 1. Напиши функцию, которая принимает массив чисел, совершает над ними любую математическую операцию и возвращает новый массив, содержащий результаты этих операций,
// используя стрелочные функции;

const multiply = (numbers) => numbers.map((n) => n * n);

const arrayOfNumbers = [1, 2, 3, 4, 5];

console.log(multiply(arrayOfNumbers));

// 2. Создай объект с методом, который использует стрелочную функцию внутри метода `setTimeout` для вывода значения свойства объекта через 1 секунду;

const student = {
  name: "Nurbek",
  age: 17,
  greet: function () {
    console.log(this);
    setTimeout(() => {
      console.log(`Hi, What's up! I'm ${this.name} and I'm ${this.age}!`);
    }, 1000);
  },
};

student.greet();

//3. Реализуй функцию высшего порядка*, которая принимает функцию и массив, и применяет эту функцию ко всем элементам массива, используя стрелочные функции.

const sum = (fn, array) => array.map(fn);
const fnSum = (num) => num + num;

console.log(sum(fnSum, arrayOfNumbers));
