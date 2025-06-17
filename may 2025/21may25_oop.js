var table = {
   height: 25,
   width: 17,
   length: 30,
};

var computerTable = {
    height: 15,
    width: 27,
    length: 40,
 };

class Car {
    constructor (name, engine, speed, tire, colour) {
        this.name=name;
        this.engine=engine;
        this.speed=speed;
        this.tire=tire;
        this.colour=colour;
    }
}

var acura_nsx = new Car(
    'Acura Nsx',
    '2.5litre',
    350, 
    {
        brand: "acura",
        thickness: 2.5,
        "rim design": {type: "5-split spoke"},
    },
    "red"
);

// console.log(acura_nsx.name);
// console.log(acura_nsx.tire["rim design"].type);

function turnOnLight(){
    console.log('The light has been turned on. Enjoy~!');
    console.log('The table height: '+ this.height + "cm");
    
}
// adding a function to table object
table.turnOnLight = turnOnLight;

// console.log(table);
// table.turnOnLight();

// adding a new property to computerTable obj
computerTable.turnOnLight = turnOnLight;

computerTable.turnOnLight();
