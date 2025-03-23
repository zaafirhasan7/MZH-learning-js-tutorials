function addNumbers(a = 0, b = 0) {
    let sum = a + b;
    return sum;
}
console.log(addNumbers());
 
function countdown(n) {
    while (n > 0) {
        console.log(n);
        n--;
    }  
}
// countdown(10);
 
function getLastItem(arr) {
    return arr[arr.length - 1];
}
 console.log(getLastItem([1,2,3,21,4,5,6,1,6,79,63,73,'73']));
 
function isEven(n) {
    if (n % 2 === 0) {

        return true;

    }
    return false;
}
 

console.log(isEven(3));

function appendToString(char, str = "") {
    str += char;
    return str;
}
var firstWord = appendToString(' ','good');
var secondWord = appendToString('r','ca');
console.log(firstWord + secondWord);

var words = ["rose", "lavender", "daisy", "dandelion" ]
function pickWord () {
    var ranIdx = Math.floor(Math.random() * words.length);
    return words[ranIdx]; 
}

console.log(pickWord());
