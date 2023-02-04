// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }

// const result = makePizza();
// const pointer = makePizza;

// console.log(result);
// console.log(pointer);

// console.log('//////////////////////////////////////////////////');

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// };

// console.log(makeMessage("Royal Grand", makePizza));
// console.log(makeMessage("Ultracheese", deliverPizza));

// console.log('//////////////////////////////////////////////////');

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// };

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//     console.log(`Eating pizza ${pizzaName}`);
// });

// console.log('//////////////////////////////////////////////////');

const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
    order(pizzaName, onSuccess, onError) {
      for(const pizza of this.pizzas) {
          if (pizza === pizzaName) {
              return onSuccess(pizzaName);
          } 
      };
      return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
  },
};

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}

// Method calls with callbacks
console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

// console.log('//////////////////////////////////////////////////');

// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;

//     // for (let i = 0; i < orderedItems.length; i += 1) {
//     //     totalPrice += orderedItems[i];
//     // }

//     orderedItems.forEach(element => {
//         totalPrice += element;
//     });

//     return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice([5, 14, 12, 16, 24, 7, 22, 22, 22, 22, 21, 7, 21, 11, 24, 6, 20, 9, 8, 8, 11, 10, 24]));
    
// console.log('//////////////////////////////////////////////////');

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

// //   for (let i = 0; i < numbers.length; i += 1) {
// //     if (numbers[i] > value) {
// //       filteredNumbers.push(numbers[i]);
// //     }
// //   }
    
//     numbers.forEach(number =>
//         number > value ? filteredNumbers.push(number) : null);

//   // Change code above this line
//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

console.log('//////////////////////////////////////////////////');

function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Change code below this line

//   for (let i = 0; i < firstArray.length; i += 1) {
//     if (secondArray.includes(firstArray[i])) {
//       commonElements.push(firstArray[i]);
//     }
//   }
    
    firstArray.forEach((element) => {
        if (secondArray.includes(element)) {
            commonElements.push(element)
        }
    });

  return commonElements;
  // Change code above this line
}

console.log(getCommonElements([1, 2, 3], [2, 4]));
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

console.log('//////////////////////////////////////////////////');

const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

console.log(calculateTotalPrice(5, 100));
console.log(calculateTotalPrice(8, 60));
console.log(calculateTotalPrice(3, 400));
console.log(calculateTotalPrice(13, 13));

console.log('//////////////////////////////////////////////////');

const filterArray = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  return filteredNumbers;
}

console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));

console.log('//////////////////////////////////////////////////');

function changeEven(numbers, value) {
  // Change code below this line
    const newChangeEven = [];

    numbers.forEach(number =>
        number % 2 === 0
            ? newChangeEven.push(number + value)
            : newChangeEven.push(number));
    
    return newChangeEven;
  }

console.log(changeEven([1, 2, 3, 4, 5], 10));
console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
console.log(changeEven([17, 24, 68, 31, 42], 100));
console.log(changeEven([44, 13, 81, 92, 36, 54], 100));

console.log('//////////////////////////////////////////////////');

const planets = ["Earth", "Mars", "Venus", "Jupiter"];
const planetsLengths = planets.map(element => element.length);
console.log(planetsLengths);

console.log('//////////////////////////////////////////////////');

const inBooks = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const titles = inBooks.map(element => element.title);
console.log(titles);

console.log('//////////////////////////////////////////////////');

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction", "mysticism"],
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism", "adventure"],
    rating: 7.94,
  },
  {
    title: "Enemy of God",
    author: "Bernard Cornwell",
    rating: 8.67
  },
];

const genres = books.flatMap(element => element.genres);
console.log(genres);
// //////////////////////////////////////////////////////
const allGenres = books.flatMap(book => book.genres);
const uniqueGenres = allGenres.filter((genres, index, array) => array.indexOf(genres) === index);

console.log(allGenres);
console.log(uniqueGenres);
// //////////////////////////////////////////////////////
const MIN_RATING = 8;
const AUTHOR = "Robert Sheckley";

const topRatedBooks = books => books.filter(book => book.rating >= MIN_RATING );
const booksByAuthor = books => books.filter(book => book.author === AUTHOR);

console.table(topRatedBooks(books));
console.table(booksByAuthor(books));
// //////////////////////////////////////////////////////
const BOOK_TITLE = 'The Dream of a Ridiculous Man';

const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
const bookByAuthor = books.find(book => book.author === AUTHOR);

