
const input = prompt("Яка офіційна назва JavaScript?")

if (input.toLowerCase() === "ecmascript") {
    alert("Правильно!")
} else {
    alert("Не знаєте? ECMAScript!")
}

// ///// task - 2

const hours = 14;
const minutes = 26;
let timestring;

if (minutes > 0) {
  timestring = `${hours} г. ${minutes} хв.`;
} else {
  timestring = `${hours} г.`;
}
console.log(timestring);

// ////// task - 3

const userInput = prompt('Введіть число');
let messange;

if (Number(userInput) > 0) {
    messange = "Це позитивне число"
} else if (Number(userInput) === 0) {
    messange = "Це нуль"
} else if (Number(userInput) < 0){
    messange = "Це негативне число"
} else {
    messange = "Це не число"
}
console.log(messange)

// ////// task - 4

const a = 120;
const b = 180;

if (a > 100 ?? b > 100) {
    console.log(a > b ? a : b);
} else {
    console.log(b + 512)
}

// ////// task - 5

let link = 'https://my-site.com/about';
// console.log(!link.endsWith('/'));
// Пиши код нижче за цей рядок
if (!link.endsWith('/')) {
    link += '/';
}
// Пиши код вище за цей рядок
console.log(link);

// ////// task - 6

link = 'https://somesite.com/about';
// link = 'https://my-site.com/about';
// Пиши код нижче за цей рядок
if (!link.endsWith('/') && link.includes('my-site')) {
    link += '/';
}
// Пиши код вище за цей рядок
console.log(link);

// ////// task - 7

!link.endsWith('/') && link.includes('my-site') ? link += '/' : link
// link += !link.endsWith('/') && link.includes('my-site') ? '/' : '';

console.log(link);

// ////// task - 8

const hoursValue = 10;
let message;

if (hoursValue < 17) {
    message = "Pending";
} else if (hoursValue >= 17 && hoursValue <= 24) {
    message = "Expires";
} else {
    message = "Overdue";
}

console.log(message);

// ////// task - 9

const daysUntilDeadline = 8;
// let message;

if (daysUntilDeadline === 0) {
    message = "Сьогодні";
} else if (daysUntilDeadline === 1) {
    message = "Завтра";
} else if (daysUntilDeadline === 2) {
    message = "Післязавтра";
} else {
    message = daysUntilDeadline >= 3 ? 'Дата у майбутньому' : "Error"
}

console.log(message);

// ////// task - 10

// const daysUntilDeadline = 8;
// let message;

switch (daysUntilDeadline) {
    case (daysUntilDeadline < 0 ? daysUntilDeadline : null):
        message = "Error";
        break;
    
    case 0:
        message = "Сьогодні";
        break;

    case 1:
        message = "Завтра";
        break;

    case 2:
        message = "Післязавтра";
        break;

    default:
        message = "Дата у майбутньому";       
}
console.log(message); 

// ////// task - 11 

const max = 100;
const min = 20;

for (let i = min; i <= max; i += 5) {
    console.log(i)
}

// ////// task - 12

const inputUser = prompt('Введіть логін:');

// if (inputUser === "Адмін") {
//     const inputPassword = prompt('Введіть пароль:');

//     if (inputPassword === "Я адмін") {
//         console.log("Здрастуйте!");
//     } else {
//         console.log("Невірний пароль");
//     }

// } else if(inputUser === null) {
//     console.log("Скасовано");
// } else {
// console.log("Я вас не знаю");
// }

if (!inputUser) {
    console.log('Скасовано!');
} else if (inputUser === 'Адмін') {
    const password = prompt('Пароль?');

    console.log(password === 'Я адмін' ? 'Здрастуйте!' : 'Невірний пароль');
} else {
    console.log('Я вас не знаю!');
}