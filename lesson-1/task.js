const apples = 47;
const grapes = 135;

const total = Number.parseInt(apples) + Number.parseInt(grapes);
console.log(total)

const diff = Number.parseInt(apples) - Number.parseInt(grapes);
console.log(diff)

// ------ task-2

let students = 100;
students += 50;
console.log(students);

// ------ task-3

const result = 108 + 223 - 2 * 5;
console.log(result);

// ------ task-4

// Перевір що буде в консолі при значеннях 27.3 та 27.9
const value = 27.3;

console.log(Math.floor(value));
console.log(Math.ceil(value));
console.log(Math.round(value));

// ------ task-5

const companyName = 'Cyberdyne Systems';
const repairBots = 150;
const defenceBots = 50;
const message = `${companyName} has ${Number.parseInt(repairBots) + Number.parseInt(defenceBots)} bots in stock`;
console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// ------ task-6

let weight = '88,3';
let height = '1.75';

const weightArr = Number.parseFloat(weight.replace(',', '.'));
const heightArr = Number.parseFloat(height.replace(',', '.'));

const bmi = weightArr / Math.pow(heightArr, 2);

console.log(bmi.toFixed(1)); // 28.8

// ------ task-7

console.log(5 > 4); // true
console.log(10 >= '7'); // true
console.log('2' > '12'); // true
console.log('2' < '12'); // false
console.log('4' == 4); // true
console.log('6' === 6); // false
console.log('false' === false); // false
console.log(1 == true); // true
console.log(1 === true); // false
console.log('0' == false); // true
console.log('0' === false); // false
console.log('Papaya' < 'papaya'); // true
console.log('Papaya' === 'papaya'); // false
console.log(undefined == null); // true
console.log(undefined === null); // false

// ------ task-8

console.log(true && 3); // 3
console.log(false && 3); // false
console.log(true && 4 && 'kiwi'); // kiwi
console.log(true && 0 && 'kiwi'); // 0
console.log(true || 3); // true
console.log(true || 3 || 4); // true
console.log(true || false || 7); // true
console.log(null || 2 || undefined); // 2
console.log((1 && null && 2) > 0); // false
console.log(null || (2 && 3) || 4); // 3

// ------ task-9

const incomingValue = 5;
// const incomingValue = null;
// const incomingValue = undefined;
// const incomingValue = 0;
// const incomingValue = false;
const defaultValue = 10;
const checkvalue = incomingValue !== undefined || null ? incomingValue : defaultValue;

console.log(checkvalue);

// ------ task-10

const totalMinutes = 90;

const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;
console.log(hours);
console.log(minutes);

const doubleDigitHours = String(hours).padStart(2, 0);
const doubleDigitMinutes = String(minutes).padStart(2, 0);
console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);