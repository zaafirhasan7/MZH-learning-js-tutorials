function calculatePower (number, power) {
    var output = number ** power;
    return output;
};

var result = calculatePower(3.1, 3);
console.log(result);
// 2*2*2*2*2*2 = 64
// 27*3= 81 

function aboutToday (date, food) {
    console.log("today it is " + date);
    console.log("the food i want to eat is " + food);
    
};

aboutToday("16/03/2025", "chicken grill with naan");

// aboutToday("15/03/2025", "sandwich")

// show all the elements of an array
function displayArrayElements(arr){
    console.log("");
    for (var i = 0; i < arr.length; i++ ) {
        console.log(arr[i]);
    }
};

var myCats = [
    "TunTun", "Reo", "Ollie"
]; 
displayArrayElements(myCats);

var favFoods=["pizza", "shwarma", "burger", "chocholate"];
displayArrayElements(favFoods);
