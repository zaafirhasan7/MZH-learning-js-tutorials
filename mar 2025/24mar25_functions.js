function multiply(a, b) {
    return a * b;
}
// console.log(multiply(3,6));

function reverseString(str) {
    // return str.split("").reverse().join;
    return str.split("").reverse().join("");
}
// console.log(reverseString("hello"));

// "hello"
// [h,e,l,l,o]
// [o,l,l,e,h]
// 'olleh' 

function findMax(arr) {
    let max = arr[0]; 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// console.log(findMax([-3,-2,-8,-16,-1]));
// console.log(findMax([3,2,8,1,1]));

// [3,2,8,1,1] => 8

 
function greet(name) {
    console.log("Hello " + name);
};

// greet('zaafir hasan')
 
function calculateArea(width, height) {
    if (width <= 0 || height <= 0) {
        return "Invalid dimensions";
    }
    return width * height;
}
console.log(calculateArea(8,-5));

