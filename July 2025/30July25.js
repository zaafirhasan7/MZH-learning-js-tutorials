var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function fullCircle(x, y, radius, colour, isFilled) {
    if (colour === undefined) {
        colour = "black";
    };
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2*Math.PI, false);
    if(isFilled === false){
        ctx.strokeStyle = colour;
        ctx.stroke();
    } else if(isFilled === true) {
        // isCircileFilled is actually true now
        ctx.fillStyle = colour;
        ctx.fill();
    } else {
        // must be 
        alert("you have to provide an isFilled value (which are true or false)");
        
    }
};

var colours = ["red","crimson","blue", "magenta","green", 
    "darkGreen", "darkBlue", "indigo", "violet"];

$("html").mousemove(event => {
    var x = event.pageX;
    var y = event.pageY;
    // console.log(x,y);
    var randIdx = Math.floor (Math.random() * colours.length);
    console.log(randIdx);
    var randColour =  colours[randIdx];
    
    fullCircle(x, y, 10, randColour, false);
});