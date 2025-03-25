// 1. Создай функцию, которая принимает произвольное количество чисел и возвращает их среднее значение;
function sumAll(...numbers) {
  return Math.round(
    numbers.reduce((total, num) => total + num, 0) / numbers.length
  );
}

console.log(sumAll(1, 2, 3, 4, 5, 6, 6, 7, 8, 4));

// 2. Создай функцию, которая принимает объект с информацией о пользователе (имя, возраст, страна) и возвращает строку с этой информацией, используя деструктуризацию;
function userInfo({ name, age, country }) {
  return `Name: ${name}, Age: ${age}, Country: ${country}`;
}

const user = {
  name: "Alice",
  age: 33,
  country: "USA",
};

console.log(userInfo(user));

// 3. Создай объект с вложенными объектами и массивами. Используй деструктуризацию, чтобы извлечь несколько значений на разных уровнях вложенности;
const person = {
  name: "Mike",
  surName: "Boreyko",
  address: {
    city: "New York",
    zip: 3003,
  },
  hobbies: ["Swimming", ["Hiking", "Skiing"], "eating😁"],
};

const {
  name,
  address: { city },
  hobbies: [first, [, third], fourth],
} = person;

console.log(name);
console.log(city);
console.log(first);
console.log(third);
console.log(fourth);

// 4. Используй оператор `spread` для создания нового массива, который включает все элементы исходного массива и добавляет несколько новых элементов в начале и в конце;
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
const newArray = ["Начало", "Здесь", ...arr1, ...arr2, "Это", "Конец"]; // Здесь я сразу применил и объединение:)

console.log(newArray);

// 5. Используй оператор `rest` для создания функции, которая принимает объект с параметрами и возвращает новый объект без одного указанного параметра.
const unrialFruit = {
  isReal: false,
  name: 'Zorberium',
  weight: 333,
  color: 'neon blue',
  fromWhere: 'Galaxy Z-9',
  taste: 'меняет вкус каждые 10 секунд'
}

function removeProperty({ isReal, ...other }) {
  return other
}

console.log(removeProperty(unrialFruit));