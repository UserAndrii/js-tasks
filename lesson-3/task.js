// task - 1

const genres = ['Jazz', 'Blues',];
console.log(genres);

genres.push('rock-n-roll');
console.log(genres);

console.log(genres[0]);
console.log(genres[genres.length - 1]);

console.log(genres.shift());
console.log(genres);

genres.unshift('Country', 'Reggae')
console.log(genres);


// task - 2

const values = '8 11';
const arr = values.split(' ');

const square = Number.parseInt(arr[0]) * Number.parseInt(arr[arr.length - 1]);
console.log(square);

// task - 3

const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

for (let i = 0; i < fruits.length; i++) {
    console.log(`${i + 1} : ${fruits[i]}`);
}

// task - 4

const names = 'Jacob,William,Solomon,Artemis';
const phones = '89001234567,89001112233,890055566377,890055566300';

const nameArr = names.split(',');
const phoneArr = phones.split(',');

// for (let i = 0; i < nameArr.length; i += 1) {
//     console.log(`${nameArr[i]} : ${phoneArr[i]}`)
// }

let i = 0;

for (const phone of phoneArr) {
    console.log(`${nameArr[i]} : ${phone}`);
    i++;
}

// task - 5

const string = 'Welcome to the future';
// const stringArr = string.split(' ');

// for (let i = 1; i < stringArr.length-1; i++) {
//     console.log(stringArr[i])
// }

const stringArr = string.split(' ');

stringArr.shift();
stringArr.pop();

for (const value of stringArr) {
    console.log(value);
}

// task - 6

const stringNew = 'Welcome to the future';
// const stringArrNew = string.split(' ');

// stringArrNew.reverse();
// console.log(stringArrNew);

// const result = stringArrNew.join('');
// console.log(result);

const stringArrNew = stringNew.split(' ').reverse().join('');
console.log(stringArrNew);

// task - 7

const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
console.log(langs.sort());
//            ---- or ----
for (let i = 0; i < langs.length; i++) {
    for (let j = 0; j < i; j++) {
        if (langs[i] < langs[j]) {
            let temp = langs[i];
            langs[i] = langs[j];
            langs[j] = temp;
        }
    }
}
console.log(langs);


// task - 8

const numbers = [2, 17, 94, 1, 23, 37];
let min = numbers[0];

for (let number of numbers) {
    if (min > number) {
        min = number
    }
}
console.log(min);

