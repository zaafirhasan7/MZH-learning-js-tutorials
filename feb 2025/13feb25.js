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

