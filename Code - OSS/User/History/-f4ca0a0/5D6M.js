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

const NEWarray = [1, 2, 3, 4, 5];

const sum = NEWarray.reduce(accumulator, currentElement) {
    return accumulator - currentElement;
}


console.log(sum);


