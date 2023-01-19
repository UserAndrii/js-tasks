// Виконай рефакторинг коду функції calculateTotalPrice(order),
//     замінивши цикл for на for...of.

function calculateTotalPrice(orders) {
  let total = 0;
  // Change code below this line

//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
    
    for (let order of orders) {
        total += order
    }

  // Change code above this line
  return total;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
console.log(calculateTotalPrice([]));


// 2. Виконай рефакторинг функції filterArray(numbers, value), 
// замінивши цикл for на for...of.

function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
    
    for (let number of numbers) {
        if (number > value) {
            filteredNumbers.push(number);
        }
    }

  return filteredNumbers;
  // Change code above this line
}

console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));
console.log(filterArray([12, 24, 8, 41, 76], 70));