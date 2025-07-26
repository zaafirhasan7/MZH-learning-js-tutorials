var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// 0.7 Pi (not half circle)
ctx.beginPath();
ctx.arc(50, 250, 30, 0, 0.7*Math.PI, false);
ctx.stroke();


// Pi (half circle)
ctx.beginPath();
ctx.arc(120, 250, 30, 0, 1*Math.PI, false);
ctx.stroke();

function circleDrawer(x, y, radius, colour) {
    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = colour;
    ctx.arc(x, y, radius, 0, 2*Math.PI, false);
    ctx.stroke();
};

var colours = ["red","crimson","blue", "magenta","green", "darkGreen", "darkBlue", "indigo", "violet"];
var radius = 5;
for (var i = 0; i < 10; i++) {
    circleDrawer(300, 250, radius, colours[Math.floor (Math.random() * colours.length)]); 
    radius = radius + 10;
};


