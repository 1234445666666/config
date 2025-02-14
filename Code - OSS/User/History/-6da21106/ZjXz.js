//1
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.push(11);
console.log(numbers);

numbers.unshift(0);
console.log(numbers);

numbers.pop();
console.log(numbers);

numbers.shift();
console.log(numbers);

//2

const evenNumbers = [2, 4, 6, 8, 10];

const oddNumbers = [1, 3, 5, 7, 9];

const allNumbers = oddNumbers.concat(evenNumbers);

let join1 = allNumbers.join("-");

console.log(join1);

//3
const squareNumbers = numbers.map(function (number) {
  return number * number;
});

console.log(squareNumbers);

const largeNumber = squareNumbers.filter(function (squareNumbers) {
  return squareNumbers > 50;
});

console.log(largeNumber);

//4

let pasha = {
  name: "Pasha",
  id: 1,
};

let petya = {
  name: "Petya",
  id: 2,
};

let vasya = {
  name: "Vasya",
  id: 3,
};
const users = [pasha, petya, vasya];

const user = users.find(function (user) {
  return user.id === 3;
});

const userName = users.every(function (user) {
  return user.name == "Alica";
});

console.log(userName);

console.log(user);

//5

let sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
});

console.log(sum);

const fruits = ["apple", "banana", "orange", "grape" , 'apple'];

let resultFruits = fruits.reduce(function (accumulator, fruit) {
  accumulator[fruit] = (accumulator[fruit] || 0) + 1;
  return accumulator;
}, {});

console.log(resultFruits);

//6

const unsortedNumbers = [4, 54, 53, 676, 23, 99];

const sortedNumbers = unsortedNumbers.sort(function (a, b) {
  return b - a;
});

console.log(sortedNumbers);

const names = ["Alica", "Bob", "Carol" , 'Alex' , 'Pasha'];

const sortedNames = names.sort(function (a, b) {
  return a.length - b.length;})



console.log(sortedNames);





