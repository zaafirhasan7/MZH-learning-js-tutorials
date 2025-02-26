var doNotStop = true;
var i = 0;
while (doNotStop){
    var randNum =  Math.random();
    // console.log(randNum);
    
    i++;
    if (i == 5){
        doNotStop = false;    
    }
}

// Sheep counter for nice dreamy sleep
// var sheepICounted = 0;
// while (sheepICounted <= 10) {
//     console.log("I have counted " + sheepICounted +  " sheep!");
//     sheepICounted++; // each loop, the value will be increased by 1. 0=>1, 1=>2, 2=>3, ..., 9=>10 
// };
// console.log('zzzzzzzzzzzzzzz');

// function: A set of instructions/code in one block/body/scope 
var sleepCounter = function (){
    var sheepICounted = 0;
    while (sheepICounted <= 2) {
        console.log("I have counted " + sheepICounted +  " sheep!");
        sheepICounted++; // each loop, the value will be increased by 1. 0=>1, 1=>2, 2=>3, ..., 9=>10 
    };
    console.log('zzzzzzzzzzzzzzz');
};

var hangout = function(){
    console.log("Go to school first");
    console.log("Meet Aahil");
    console.log("Wait for a class to be cancelled");
    console.log("Once a class is cancelled, we both start hangout");
    console.log("YES! mission successful!");
};

hangout(); // this is called "function call" (first put function name then parenthesis)


