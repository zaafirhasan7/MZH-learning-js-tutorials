class Ball {
    constructor (x, y, randColor) {
        var xSpeedRandomNum = Math.floor(Math.random()*11-5);//-5, 5 
        var ySpeedRandomNum = Math.floor(Math.random()*11-5);//-5, 5 
        
        console.log(xSpeedRandomNum, ySpeedRandomNum);
        
        this.x = x;
        this.y = y;
        this.xSpeed = xSpeedRandomNum;
        this.ySpeed = ySpeedRandomNum;
        this.color = randColor;
    };

    draw (radius) {
        circle(this.x, this.y, radius, true, this.color);
    };

    move () {
        this.x = this.x + this.xSpeed;
        this.y = this.y + this.ySpeed;
    };

    checkCollision (canvasWidth, canvasHeight) {  

        // var randColor = generateRandomRGBColor();
        // console.log(randColor);
        console.log(canvasWidth, canvasHeight);
        
        
        if (this.x < 0 || this.x > canvasWidth) {
            // ctx.fillStyle = randColor;
            this.xSpeed = -this.xSpeed;
        };

        if (this.y < 0 || this.y > canvasHeight) {
            // ctx.fillStyle = randColor;
            this.ySpeed = -this.ySpeed;
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

    function pickRandomWord () {
        // make an array of random colors
        var colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];
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
ctx.strokeRect(0,0,canvasWidth,canvasHeight); 
var ball = new Ball(100, 100, pickRandomWord());

 
setInterval(()=> {
    ctx.clearRect(0,0,canvasWidth, canvasHeight);
    ctx.stroke
    ctx.strokeRect(0,0,canvasWidth,canvasHeight);
    ball.draw(6);
    ball.move();
    ball.checkCollision(canvasWidth, canvasHeight);
}, 30)


// generated random color using pickRandomWord
// passed it to the constructor
// constuctor assigns this random color to the color property of ball
// color property passed to draw function
// now, draw function calls circle function with the color property 