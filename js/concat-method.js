// 1. Доповни код таким чином, щоб у змінній allClients 
// утворився масив усіх елементів масивів oldClients і newClients.

const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];

const allClients = oldClients.concat(newClients); // Change this line

console.log(allClients);

// 2. Напиши функцію makeArray(firstArray, secondArray, maxLength) 
// для створення нового масиву з усіма елементами двох вихідних firstArray і 
// secondArray.Параметр maxLength містить максимально допустиму довжину нового масиву.

// Якщо кількість елементів нового масиву більша за maxLength, функція повинна 
// повернути копію масиву довжиною maxLength елементів.В іншому випадку функція 
// повинна повернути новий масив повністю.

function makeArray(firstArray, secondArray, maxLength) {
    // Change code below this line

  return firstArray.concat(secondArray).slice(0, maxLength);

    // Change code above this line
}
  
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));