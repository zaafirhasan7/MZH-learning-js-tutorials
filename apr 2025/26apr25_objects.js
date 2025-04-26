class RobloxCharacter {

    constructor(name, avatar, health) {
        // we will set all those arguments as the RobloxCharacter's propertiesw 
        this.name = name;
        this.avatar = avatar;
        this.health = health;
    }

    sayHello(){
        console.log(`Hello! my name is ${this.name}`);
    }

    takeDamage(damageAmount){
        this.health -= damageAmount; // 120-5 = 115
        console.log(`${this.name}'s health is ${this.health}`); // 115-5 = 110???? X
    }
    
    healingDamage(healingDamages){
        this.health += healingDamages; // 120-5 = 115
        console.log(`${this.name}'s health restored to ${this.health}`); 
    }

    method4(){}
}

// making an object from RobloxCharacter class
var voidKnight = new RobloxCharacter ("Void Knight", "Purple glowing armor", 120);
console.log(voidKnight.avatar);
voidKnight.sayHello();
voidKnight.takeDamage(45);
var healthApple = 15;
voidKnight.healingDamage(healthApple);


var barbarian = new RobloxCharacter ("barbarian", "viking armor", 110);
barbarian.sayHello();

var charcter3 = new RobloxCharacter('charcter 3', "green armor", 120);
var charcter4 = new RobloxCharacter('charcter 4', "blue armor", 110);




