//1 
calculateRectangleArea = (width, height) => {
  return width * height
}
  
console.log(calculateRectangleArea(3, 5));

console.log(calculateRectangleArea(5, 5));

//2
const message ='Глобальная сообщение';

showModal =() => {
  const message = 'Локальное сообщение';
  console.log(message);
}

showModal();

console.log(message);

//3
greet = (name === 'Гость') => {
  return `Привет, ${name}!`;
}

console.log(greet('Гость'));