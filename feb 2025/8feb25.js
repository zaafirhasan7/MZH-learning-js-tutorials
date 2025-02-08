var arr1 = [1,2,3];
var arr2 = [4,5,9,0]

var arr3 = arr1.concat(arr2)

//console.log(arr3);

var furryAnimals = ["Alpaca", "Ring-tailed Lemur", "Yeti"];
var scalyAnimals = ["Boa Constrictor", "Godzilla"];
var featheredAnimals = ["Macaw", "Dodo"];

var furryAndScalyAnimals = furryAnimals.concat(scalyAnimals);
//console.log(furryAndScalyAnimals);

var allAnimals = furryAnimals.concat(scalyAnimals, featheredAnimals);
console.log(allAnimals);



