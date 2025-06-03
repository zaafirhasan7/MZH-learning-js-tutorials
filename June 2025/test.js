var tuntun = {
    name: "Tuntun",
    legs: 4,
    isAwesome: true,
    sound: "Mew mew"
}
var reo = {
    name: "Reo",
    legs: 4,
    isAwesome: true,
    sound:"Mewww mewwww"
}; 


// dog.bark = function () {
    // console.log(`Woof woof! My name is ${this.name}!`);
// };

var speak = function () {
    console.log(`${this.sound}! My name is ${this.name}!`);
};

tuntun.speak = speak;
reo.speak = speak;

tuntun.speak();
reo.speak();