export function getSum(a, b) {
    return a + b;
}

export function castBoolean(value) {
    return Boolean(value);
}

export function capitalize(text , i) {
    return text.slice(0, i) + text.slice(i, i + 1).toUpperCase() + text.slice(i + 1);

}

export function countCapitalLetters(text) {
    zaglavnye = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] >= 'A' && text[i] <= 'Z') {
            zaglavnye++;
        }
    }
    return zaglavnye;
}
 


