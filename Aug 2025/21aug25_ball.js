class Ball {
    constructor (x, y, randColor) {
        var xSpeedRandomNum = Math.floor(Math.random()*11-5);//-5, 5 
        var ySpeedRandomNum = Math.floor(Math.random()*11-5);//-5, 5 
        
        // console.log(xSpeedRandomNum, ySpeedRandomNum);
        
        this.x = x;
        this.y = y;
        this.xSpeed = xSpeedRandomNum;
        this.ySpeed = ySpeedRandomNum;
        this.color = randColor;
        this.collisionCounter = 0;
    };

    draw (radius) {
        circle(this.x, this.y, radius, true, this.color);
    };

    move () {
        this.x = this.x + this.xSpeed;
        this.y = this.y + this.ySpeed;
    };

    checkCollision (canvasWidth, canvasHeight) {         
        if (this.x < 0 || this.x > canvasWidth) {
            this.xSpeed = -this.xSpeed;
            this.collisionCounter++;
        };
        
        if (this.y < 0 || this.y > canvasHeight) {
            this.ySpeed = -this.ySpeed;
            this.collisionCounter++;
        };
    };

};

    function circle(x, y, radius, isFilled, color) {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2*Math.PI, false);
        if(!isFilled){
            ctx.stroke();
            ctx.strokeStyle = color;
        } else {
            ctx.fill();
            ctx.fillStyle = color;
        };
    };

    function pickRandomColor () {
        // make an array of random colors
        var colors = ["Red", "maroon", "aquaMarine", "Orange", "Yellow", "Green", "Blue", "Purple"];
        // choose a random color from the array
        var randColorIdx = Math.floor(Math.random()* colors.length);
        var randColor = colors[randColorIdx];
        // return the selected random color
        return randColor;
    };

var canvas = document.getElementById("canvas");
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
var ctx = canvas.getContext("2d");

var ballArr = [];
for (var i =0; i < 10; i++) {
    ballArr[i] = new Ball(100, 100, pickRandomColor());
};
console.log(ballArr);



 
setInterval(()=> {
    ctx.clearRect(0,0,canvasWidth, canvasHeight);
    for (var j = 0; j < ballArr.length; j++) {
        var ball = ballArr[j]; // retriving each ball indivisually
        ball.draw(6);
        ball.move();
        ball.checkCollision(canvasWidth, canvasHeight);
        console.log(ball.color, ball.collisionCounter);
        
    };
    ctx.strokeRect(0,0,canvasWidth,canvasHeight);
}, 30)


// generated random color using pickRandomWord
// passed it to the constructor
// constuctor assigns this random color to the color property of ball
// color property passed to draw function
// now, draw function calls circle function with the color property 

// challenge 3
// making an empty array of balls
// adding 10 new balls to the array by using a for loop
// in the set interval function, we will be retriving each
// ball by another for loop and call the draw, move, and check collision methods