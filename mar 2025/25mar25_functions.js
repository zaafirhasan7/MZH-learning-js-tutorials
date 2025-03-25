function subtract(a, b) {
    return a-b; 
};
 
function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1); // Zaafir // CALL
}
// console.log(capitalizeFirstLetter("zaafir")); // str.slice(1) => aafir

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};
// console.log(sumArray([1, 5, 9]));

function isPositive(num) {
    if (num > 0) {
        return true;
    } else {
        return false;
    }
}
// console.log(isPositive(7));
 
function concatenateStrings(str1, str2) {
    return str1 + str2;
};
// console.log(concatenateStrings("hello ", "zaafir"));


// var test = "abcdefghijklmnopqrstuvwxyz";
// console.log(test.length-1);

// var x = test.slice(2); // last index/ end index is not inclusive
// console.log(x);


var numbers = [1,2,4,5,6]; // => 18
function addingNumbersInArray (arr) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
        total = numbers[i] + total;
    };
    return total;
};
// console.log(addingNumbersInArray(numbers));

function sumDigits(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

console.log(sumDigits(252)); // 2+5+2 = 9


// 252/10 = 25.2 ~ 25
// 25/10 = 2.5 ~ 2
// 2/10 = 0.2 ~ 0

