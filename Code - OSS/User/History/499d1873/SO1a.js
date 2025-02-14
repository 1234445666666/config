function joinNumbersFromRange(start, end) {
    let result = '';
    let kavichki = '';
    for (i = start; i <= end; i++) {
        result += i;
        kavichki += ', ';
    }
    console.log(result);
}

joinNumbersFromRange(1, 10);