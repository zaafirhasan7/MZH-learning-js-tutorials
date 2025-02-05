var dinosaurs = ["T-Rex","Velociraptor",
"Stegosaurus", "Triceratops", "Brachiosaurus",
"Pteranodon", "Apatosaurus","Diplodocus",
"Compsognathus"]; 

// counting total elements of an array
console.log (dinosaurs.length);

// finding the last element of an array (array.length - 1)
console.log (dinosaurs[dinosaurs.length - 1])

var hybrid_17 = dinosaurs[0] + "-" + dinosaurs[7]
console.log(hybrid_17);
// ----------------------------------------------------------

// array with numbers
var myNumbers = [9,2,989,40,39,11.5,3,7,0,8,9,9,9,9,9,2,21.73]
console.log (myNumbers[myNumbers.length - 1])

console.log (myNumbers.length);
console.log (myNumbers[0] + myNumbers[1]); // 9 + 2 = 11

// changing elements
dinosaurs[0] = "tyrannosaurus rex";
console.log (dinosaurs);