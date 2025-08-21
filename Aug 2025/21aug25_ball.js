class Ball {
    constructor (x, y, xSpeed, ySpeed) {
        this.x = x;
        this.y = y;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
    };

    draw (radius) {
        circle(this.x, this.y, radius, "darkGreen", true);
    };

    move () {
        this.x = this.x + this.xSpeed;
        this.y = this.y + this.ySpeed;
    };

};

function circle(x, y, radius, colour, isFilled) {
    if (colour === undefined) {
        colour = "black";
    };
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2*Math.PI, false);
    if(!isFilled){
        ctx.strokeStyle = colour;
        ctx.stroke();
    } else {
        ctx.fillStyle = colour;
        ctx.fill();
    };
};

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.strokeRect(0,0,200,200);

var ball = new Ball(100, 100, -2, 3);
ball.draw(3);

 

