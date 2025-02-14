//1 
calculateRectangleArea = (width, height) => {
  return width * height
}
  
console.log(calculateRectangleArea(3, 5));

console.log(calculateRectangleArea(5, 5));

//2
const message ='Глобальная сообщение';

showMessage =() => {
  const message = 'Локальное сообщение';
  console.log(message);
}

showMessage();

console.log(message);

//3
greet = (name = 'Гость') => {
  return `Привет, ${name}!`;
}

console.log(greet());

console.log(greet('Алиса'));

//4

sum = (a, b, ...rest) => {
  let newSum = 0

  for (let i = 0; i < rest.length; i++) {
    newSum += rest[i]
  }

  return a + b + newSum
}

console.log(sum(1, 2, 3, 4 , 5 , 6));


