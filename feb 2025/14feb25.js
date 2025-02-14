var randomBodyParts = ["Face", "Nose", "Hair"];
var randomAdjectives = ["Smelly", "Boring", "Stupid"];
var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

var bodyPartIdx = Math.floor(Math.random() * randomBodyParts.length); // 0, 1, 2
var adjIdx = Math.floor(Math.random() * randomAdjectives.length);
var wordIdx = Math.floor(Math.random() * randomWords.length);

var randomBodyPart = randomBodyParts[bodyPartIdx];  // Face or Nose or Hair
var randomAdj = randomAdjectives[adjIdx]; 
var randomWord = randomWords[wordIdx];
console.log(randomWord);


// how to access an ELEMENT from an Array?
// we put array name with a square bracket and put the index inside it
// arrayName[idx];
randomInsult = ["Your", randomBodyPart, "is", "like", "a",randomAdj, randomWord, "!!!"].join(" ");
console.log(randomInsult);
