function joinNumbersFromRange(start, end) {
    let result = '';
    let kavichki = '';
    for (i = start; i <= end; i++) {
        result += i;
        if (i < end) {
            kavichki += '';
        }}
    console.log(kavichki + result);
}

joinNumbersFromRange(1, 10);