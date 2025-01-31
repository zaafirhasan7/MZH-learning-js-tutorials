var lowerCase =  "hello there, i am zaafir";
var upperCase = lowerCase.toUpperCase();
// console.log (upperCase)

var wibleWobble = "hELlo THERE, hOW ARE yOu doINg?"
var lowerCase = wibleWobble.toLowerCase();
// console.log (lowerCase);

var question =  "hELlo THERE, hOW ARE yOu doINg?";
var sliced_h = question.slice(0, 1);
var upperCase_H = sliced_h.toUpperCase();
var restOfText = question.slice(1);
var lowerCaseRestOfText = restOfText.toLowerCase();
var outputSentence = upperCase_H + lowerCaseRestOfText;
// console.log (outputSentence);

// output in one line
console.log(question[0].toUpperCase() + question.slice(1).toLowerCase());