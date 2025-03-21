// even and odd number
// 2, 4, 6, 10, 100
// 1, 3, 5, 7
// if num/2 produce remainder 0 {even number}
// if num/2 produce remainder 1 {odd number}
function evenOrOdd (num) {
    if (num%2 === 0) {
        console.log(`${num} is an even number`);
    } else {
        console.log(`${num} is an odd number`);
    };
}

// evenOrOdd(43429239239);

// a function to find larger number
function maxOfTwo (a, b) {
    if (a > b) {
        return `${a} is the larger one`;
    }
    return `${b} is the larger one`;
}
console.log(maxOfTwo(15, 32));
