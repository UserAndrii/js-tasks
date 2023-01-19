// Доповни цикл for таким чином, щоб він логував 
// всі цілі числа в діапазоні від start до end включно.

const start = 3;
const end = 7;

for (let i = start; i <= end; i += 1) { // Change this line
  console.log(i);
}

// 2. Напиши функцію calculateTotal(number), яка приймає ціле число 
// (параметр number) і повертає суму всіх цілих чисел від одиниці 
// і до цього числа.Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

function calculateTotal(number) {
 // Change code below this line
    let sum = 0;

    for (let i = 0; i <= number; i += 1) {
        sum += i;
    }

    return sum;

  // Change code above this line
}

console.log(calculateTotal(1));
console.log(calculateTotal(3));
console.log(calculateTotal(7));
console.log(calculateTotal(18));
console.log(calculateTotal(24));
console.log(calculateTotal(30));

// 3. Доповни код циклу for таким чином, щоб він послідовно логував 
// усі елементи масиву fruits

const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits.length; i += 1) { // Change this line
  const fruit = fruits[i]; // Change this line
  console.log(fruit);
}

// 4. Напиши функцію calculateTotalPrice(order), яка приймає один параметр 
// order - масив чисел, і обчислює загальну суму його елементів.
// Загальна сума елементів повинна зберігатися у змінній total, яка 
// повертається як результат роботи функції.

function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
    // for (const args of order){
    //     total += args;
    // }

    for (let i = 0; i <= order[i]; i += 1) {
        total += order[i];
    }
  // Change code above this line
  return total;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// 5. Напиши функцію findLongestWord(string), яка приймає довільний рядок, 
// що складається тільки зі слів, розділених пробілом(параметр string), і 
// повертає найдовше слово в цьому рядку.

function findLongestWord(string) {
  // Change code below this line
    const arrString = string.split(' ');
    let longestWord = arrString[0];

    for (let i = 0; i < arrString.length; i += 1) {

        if (longestWord.length < arrString[i].length) {
            longestWord = arrString[i];
        }
    }

    return longestWord;
  // Change code above this line
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("Google do a roll"));
console.log(findLongestWord("May the force be with you"));
