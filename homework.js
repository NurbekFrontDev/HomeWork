// 1. Создай объект со свойствами и методом, который использует `this` для доступа к этим свойствам. Затем присвой этот метод другой переменной и вызовите её.
// Объясни своими словами, что произошло;

const userInfo = {
  name: "Nurbek",
  age: 17,
  greet() {
    console.log(`Hello! My name is ${this.name} and I'm ${this.age}`);
  },
};

const newFunc = userInfo.greet;

newFunc();

// Объяснение: Когда метод находиться в объекте, то есть This, то оно рабоет правильно, потому что там есть свойства.
// Но когда мы вызываем его в другом месте, где нету этих свойств, то оно не работает, потому что this работает там где его вызвали, а не там где его написали

// 2. Объясни, почему в примере ниже в первом случае выводится имя, а во втором - undefined.
// Как сделать так, чтобы в методе delayedGreet тоже выводилось имя (без использования call, apply или bind)?

// const student = {
//   name: "Alice",

//   greet: function () {
//     console.log(`Hello, ${this.name}!`);
//   },

//   delayedGreet: function () {
//     setTimeout(this.greet, 1000);
//   },
// };

// student.greet(); // Hello, Alice
// student.delayedGreet(); // Hello, undefined

// Объяснение: Когда мы вызываем greet() функция привязывается к объекту student. И это означает, что this = student.
// Но когда мы передаем thid.grret в setTimeout, функция уже не привязан к объекту. И поэтому this = indefined

// Решение:

const student = {
  name: "alice",

  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },

  delayedGreet: function () {
    setTimeout(() => this.greet(), 1000);
  },
};

student.greet();
student.delayedGreet();

// 3. Напиши функцию и вызови её с разными контекстами, используя `call`, `apply` и `bind`;

function aboutPhone(name, year) {
  console.log(
    `${name} is released in ${year}. You can by it for ${this.price}!`
  );
}

const price = { price: 300 };
const price2 = { price: 30000 };
const price3 = { price: 300000 };

aboutPhone.call(price, "Iphone", "1999");
aboutPhone.apply(price2, ["nokia", "2025"]);

const priceOfXiomi = aboutPhone.bind(price3, "Xiomi", "3000");
priceOfXiomi();

// 4. Что будет в консоли в результате выполнения функций sayHelloToAdmin() и sayHelloToUser()? Объясни, почему так произошло. Как это можно изменить?

function sayHello() {
  console.log("Hello, " + this.name);
}

const admin = {
  name: "Bob",
};

const user = {
  name: "John",
};

const sayHelloToAdmin = sayHello.bind(admin);

sayHelloToAdmin();

const sayHelloToUser = sayHelloToAdmin.bind(user);

sayHelloToUser();

// Объяснение: Bind() нельзя использовать дважда, если это сделать, то ничего не измениться. 
// Здесь мы привязали sayHello к admin в переменной sayHelloToAdmin и во втором случае хотим привязать его же к user используя bind. Именно из за этого ничего не изменилься