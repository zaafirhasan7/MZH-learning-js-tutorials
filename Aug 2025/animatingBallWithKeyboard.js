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
        this.speed = 1;
        this.xSpeed = this.speed;// only right arrow key
        this.ySpeed = 0;
        this.size = 10;
        
    };
    // making move function to help the ball to move and to check if touching any wall.
    // if it touches a wall, it will wrap around the canvas and come out the other side.
    // here we used the canvas width and height we made earlier
    move () {
        if(this.x === 200){
            var test = 1;
        }
        this.x = this.x + this.xSpeed; // only right
        this.y = this.y + this.ySpeed; // y will reamin same value
        
        if (this.x < 0 || this.x > width) {
            this.xSpeed = -this.xSpeed; // only changing the direction
            this.x = this.x + this.xSpeed;
        };

        if (this.y < 0 || this.y > height) {
            this.ySpeed = -this.ySpeed; // only changing the direction
            this.y = this.y + this.ySpeed;
        };

        // if (this.y < 0) {
        //     this.y = height;
        // } else if (this.y > height) {
        //     this.ySpe = 0;
        // };
    };
    // making a draw function to draw the ball
    draw () {
        circle(this.x, this.y, this.size, true);
    };

    setDirection (direction) {
        if (direction === "right") {
            this.xSpeed = this.speed;
            this.ySpeed = 0;
        } else if (direction === "left") {
            this.xSpeed = -this.speed;
            this.ySpeed = 0;
        } else if (direction === "up") {
            this.xSpeed = 0;
            this.ySpeed = -this.speed;
        }  else if (direction === "down") {
            this.xSpeed = 0;
            this.ySpeed = this.speed;
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

// made a new instance of Ball
var ball = new Ball();
ball.draw(); // instance method

var keyActions = {
    32: "stop", 
    37: "left",
    38: "up",
    39: "right",
    40: "down"
};

// we set direction based on pressed key
document.addEventListener("keydown", (event) => {
    ball.setDirection(keyActions[event.keyCode]);
});

// assign dynamic number to speed from keyboard
document.addEventListener("keyup", (event) => {
    var typedKeyInNum = parseInt(event.key);
       
    if(!isNaN(typedKeyInNum)){
        if (typedKeyInNum === 0) {
            typedKeyInNum = 1;
        }
        ball.speed = typedKeyInNum;
        adjustSpeedBasedOnDirection();
    }
    
    var enteredKey = event.key;
    if (enteredKey === "x") {
        ball.speed++;
        adjustSpeedBasedOnDirection();
    } else if (enteredKey === "z") {
        ball.speed--;
        if(ball.speed <= 0){
            ball.speed =1;
        }
        adjustSpeedBasedOnDirection();
    } else if (enteredKey === "c") {
        // increase ball size
        ball.size++;
        if (ball.size > 50) {
            ball.size = 50;
        };
    } else if (enteredKey === "v") {
        ball.size--;
        if (ball.size <= 0) {
            ball.size = 1;
        };
    };
    
});

function adjustSpeedBasedOnDirection () {
    if (ball.ySpeed > 0) {
        ball.ySpeed = ball.speed;
    } else if (ball.ySpeed < 0) {
        ball.ySpeed = -ball.speed;
    };

    if (ball.xSpeed > 0) {
        ball.xSpeed = ball.speed;
    } else if (ball.xSpeed < 0) {
        ball.xSpeed = -ball.speed;
    };
};

setInterval(()=>{
    // clear
    ctx.clearRect(0, 0, width, height); 
    ball.move(); // changes the ball's x and y position with xSpeed and ySpeed that are changed by setDirection which is called by keyup event handler
    ball.draw();
    ctx.strokeRect(0, 0, width, height);    
}, 30);








