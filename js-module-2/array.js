// 1. Оголоси три змінні і присвой кожній з них значення,
// використовуючи нотацію квадратних дужок.

// 2. Виконай перевизначення значення елементів з індексами 1 і 3.
// Заміни "plum" на "peach", а "orange" на "banana".

// 3. Оголоси змінну fruitsArrayLength і присвой їй довжину масиву fruits,
//  використовуючи властивість length.

// 4. Оголоси дві змінні: lastElementIndex - очікуване значення: індекс
// останнього елемента масиву fruits через довжина_масиву - 1; lastElement -
// значення останнього елемента масиву;

const fruits = ["apple", "plum", "pear", "orange"];

const firstElement = fruits[0];
const secondElement = fruits[1];
// const lastElement = fruits[3];

fruits[1] = "peach";
fruits[3] = "banana";

const fruitsArrayLength = fruits.length;

const lastElementIndex = fruits.length - 1;
const lastElement = fruits[lastElementIndex];

console.log(fruits);
console.log(fruitsArrayLength);
console.log(lastElementIndex);
console.log(lastElement);
