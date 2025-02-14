

function getNumberExplanation(number) {
    if (number === 666) {
        return "devil number";
    } else if (number === 42) {
        return "answer for everything";
    } else if (number === 7) {
        return "prime number";
    } else {
        return "ust a number";
    }
}

console.log(getNumberExplanation(666));
