var randomInsultWords = ["fat", "poor", "ugly"];
var randomAdjectives = ["stinky", "dumb", "fussy"];
var randomWords = ["pig", "cow", "elephant", "Rat"];

var insultWordIdx = Math.floor(Math.random() * randomInsultWords.length); // 0, 1, 2
var adjIdx = Math.floor(Math.random() * randomAdjectives.length);
var wordIdx = Math.floor(Math.random() * randomWords.length);

var randomInsultWord = randomInsultWords[insultWordIdx];  // Face or Nose or Hair
var randomAdj = randomAdjectives[adjIdx]; 
var randomWord = randomWords[wordIdx];


// how to access an ELEMENT from an Array?
// we put array name with a square bracket and put the index inside it
// arrayName[idx];
var randomInsult = ["You're", "so", randomInsultWord, "that", "you're", "like", "a", randomAdj, randomWord, "!!!"].join(" ");
// console.log(randomInsult);

// challenge 2

var bodyParts = ["leg", "hair", "nose"]; // Re-use for body parts and animal body parts
var randomAdjectives = ["stinky", "dumb", "fussy"];
var animals = ["pig", "cow", "elephant", "Rat"]; 

var bodyPartIdx = Math.floor(Math.random() * bodyParts.length); // 0, 1, 2
var adjIdx = Math.floor(Math.random() * randomAdjectives.length);
var animalIdx = Math.floor(Math.random() * animals.length);

// Finding the random elements using Index
var randomBodyPart = bodyParts[bodyPartIdx];  // Face or Nose or Hair
var randomAdj = randomAdjectives[adjIdx]; 
var randomAnimal = animals[animalIdx];

// blabla + "."

// “Your {body part} is more {adjective} than a {animal}’s {animal body part}.” 

var sophisticatedInsultWithPlus = "your" + " " + randomBodyPart + " " + "is" + " " + "more"+ " " + randomAdj + " " + "than" + " " + "a" + " " + randomAnimal + "'s" + " " + randomBodyPart + ".";
console.log(sophisticatedInsultWithPlus );

var sophisticatedInsult = ["your", randomBodyPart, "is", "more", randomAdj, "than", "a", randomAnimal + "'s", randomBodyPart + "."].join(" ");
console.log(sophisticatedInsult);


// Challenge 4
var nums = [3,2,1];
var numInStrings = nums.join(" is greater than ")
console.log(numInStrings);


