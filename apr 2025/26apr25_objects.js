class RobloxCharacter {

    constructor(name, avatar, health) {
        // the RobloxCharacter's properties 
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


// Extension - //! Inheritence
class RobloxCharacterWithTeam extends RobloxCharacter {
    constructor (name, avatar, health, team){
        // this.name = name;
        // this.avatar = avatar;
        // this.health = health;
        super(name, avatar, health); // calling parent's constructor
        this.team = team; // new property
    }

    showTeamName(){
        console.log(`I am ${this.name} and my team is: ${this.team}`);
    }
}


var mrGreen = new RobloxCharacterWithTeam('Mr. Green Hasan', "green armor", 120, "Greeny");

mrGreen.sayHello();
mrGreen.showTeamName();


