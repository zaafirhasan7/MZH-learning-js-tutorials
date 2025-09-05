// we are creating a canvas object and ctx obj for drawing the ball 
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
// taking canva's width and height dynamically and use it later
var width = canvas.width;
var height = canvas.height;

// making the ball class for giving movement, drawing, and sensing for the ball
class Ball {
    constructor () {
        // assigning ball properties, x, y for ball's position. And xSpeed and ySpeed for ball's moving speed 
        this.x = width / 2;
        this.y = height / 2;
        this.xSpeed = 2;// only right arrow key
        this.ySpeed = 0;
    };
    // making move function to help the ball to move and to check if touching any wall.
    // if it touches a wall, it will wrap around the canvas and come out the other side.
    // here we used the canvas width and height we made earlier
    move () {
        this.x = this.x + this.xSpeed; // only right
        this.y = this.y + this.ySpeed; // y will reamin same value
        
        if (this.x < 0) {
            this.x = width;
        } else if (this.x > width) {
            this.x = 0;
        };

        if (this.y < 0) {
            this.y = height;
        } else if (this.y > height) {
            this.y = 0;
        };
    };
    // making a draw function to draw the ball
    draw () {
        circle(this.x, this.y, 10, true);
    };

    setDirection (direction) {
        if (direction === "right") {
            this.xSpeed = 2;
            this.ySpeed = 0;
        } else if (direction === "left") {
            this.xSpeed = -2;
            this.ySpeed = 0;
        } else if (direction === "up") {
            this.xSpeed = 0;
            this.ySpeed = -2;
        }  else if (direction === "down") {
            this.xSpeed = 0;
            this.ySpeed = 2;
        } else if (direction === "stop") {
            this.xSpeed = 0;
            this.ySpeed = 0;
        };
    };
};
// making a function circle to draw a circle by giving x, y, radius, and filled or not
function circle(x, y, radius, isFilled) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2*Math.PI, false);
    if(isFilled === false){
        ctx.stroke();
    } else {
        ctx.fill();
    }
};

var ball = new Ball();

var keyActions = {
    32: "stop", 
    37: "left",
    38: "up",
    39: "right",
    40: "down"
};

// we set direction based on pressed key
document.addEventListener("keyup", (event) => {
    ball.setDirection(keyActions[event.keyCode]);
});








