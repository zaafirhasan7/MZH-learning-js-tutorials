// Arguments: n, arr, num1, num2, newArrv
// Arguments: str, number,arr, boolean; functions

function makingDinner () {
    console.log("Dinner is ready kids!"); 
};

// setTimeout(makingDinner, 20000);

function boilingEggAlarm () {
    console.log("Hey, your egg has been cooked!");
    console.log("Turn off the stove!");
}
var boilingEggTimeout = setTimeout(boilingEggAlarm, 10000);

clearTimeout(boilingEggTimeout);