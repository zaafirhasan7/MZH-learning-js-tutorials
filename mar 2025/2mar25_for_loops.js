// challenge 2: random string genarator

// cdjdj
// alphabet[2]

// randomString ="adfef"
// randomString += alphabet[randIdx] // a
// randomString += alphabet[randIdx] // ad
// randomString += alphabet[randIdx] // adf 
// randomString += alphabet[randIdx] // adfe
// randomString += alphabet[randIdx] // adfef

// console.log (randomString) // adfef

var alphabet = "abcdefghijklmnopqrstuvwxyz";

var randomString = '';
var i = 0; // counter
while (i < 5) {
    var randIdx = Math.floor(Math.random() * alphabet.length); // 0-25 -> 3
    randomString += alphabet[randIdx]; // "abcf"+"d"= "abcfd"
    i++; // 5
};
console.log(randomString); // "abcfd", "zsfaf"






