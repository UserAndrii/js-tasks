// Напиши функцію formatTime(minutes) яка переведе значення minutes
//     (кількість хвилин) у рядок у форматі годин та хвилин HH: MM.

function formatTime(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    // console.log(hours);

    const minutes = totalMinutes % 60;
    // console.log(minutes);


    const doubleDigitHours = String(hours).padStart(2, 0);
    const doubleDigitMinutes = String(minutes).padStart(2, 0);
    return `${doubleDigitHours}:${doubleDigitMinutes}`;
}

console.log(formatTime(70)); // "01:10"
console.log(formatTime(450)); // "07:30"
console.log(formatTime(1441)); // "24:01"