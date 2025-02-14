export function getSum(a, b) {
    return a + b;
}

export function castBoolean(value) {
    return Boolean(value);
}

export function capitalize(text , i) {
    return text.slice(0, i) + text[i].toUpperCase() + text.slice(i + 1);
}

export function countCapitalLetters(text) {
    let count = 0;
    for (let char of text) {
        if (char === char.toUpperCase() && char !== ' ') {
            count++;
        }
    }
    return count;
}