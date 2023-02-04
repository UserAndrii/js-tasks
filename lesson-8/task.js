const cars = [
  { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
  { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
  { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
  { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
  { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
  { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
  { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
  { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
  { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
  { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false }
];

const getModels = cars => cars.map(car => car.model);
console.log(getModels(cars));

const makeCarsWithDiscount = (cars, discount) =>
    cars.map(car => ({ ...car, price: car.price - car.price * discount }));
console.log(makeCarsWithDiscount(cars, 0.2));
console.log(makeCarsWithDiscount(cars, 0.4));

const filterByPrice = (cars, threshold) => cars.filter(car => car.price < threshold);
console.log(filterByPrice(cars, 30000));
console.log(filterByPrice(cars, 25000));

const getCarsWithDiscount = cars => cars.filter(car => car.onSale);
console.log(getCarsWithDiscount(cars));

const getCarsWithType = (cars, type) => cars.filter(car => car.type === type);
console.log(getCarsWithType(cars, 'suv'));
console.log(getCarsWithType(cars, 'sedan'));

const getCarByModel = (cars, model) => cars.find(car => car.model === model);
console.log(getCarByModel(cars, 'F-150'));
console.log(getCarByModel(cars, 'CX-9'));

const sortByAscendingAmount = cars => [...cars].sort((a,b) => a.amount - b.amount);
console.log(sortByAscendingAmount(cars));

const sortByDescendingPrices = cars => [...cars].sort((a, b) => b.price - a.price);
console.log(sortByDescendingPrices(cars));

const sortByModel = (cars, order) => [...cars].sort((prevCar, nextCar) => {
    if(order === 'asc') {
        return prevCar.model.localeCompare(nextCar.model);
    } else if (order === 'desc') {
        return nextCar.model.localeCompare(prevCar.model);
    }
    return null;
});
console.log(sortByModel(cars, 'asc'));
console.log(sortByModel(cars, 'desc'));

const getTotalAmount = cars => cars.reduce((acc, car) => acc += car.amount, 0);
console.log(getTotalAmount(cars));

const getModelsOnSale = cars => cars.filter(car => car.onSale).map(car => car.model);
console.log(getModelsOnSale(cars));

const getSortedCarsOnSale = cars => cars.filter(car => car.onSale).sort((a, b) => a.price - b.price);
console.table(getSortedCarsOnSale(cars));