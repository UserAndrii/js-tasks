// Доповни вираз остачі від ділення таким чином, щоб код проходив тести.

const a = 3 % 3;
const b = 4 % 3;
const c = 11 % 8;
const d = 12 % 7;
const e = 8 % 6;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

// 2. Напиши функцію getEvenNumbers(start, end), яка повертає масив усіх парних чисел 
// від start до end.Парним вважається число, яке ділиться на 2 без остачі(10 % 2 === 0).

function getEvenNumbers(start, end) {
   // Change code below this line
    let evenNumbers = [];

    for (let i = start; i <= end; i += 1) {
        if (i % 2 === 0) {
            evenNumbers.push(i);
        }
    }

    return evenNumbers;

    // Change code above this line
}
  
console.log(getEvenNumbers(2, 5));
console.log(getEvenNumbers(3, 11));
console.log(getEvenNumbers(6, 12));
console.log(getEvenNumbers(8, 8));
console.log(getEvenNumbers(7, 7));


// 3. Доповни код таким чином, щоб у змінну number записувалося 
// перше число від start до end, яке ділиться на 5 без остачі.

const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
      number = i;
      break;
  }
}

console.log(number);


// 4. Виконай рефакторинг функції findNumber(start, end, divisor) 
// таким чином, щоб вона:
// - повертала перше число від start до end, яке ділиться на divisor без остачі
// - не використала оператор break
// - не використала змінну number

function findNumber(start, end, divisor) {
  // Change code below this line
  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      return i;
    }
  }
  // Change code above this line
}

console.log(findNumber(2, 6, 5));
console.log(findNumber(8, 17, 3));
console.log(findNumber(6, 9, 4));
console.log(findNumber(16, 35, 7));