function joinNumbersFromRange(start, end) {
    let result = '';
    for (i = start; i <= end; i++) {
        result += i;
    }
    console.log(result);
}

joinNumbersFromRange(1, 10);