console.log(bookWithTitle);
console.log(bookByAuthor);
// //////////////////////////////////////////////////////
const sortedByAuthorName = [...books].sort((prevAuthor, nextAuthor) => 
    prevAuthor.author.localeCompare(nextAuthor.author));

const sortedByReversedAuthorName = [...books].sort((prevAuthor, nextAuthor) => 
    nextAuthor.author.localeCompare(prevAuthor.author));

console.table(sortedByAuthorName);
console.table(sortedByReversedAuthorName);

const sortedByAscendingRating = [...books].sort((currentNumber, nextNumber) =>
    currentNumber.rating - nextNumber.rating);

const sortedByDescentingRating = [...books].sort((currentNumber, nextNumber) =>
    nextNumber.rating - currentNumber.rating);

console.log(sortedByAscendingRating);
console.log(sortedByDescentingRating);
// //////////////////////////////////////////////////////
const MIN_BOOK_RATING = 8;

const names = [...books]
    .sort((prevAuthor, nextAuthor) => prevAuthor.author.localeCompare(nextAuthor.author))
    .filter(({ rating }) => rating > MIN_BOOK_RATING)
    .map(name => name.author);
console.log(names);

console.log('//////////////////////////////////////////////////');

const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

const getUserNames = users => users.map(user => user.name);
console.log(getUserNames(users));
// ////////////////////////////////////////////////////////
const getUserEmails = users => users.map(user => user.email);
console.log(getUserEmails);
// ////////////////////////////////////////////////////////
const getUsersWithEyeColor = (users, color) => 
    users.filter(colors => colors.eyeColor === color);

console.log(getUsersWithEyeColor(users, 'blue'));
console.log(getUsersWithEyeColor(users, 'green'));
console.log(getUsersWithEyeColor(users, 'brown'));
// ////////////////////////////////////////////////////////
const getUsersWithAge = (users, minAge, maxAge) => 
    users.filter(({ age }) => age >= minAge && age <= maxAge);

console.table(getUsersWithAge(users, 20, 30));
console.table(getUsersWithAge(users, 30, 40));
console.log(getUsersWithAge(users, 80, 100));
// ////////////////////////////////////////////////////////
const getUsersWithFriend = (users, friendName) =>
    users.filter(({ friends }) => friends.includes(friendName));

console.table(getUsersWithFriend(users, "Briana Decker"));
console.table(getUsersWithFriend(users, "Goldie Gentry"));
console.log(getUsersWithFriend(users, "Adrian Cross"));
// ////////////////////////////////////////////////////////
const getFriends = users =>
    users.flatMap(({friends}) => friends)
        .filter((frend, index, array) => array.indexOf(frend) === index);

console.table(getFriends(users));
// ////////////////////////////////////////////////////////
const getActiveUsers = users => users.filter(user => user.isActive);
console.table(getActiveUsers(users));
// ////////////////////////////////////////////////////////
const getInactiveUsers = users => users.filter(user => !user.isActive);
console.table(getInactiveUsers(users));
// ////////////////////////////////////////////////////////
const getUserWithEmail = (users, email) =>
    users.find(mail => mail.email === email);

console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
console.log(getUserWithEmail(users, 'elmahead@omatom.com'));
console.log(getUserWithEmail(users, 'blackburndotson@furnigeer.com'));
console.log(getUserWithEmail(users, 'gadarandrii@kog.com'))
// ////////////////////////////////////////////////////////
const isEveryUserActive = users => users.every(user => user.isActive);
console.log(isEveryUserActive(users));
// ////////////////////////////////////////////////////////
const isAnyUserActive = users => users.some(user => user.isActive);
console.log(isAnyUserActive(users));
// ////////////////////////////////////////////////////////
const calculateTotalBalance = users => users.reduce((acc, { balance }) =>
    acc += balance, 0);
console.log(calculateTotalBalance(users));
// ////////////////////////////////////////////////////////
const getTotalFriendCount = users => users.reduce((acc, { friends }) =>
    acc += friends.length, 0);
console.log(getTotalFriendCount(users));
// ////////////////////////////////////////////////////////
const sortByAscendingBalance = users => [...users].sort((a, b) =>
    a.balance - b.balance);
console.table(sortByAscendingBalance(users));
// ////////////////////////////////////////////////////////
const sortByDescendingFriendCount = users => [...users].sort((a, b) =>
    b.friends.length - a.friends.length);
console.table(sortByDescendingFriendCount(users));
// ////////////////////////////////////////////////////////
const sortByName = users => [...users].sort((a, b) =>
    a.name.localeCompare(b.name));
