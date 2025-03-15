// Function

// {
//     // task 1 - 1
//     // task 1 - 2
//     // task 1 - 3
//     // 
//     //
// }

// we want to add three numbers
// give with return
function add(num1, y, z){
    var total = num1+y+z; // 2+2+5 = 9
    return total; // type is number (int or flot)
};

var num1 = 2;
var num2 = 2;
var num3 = 5;

// take/receive
var total = add(num1, num2, num3); // 9
console.log(total);


// 7.1, 3.2, 9.3

var newTotal = add(7.1, 3.2, 9.3);
console.log(newTotal);


function printAdd(x,y,z){
    console.log(x+y+z); // doing something
}

var x = printAdd(12, 24, 12);
console.log(x);

function multiplyByTwo(x) {
    var multipliedByTwo = x * 2;
    return multipliedByTwo;
}
var output = multiplyByTwo(3);
console.log(output);

