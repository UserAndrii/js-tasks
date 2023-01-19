// Доповни код функції createArrayOfNumbers(min, max) таким чином, 
// щоб вона повертала масив усіх цілих чисел від значення min до max.

function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
    for (let i = min; i <= max; i += 1) {
        numbers.push(i);
    }
  // Change code above this line
  return numbers
}

console.log(createArrayOfNumbers(1, 3));
console.log(createArrayOfNumbers(14, 17));
console.log(createArrayOfNumbers(29, 34));
console.log(createArrayOfNumbers(40, 60));

// 2. Напиши функцію filterArray(numbers, value), яка приймає масив чисел
// (параметр numbers) і повертає новий масив, в якому будуть тільки ті 
// елементи масиву numbers, які більші за значення параметра value(число).

function filterArray(numbers, value) {
   // Change code below this line
    const moreValue = [];

    for (let i = 0; i < numbers.length; i += 1) {
        if (numbers[i] > value) {
            moreValue.push(numbers[i]);
        }
    }

    return moreValue
  // Change code above this line
}

console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));