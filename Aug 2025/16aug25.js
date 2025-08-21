var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;
var position = 0; // initial state


function shapeMoverToRight () {
    ctx.clearRect(0, 0, width, height); // x, y, width, height
    ctx.fillRect(position, 0, 20, 20);

    position++;
    if (position > 200) {
        position = 0; // reset to initial state
    }
};

function circle(x, y, radius, isFilled) {
    ctx.lineWidth = 2;
    ctx.fillStyle = "gold";
    ctx.strokeStyle = "black";

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2*Math.PI, false);
    if(isFilled === false){
        ctx.stroke();
    } else {
        ctx.fill();
    }
};

function drawBee (x, y) {

    var radius = 8;
    // 
    circle(x, y, radius, true);
    circle(x, y, radius, false);
    
    // wings
    circle(x-5, y-11, radius-3, false);
    circle(x+5, y-11, radius-3, false);
    // eyes
    circle(x-2, y-1, radius-6, false);
    circle(x+2, y-1, radius-6, false);
};

function updateCoordinate (coordinate) {
    // offset values ranged in between -2 and +1.96
    // lowest range: 0 * 4 - 2 = -2
    // highest range: 0.99 * 4 - 2 = 3.99-2 = +1.96
    var offRange = 2;
    var offset = Math.random() * (offRange * 2) - offRange;
    coordinate += offset; // offset always must have positive or negative, we never subtract the offset value

    if (coordinate > 200) {
        return 200;
    };
    if (coordinate < 0) {
        return 0;
    };

    return coordinate;
};


var x = 100;
var y = 100;

var interval = setInterval(function () {
    ctx.clearRect(0, 0, width, height);
    drawBee(x, y);
    x = updateCoordinate(87.75); // 87.75-2 to 87.75+1.96
    y = updateCoordinate(y);
    ctx.strokeRect(0, 0, width, height);

}, 30);


