// function calAverage() {
//     let result = 0;
//     for (let arg of arguments) {
//         result += arg;
//     }

//     return result / arguments.length;
// }

function calAverage(...args) {
    let result = 0;
    for (let arg of args) {
        result += arg;
    }

    return result / args.length;
}

console.log(calAverage(1, 2, 3, 4)); // 2.5
console.log(calAverage(14, 8, 2)); // 8
console.log(calAverage(27, 43, 2, 8, 36)); // 23.2