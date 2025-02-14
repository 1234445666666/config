//1
let person = {
    firstName:'pasha',
    lastName:'karpov',
};

person.age = 17;

delete person.lastName;
console.log(person);

//2
console.log(person.age)
console.log(person['age']);

console.log('middleNAme' in person); 

// //3 
// for(let key in person){
//     console.log(key, person[key]);
//     // console.log(`свойство объекта: ${key}, значение: ${person[key]}` );

// }

person.greet = function(){
    console.log('привет')
}

//3 
for(let key in person){
    console.log(key, person[key]);
    // console.log(`свойство объекта: ${key}, значение: ${person[key]}` );

}







// Цикл for...in:
// Напишите цикл for...in, который выводит в консоль все свойства объекта person и их значения.
// Добавьте в объект метод greet, который выводит приветствие. Убедитесь, что метод тоже перебирается в for...in.

// Передача по ссылке и копирование:
// Создайте объект car, скопируйте его в переменную myCar и измените одно из свойств через myCar. Проверьте, что свойство изменилось и в car.
// Создайте поверхностную копию объекта car с помощью Object.assign или оператора .... Измените свойство в копии и убедитесь, что оно не затронуло исходный объект (при условии, что свойство не является вложенным объектом).

// Глубокое копирование:
// Создайте объект book с вложенным объектом author.
// Реализуйте функцию deepClone, которая рекурсивно копирует все свойства.
// Проверьте, что изменения во вложенном объекте после копирования не влияют на исходный объект.
