// 1 задание
// В следующем коде несколько раз повторяются похожие операции. Проведите рефакторинг, чтобы избежать дублирования,
// используя функции или другие средства:
// const product1 = { name: 'Product 1', price: 10 };
// const product2 = { name: 'Product 2', price: 20 };
// const total1 = product1.price * 1.2;
// const total2 = product2.price * 1.2;
// console.log('Total for Product 1:', total1);
// console.log('Total for Product 2:', total2);

const product1 = { name: 'Product 1', price: 10 };
const product2 = { name: 'Product 2', price: 20 };

function printTotalWithTax(product) {
  const total = product.price * 1.2;
  console.log(`Total for ${product.name}:`, total);
}

printTotalWithTax(product1);
printTotalWithTax(product2);


// 2 задание
// Код ниже содержит сложные вложенные условия. Упростите его, чтобы улучшить читаемость и уменьшить вероятность ошибок:
// if (user.isAdmin) {
//   if (user.isActive) {
//     if (user.age > 18) {
//       console.log('Access granted');
//     }
//   }
// }

function checkUser(user) {
  if (!user.isAdmin) {
    return;
  }

  if (!user.isActive) {
    return;
  }

  if (user.age <= 18) {
    return;
  }

  console.log('Access granted');
}

// 3 задание
// В следующей функции выполняется слишком много операций. Разделите её на несколько более коротких функций,
// чтобы улучшить читаемость и повторное использование кода:
// function checkStock(item) {
//   return Math.random() < 0.5; // Возвращает рандомно true или false, это просто иммитация функции!
// }
// function processOrder(order) {
//   // Валидация данных заказа
//   if (!order.id || !order.items || order.items.length === 0) {
//     console.log('Invalid order');
//     return;
//   }
//   // Рассчет суммы
//   let total = 0;
//   for (let item of order.items) {
//     total += item.price * item.quantity;
//   }
//   // Проверка наличия на складе
//   for (let item of order.items) {
//     if (!checkStock(item)) {
//       console.log('Item out of stock:', item.name);
//       return;
//     }
//   }
//   // Выполнение заказа
//   console.log('Order processed with total:', total);
// }

function checkStock(item) {
  return Math.random() < 0.5; // имитация
}

function isValidOrder(order) {
  return order.id && order.items && order.items.length > 0;
}

function calculateTotal(order) {
  return order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function isInStock(order) {
  for (let item of order.items) {
    if (!checkStock(item)) {
      return false; 
    }
  }
  return true; 
}

function processOrder(order) {
  if (!isValidOrder(order)) {
    console.log('Invalid order');
    return;
  }

  const total = calculateTotal(order);

  if (!isInStock(order)) {
    console.log('One or more items are out of stock');
    return;
  }

  console.log('Order processed with total:', total);
}
