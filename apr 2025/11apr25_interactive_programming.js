var counter = 0;
function printSeconds () {    
    console.log(++counter);
    if (counter === 10) {
        console.log("I am stopping..");
        clearInterval(intervalId);
    }
}
var intervalId = setInterval(printSeconds, 1000);
