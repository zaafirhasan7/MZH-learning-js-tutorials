// var at a local scope
function num() {
var two = 2;
console.log(two);
};

console.log(two);
num();

// var at block scope
{
var three = 3;
};
console.log(three);
function logThree() {
console.log(three);
}

{
console.log(three);
};
logThree();


// let scope in block scope and cannot be accessible

// example 1:
{
let zoo = "Giraffe";
console.log(zoo);
};
console.log(zoo);


// example 2:
function logNum() {
if (1 < 2) {
let one = 1;
console.log(`This ${one} is scoped within the if block`);
};
console.log(`This ${one} is scoped within the function
block`);
};
logNum();


// this is when we replace the let with var
function logNum() {
if (1 < 2) {
var one = 1;
console.log(`This ${one} is scoped within the if block`);
}
console.log(`This ${one} is scoped within the function
block`);
}
logNum();