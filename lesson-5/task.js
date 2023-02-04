const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

const keys = Object.keys(user);

for (const key in user) {
    console.log(`${key} : ${user[key]}`);
}

console.log('--------------------------');

for (const key of keys) {
    console.log(`${key} : ${user[key]}`);
}

console.log('--------------------------');

// ////// task-2

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

const values = Object.values(salaries)
// console.log(values)
let sum = 0;

for (const value of values) {
    sum += value;
}

console.log(sum);
console.log('--------------------------');

// ////// task-3

const stones = [
  { name: 'Смарагд', price: 1300, quantity: 4 },
  { name: 'Діамант', price: 2700, quantity: 3 },
  { name: 'Сапфір', price: 400, quantity: 7 },
  { name: 'Щебінь', price: 200, quantity: 2 },
];

function calcTotalPrice(stones, stoneName) {
    let sum = 0;

    for (const stone of stones) {

        if (stoneName === stone.name) {
            sum = Number(stone.price) * Number(stone.quantity)
            return `${stoneName} = ${sum}`
        }
    }
}

console.log(calcTotalPrice(stones, 'Смарагд'));
console.log(calcTotalPrice(stones, 'Діамант'));
console.log(calcTotalPrice(stones, 'Сапфір'));
console.log(calcTotalPrice(stones, 'Щебінь'));
console.log('--------------------------');

// ////// task-4

/// 4 - Напиши скрипт управління особистим кабінетом інтернет банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.
/// Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

/*
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};
  
  /*
   * Кожна транзакція це об'єкт із властивостями: id, type та amount
   */
  
  const account = {
    // Поточний баланс рахунку
    balance: 0,
  
    // Історія транзакцій
    transactions: [],

    currentId: 0,
  
    /*
     * Метод створює та повертає об'єкт транзакції.
     * Приймає суму та тип транзакції.
     */
    createTransaction(amount, type) {
        return {
            amount,
            type,
            id: this.generateId()
        };
    },
  
    /*
     * Метод, що відповідає за додавання суми до балансу.
     * Приймає суму транзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його до історії транзакцій
     */
    deposit(amount) {
        const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
        this.addToHistory(transaction);
        this.balance += amount;
    },
  
    /*
     * Метод, що відповідає за зняття суми з балансу.
     * Приймає суму транзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його до історії транзакцій.
     *
     * Якщо amount більше ніж поточний баланс, виводь повідомлення
     * про те, що зняття такої суми не можливе, недостатньо коштів.
     */
    withdraw(amount) {
        if (amount > this.balance) {
            this.displayError('Недостатньо коштів!');
            return;
        }
        const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
        this.addToHistory(transaction);
        this.balance -= amount;
    },
  
    /*
     * Метод повертає поточний баланс
     */
    getBalance() {
        return this.balance;
    },
  
    /*
     * Метод шукає та повертає об'єкт транзакції по id
     */
    getTransactionDetails(id) {
        for (const row of this.transactions) {
            if (row.id === id) {
                return row;
            }
        }
    },
  
    /*
     * Метод повертає кількість коштів
     * певного типу транзакції з усієї історії транзакцій
     */
    getTransactionTotal(type) {
        let result = 0;
        for (const row of this.transactions) {
            result += row.type === type ? row.amount : 0;
        }
        return result;
    },

    /*
     * Метод додає транзакцію до історії
     */
    addToHistory(transaction) {
        this.transactions.push(transaction);
    },

    generateId() {
        return this.currentId + 1;
    },

    displayError(message) {
        console.log(message);
    }
  };

  account.deposit(500);
  console.log(1);
  account.withdraw(250);
  console.log(2);
  account.withdraw(1000);
  console.log(3);
  console.log(account.getBalance());
  console.log(account.getTransactionTotal(Transaction.DEPOSIT));
  console.log(account.getTransactionTotal(Transaction.WITHDRAW));
console.log(account.getTransactionDetails(1));
  
console.log('--------------------------');

function multiply(firstNumber, secondNumber, ...otherArgs) {
  console.log(firstNumber); // Значення першого аргументу
  console.log(secondNumber); // Значення другого аргументу
  console.log(otherArgs); // Масив інших аргументів
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);