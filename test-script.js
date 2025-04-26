// 1. Создай объект, ключи в котором будут описывать тебя. Например, твое имя, возраст, увлечения и т.д. 
// Обязательно используй разные типы данных: имя - строка, возраст - число, хобби - массив и  т.д. 
// Затем выведи все свои свойства/свойства объекта в консоль(разными способами!);

const myInfo = {
  name: 'Nurbek',
  age: 17,
  hobbies: [
    'reading', 
    ' jogging', 
    ' coding'
  ],
  isStudent: true,
};

for (let key in myInfo) {
  console.log(`${key}: ${myInfo[key]}`);
}

console.log(myInfo);
console.log(myInfo.name);
console.log(myInfo['age']);
console.log(myInfo.hobbies[2]);
console.log(myInfo.isStudent);
console.log(Object.keys(myInfo));
console.log(Object.values(myInfo));
console.log(Object.entries(myInfo));


// 2. В объект из предыдущего пункта:

// - добавь новое свойство;

// - измени значение существующего свойства;
// - удали любое свойство.
// И снова выведи все свойства объекта в консоль разными способами!

myInfo.country = 'Uzbekistan';
myInfo.age = 18;
delete myInfo.hobbies[1];

console.log(myInfo);
console.log(myInfo.name);
console.log(myInfo['age']);
console.log(myInfo.hobbies[0]);
console.log(myInfo.isStudent);
console.log(Object.keys(myInfo));
console.log(Object.values(myInfo));
console.log(Object.entries(myInfo));