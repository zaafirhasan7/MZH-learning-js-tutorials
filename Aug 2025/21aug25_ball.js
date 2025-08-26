class Ball {
    constructor (x, y, xSpeed, ySpeed, randcolor, width, height) {
        this.x = x;
        this.y = y;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.color = randcolor;
        this.width = width;
        this.length = length;
    };

    draw (radius) {
        circle(this.x, this.y, radius, true, this.color);
    };

    move () {
        this.x = this.x + this.xSpeed;
        this.y = this.y + this.ySpeed;
    };

    checkCollision () {  

        // var randColor = generateRandomRGBColor();
        // console.log(randColor);
        
        if (this. == 0 || this.x == 500) {
            // ctx.fillStyle = randColor;
            this.xSpeed = -this.xSpeed;
        };

        if (this.y == 0 || this.y == 300) {
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

function generateRandomRGBColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`; // rgb(118, 10, 118)
}

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
var ctx = canvas.getContext("2d");
ctx.strokeRect(0,0,200,200); 
var ball = new Ball(100, 100, -2, 4, pickRandomWord());

 
setInterval(()=> {
    ctx.clearRect(0,0,900,300);
    ctx.strokeRect(0,0,500,300);
    ball.draw(6);
    ball.move();
    ball.checkCollision();
}, 30)


// generated random color using pickRandomWord
// passed it to the constructor
// constuctor assigns this random color to the color property of ball
// color property passed to draw function
// now, draw function calls circle function with the color property 