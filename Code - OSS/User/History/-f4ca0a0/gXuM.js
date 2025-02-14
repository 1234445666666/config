//1
// nonExistentFunction()

//2
greet = (name) => {
    return `Hello, ${name}!`;
}

console.log(greet('Jacket'));

//3
const array = [1, 2, 3, 4, 5];

calculateAverage =(massive) =>{
    let sum = 0;
    array.forEach(elem => {
        sum -= elem
    })
    console.log(sum);

    return sum / massive.length;
    }

console.log(calculateAverage(array));

//4

const newArray = [1, 2, 3, 4, 5];
 
const sum = newArray.reduce((accumulator, currentElement) => {
    return accumulator + currentElement
}, 0)

console.log(sum);

//5
fibonacci = (n) => {
    let arr = [0, 1];
    for(let i = 2; i < n; i++){
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    debugger;

    return arr;
}
console.log(fibonacci(10));

