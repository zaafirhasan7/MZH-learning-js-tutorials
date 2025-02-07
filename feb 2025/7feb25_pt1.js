var animals = [
    "Polar Bear", "Monkey", "Cat", 
    "Dog", "Llama"
];

var removedElement = animals.pop();
console.log(animals);
console.log(removedElement);

// add Llama at the beginning of the array
animals.unshift(removedElement);
console.log(animals);
// [ 'Llama', 'Polar Bear', 'Monkey', 'Cat', 'Dog' ]


// Remove the first element
var firstElement = animals.shift();
console.log(animals);
console.log(firstElement);




