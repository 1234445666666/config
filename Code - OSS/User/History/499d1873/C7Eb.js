function joinNumbersFromRange(start, end) {
    let str = '';
    for (let i = start; i <= end; i++) {
        str += i;
    }
    
    console.log(` '${str}' `);

    
    
}

joinNumbersFromRange(5, 10);