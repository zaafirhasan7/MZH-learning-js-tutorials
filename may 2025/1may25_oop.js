class Animal {
   constructor (name, color, height) {
        this.name=name;
        this.color=color;
        this.height=height;
   }
   
   run () {
    console.log("I am running with 0 speed");
   } 
}

class Cat extends Animal {
    // method overriding
    run () {
        console.log("I am running with 19kmph speed");
    }
}

class Dog extends Animal {
    run () {
        console.log("I am running with 15kmph speed");
        
    }
}

class Giraffe extends Animal {
    
}

var myAnimal = new Animal ("My Animal", "red", 10);
myAnimal.run();

var tuntun = new Cat ();
tuntun.run();

var lalu = new Dog ();
lalu.run();