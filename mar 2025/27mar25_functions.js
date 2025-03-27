var myAdventurePlan2 = ["I",  "to", "a", "forest", "today", "and", "i", "hunted", "different", "animals", "went", "and", "BBQ", "the", "meat."];
var myAdventurePlan = ["I", "went", "to", "forest", "for", "BBQ."];
var myAdventurePlanRev = [ "BBQ.", "for", "forest", "to", "went", "I"]; // I went to foest for BBQ.
function revArray (arr) {
    var reversedElement = "";
    for (var i = arr.length - 1; i >= 0; i--) {
        reversedElement = reversedElement + arr[i] + " "; // I =>I went => I went to 
    };
    console.log(reversedElement);
};

// revArray(myAdventurePlanRev);

// revArray([1,2,3,4,5]);

// 121,128 (128 inclusive) -> 121,122,123,124,125,126,127,128
// 0, 5 => 0,1,2,3,4,5


// 10,100 => 10,20,30....,100
// 2,4,6,8,10,...98
// 1,5,9,13,17
// 10,8,6,4,2,0
// 12,6,3
// 2,10,50,250
// 5,7.5,10, 12.5, 15
// 
function printNumbers(start, end){
    for (var i = start; i <= end; i = i + 2.5) {
       console.log(i);
    }
}
printNumbers(5, 15);
