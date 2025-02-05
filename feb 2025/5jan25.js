var dinosaurs = [];
dinosaurs[0] = "t-rex";
dinosaurs[1] = "Velociraptor"
dinosaurs[2] = "Stegosaurus";
dinosaurs[3] = "Triceratops";
dinosaurs[4] = "Brachiosaurus";
dinosaurs[5] = "Pteranodon";
dinosaurs[6] = "Apatosaurus";
dinosaurs[7] = "Diplodocus";
dinosaurs[8] = "Compsognathus";

dinosaurs[33] = "Philosoraptor";
console.log (dinosaurs)
console.log (dinosaurs[24]);

dinosaurs[9] = null;
console.log (dinosaurs[9]);

// mixing datatypes in an array
var dinosaursAndNumbers = 
[
    3,
    "dinosaurs",
    ["triceratops", "stegosaurus", 3627.5],
    10
];
console.log (dinosaursAndNumbers[2][2]);