console.log(sortByName(users));
// ////////////////////////////////////////////////////////
const getNamesSortedByFriendCount = users => [...users]
    .sort((a, b) => a.friends.length - b.friends.length)
    .flatMap(user => user.name);
console.log(getNamesSortedByFriendCount(users));
// ////////////////////////////////////////////////////////
const getSortedFriends = users => users
    .flatMap(friend => friend.friends)
    .filter((friend, index, array) => array.indexOf(friend) === index)
    .sort((a, b) => a.localeCompare(b));
console.log(getSortedFriends(users));
// ////////////////////////////////////////////////////////
const getTotalBalanceByGender = (users, gender) => users
    .filter(user => user.gender === gender)
    .map(user => user.balance)
    .reduce((acc, balance) => acc += balance);

console.log(getTotalBalanceByGender(users, 'male'));
console.log(getTotalBalanceByGender(users, 'female'));

console.log('//////////////////////////////////////////////////');

const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

const evenNumbers = numbers.filter(number => number % 2 === 0);
const oddNumbers = numbers.filter(number => number % 2);

console.log(evenNumbers);
console.log(oddNumbers);

console.log('//////////////////////////////////////////////////');

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];

const eachElementInFirstIsEven = firstArray.every(number => number % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every(number => number % 2);

const eachElementInSecondIsEven = secondArray.every(number => number % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every(number => number % 2);

const eachElementInThirdIsEven = thirdArray.every(number => number % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every(number => number % 2);

console.log(eachElementInFirstIsEven);
console.log(eachElementInFirstIsOdd);
console.log(eachElementInSecondIsEven);
console.log(eachElementInSecondIsOdd);
console.log(eachElementInThirdIsEven);
console.log(eachElementInThirdIsOdd);
// ////////////////////////////////////////////////////////
const anyElementInFirstIsEven = firstArray.some(number => number % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some(number => number % 2);

const anyElementInSecondIsEven = secondArray.some(number => number % 2 === 0);
const anyElementInSecondIsOdd = secondArray.some(number => number % 2);

const anyElementInThirdIsEven = thirdArray.some(number => number % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some(number => number % 2);

console.log(anyElementInFirstIsEven);
console.log(anyElementInFirstIsOdd);
console.log(anyElementInSecondIsEven);
console.log(anyElementInSecondIsOdd);
console.log(anyElementInThirdIsEven);
console.log(anyElementInThirdIsOdd);

console.log('//////////////////////////////////////////////////');

const player = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244
};
const playtimes = Object.values(player); // [1270, 468, 710, 244]

const totalPlayTime = playtimes.reduce((acc, number) => acc += number, 0);

const averagePlayTime = totalPlayTime / playtimes.length;

console.log(totalPlayTime);
console.log(averagePlayTime);

console.log('//////////////////////////////////////////////////');

const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];

const totalAveragePlaytimePerGame = players =>
    players.reduce((acc, { playtime, gamesPlayed }) => acc += (playtime / gamesPlayed), 0);

console.log(totalAveragePlaytimePerGame(players));

console.log('//////////////////////////////////////////////////');

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
  "Howard Lovecraft",
];

const ascendingReleaseDate =
    [...releaseDates].sort((currentNumber, nextNumber) => currentNumber - nextNumber);
console.log(ascendingReleaseDate);

const alphabeticalAuthors = [...authors].sort((prevAuthor, nextAuthor) =>
    prevAuthor > nextAuthor ? 1 : -1); // prevAuthor.localeCompare(nextAuthor)
console.log(alphabeticalAuthors);
// ////////////////////////////////////////////////////////
const ascendingReleaseDates =
    [...releaseDates].sort((currentNumber, nextNumber) => currentNumber - nextNumber);;
console.log(ascendingReleaseDates);

const descendingReleaseDates = 
    [...releaseDates].sort((currentNumber, nextNumber) => nextNumber - currentNumber);;
console.log(descendingReleaseDates);
// ////////////////////////////////////////////////////////
const authorsInAlphabetOrder = [...authors].sort((prevAuthor, nextAuthor) =>
    prevAuthor.localeCompare(nextAuthor));
console.log(authorsInAlphabetOrder);

const authorsInReversedOrder = [...authors].sort((prevAuthor, nextAuthor) =>
    nextAuthor.localeCompare(prevAuthor));
console.log(authorsInReversedOrder);

console.log('//////////////////////////////////////////////////');