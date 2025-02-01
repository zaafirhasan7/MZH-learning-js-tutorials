// greater than
var height = 65;
var heightRestriction = 60
console.log (height > heightRestriction);// true

var height = 60
var heightRestriction = 60
console.log (height > heightRestriction)// false

// greater or equal to 
var height = 60
var heightRestriction = 60
console.log (height >= heightRestriction)

// less than
var height = 60
var heightRestriction = 48
console.log(height < heightRestriction)

// less or equal to
var height = 48
var heightRestriction = 48
console.log (height <= heightRestriction);

//triple equal to
var mySecretNumber = 5;
var TVmanGuess = 3;
console.log (mySecretNumber === TVmanGuess); // false

var cameramanGuess = 7;
console.log (mySecretNumber === cameramanGuess); // false

var speakermanGuess = 5;
console.log (mySecretNumber === speakermanGuess) // true

// double equals
var stringNumber = "5";
var actualNumber = 5;
console.log (stringNumber === actualNumber);// false

console.log (stringNumber == actualNumber);// true

console.log (0 == false);// true

console.log ("false" == true);// false 

// Cinema entering conditions
var age = 14;
var accompanied = false;
if ((age > 13 || (age <= 13 && accompanied == true))){
    console.log("Yeppy! I can enter the cinema!")
} else {
    console.log("Noooo! I can't enter the cinema!")
}
