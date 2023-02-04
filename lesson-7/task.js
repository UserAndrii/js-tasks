function createProduct(obj, callback) {
    const product = {
        ...obj,
        id: Date.now(),
    } 

    callback(product);
}

function logProduct(product) {
    console.table(product);
}

function logTotalPrice(product) {
    console.log(product.price * product.quantity);
}

createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);
createProduct({ name: '🍎', price: 30, quantity: 3 }, logTotalPrice);

console.log('--------------------------------------------------------')

// const TRANSACTION_LIMIT = 1000;
// const account = {
//   username: 'Jacob',
//   balance: 400,

//   /// Метод withdraw викликає onError якщо amount більше TRANSACTION_LIMIT 
//   // або this.balance, і onSuccess в іншому випадку.

//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount > this.balance) {
//       onError(`Amount can't exceed account balance of ${this.balance} credits`);
//     } else {
//       this.balance -= amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
//   /// Метод deposit викликає onError якщо amount більше TRANSACTION_LIMIT 
//   // або менше або дорівнює нулю, і onSuccess в іншому випадку.

//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount <= 0) {
//       onError(`Amount must be more than 0 credits`);
//     } else {
//       this.balance += amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
// };

// function handleSuccess(message) {
//   console.log(`✅ Success! ${message}`);
// }
// function handleError(message) {
//   console.log(`❌ Error! ${message}`);
// }

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

console.log('--------------------------------------------------------')

// function each(array, callback) {
//   const newArr = [];

//   array.forEach(element => {
//     newArr.push(callback(element));
//   });

//   return newArr;
// }

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   }),
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   }),
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   }),
// );

console.log('--------------------------------------------------------')

// function createProducts(partialProduct, callback) {
//   const product = { id: Date.now(), ...partialProduct };
//   callback(product);
// }

const createProducts = (partialProduct, callback) => {
  const product = { id: Date.now(), ...partialProduct };
  callback(product);
}

// function logProducts(product) {
//   console.log(product);
// }

const logProducts = product => console.log(product);

// function logTotalPrices(product) {
//   console.log(product.price * product.quantity);
// }

const logTotalPrices = product => console.log(product.price * product.quantity);

createProducts({ name: '🍎', price: 30, quantity: 3 }, logProducts);
createProducts({ name: '🍋', price: 20, quantity: 5 }, logTotalPrices);

console.log('--------------------------------------------------------');

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 400,

//   withdraw: (amount, onSuccess, onError) => {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount > this.balance) {
//       onError(`Amount can't exceed account balance of ${this.balance} credits`);
//     } else {
//       this.balance -= amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },

//   deposit: (amount, onSuccess, onError) => {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount <= 0) {
//       onError(`Amount must be more than 0 credits`);
//     } else {
//       this.balance += amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
// };

// const handleSuccess = (message) => {
//   console.log(`✅ Success! ${message}`);
// }
// const handleError = (message) => {
//   console.log(`❌ Error! ${message}`);
// }

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

console.log('--------------------------------------------------------');

const each = (array, callback) => {
  const newArr = [];
  for (const el of array) {
    newArr.push(callback(el));
  }
  return newArr;
}

console.log(each([64, 49, 36, 25, 16], value => value * 2));
console.log(each([64, 49, 36, 25, 16], value => value - 10));
console.log(each([64, 49, 36, 25, 16], value => Math.sqrt(value))); // Math.sqrt - повертає квадратний корінь числа
console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.ceil(value))); // Math.ceil - Округлює аргумент до найближчого цілого.
console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.floor(value))); //Math.floor()метод завжди округляє вниз і повертає найбільше ціле число, яке менше або дорівнює заданому числу. 

console.log('--------------------------------------------------------');

// function logItems(items) {
//   console.log(items);
//   for (let i = 0; i < items.length; i += 1) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }

const logItems = items => {
  console.log(items);
  items.forEach((element, index) => console.log(`${index + 1} - ${element}`));

  // for (let i = 0; i < items.length; i += 1) {
  //   console.log(`${i + 1} - ${items[i]}`);
  // };
}

console.log(logItems(['Mango', 'Poly', 'Ajax']));
console.log(logItems(['🍎', '🍇', '🍑', '🍌', '🍋']));

console.log('--------------------------------------------------------');

// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

const printContactsInfo = ({ names, phones }) => {
  const nameList = names.split(',');
  const phoneList = phones.split(',');

  nameList.forEach((element, index) =>
    console.log(`${element}: ${phoneList[index]}`));
}

printContactsInfo({
  names: 'Jacob,William,Solomon,Artemis',
  phones: '89001234567,89001112233,890055566377,890055566300',
});

console.log('--------------------------------------------------------');

// function calсulateAverage(...args) {
//   let total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total / args.length;
// }

const calсulateAverage = (...args) => {
  // let total = 0;
  // args.forEach(element => total += element);
  // return total / args.length;

  return args.reduce(((acc, value) => acc += value), 0)/ args.length;
}

console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
console.log(calсulateAverage(14, 8, 2)); // 8
console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2

console.log('--------------------------------------------------------');
