// Функція checkFruit(fruit) приймає рядок з назвою фрукта 
// (параметр fruit), і перевіряє, чи присутній такий фрукт в масиві fruits.
// Доповни код функції таким чином, що якщо:
// - фрукт присутній в масиві, то функція повертає true;
// - фрукт відсутній в масиві, то функція повертає false.

function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];

  return fruits.includes(fruit); // Change this line
}

console.log(checkFruit("plum"));
console.log(checkFruit("mandarin"));
console.log(checkFruit("pear"));
console.log(checkFruit("Pear"));
console.log(checkFruit("apple")); 

// 2. Напиши функцію getCommonElements(array1, array2), 
// яка отримує два масиви довільної довжини в параметри array1 і array2,
//     і повертає новий масив, що складається з тих елементів,
//         які присутні в обох вихідних масивах.

function getCommonElements(array1, array2) {
  // Change code below this line
    const commonNumbers = [];

    for (let i = 0; i < array1.length; i += 1) {
        if (array2.includes(array1[i])) {
            commonNumbers.push(array1[i])
        }
    }

    return commonNumbers
 // Change code above this line
}

console.log(getCommonElements([1, 2, 3], [2, 4]));
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// 3. Напиши функцію includes(array, value), яка робить те саме, 
// що і метод масиву масив.includes(значення) - перевіряє,
//   чи присутнє в масиві array значення value, повертаючи true, якщо присутнє,
//     і false в іншому випадку.
// При виконанні цього завдання в тілі функції includes() не можна 
// використовувати метод масив.includes(значення).

function includes(array, value) {
  // Change code below this line
  for (let arr of array) {
   
    if (arr === value) {
      return true;
    }
  }

  return false;
  // Change code above this line
}

console.log(includes([1, 2, 3, 4, 5], 3));
console.log(includes([1, 2, 3, 4, 5], 17));
console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));
console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));