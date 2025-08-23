class Ball {
    constructor (x, y, xSpeed, ySpeed) {
        this.x = x;
        this.y = y;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
    };

    draw (radius) {
        circle(this.x, this.y, radius, true);
    };

    move () {
        this.x = this.x + this.xSpeed;
        this.y = this.y + this.ySpeed;
    };

    checkCollision () {  

        var randColor = generateRandomRGBColor();
        console.log(randColor);
        
        if (this.x == 0 || this.x == 200) {
            ctx.fillStyle = randColor;
            this.xSpeed = -this.xSpeed;
        };

        if (this.y == 0 || this.y == 200) {
            ctx.fillStyle = randColor;
            this.ySpeed = -this.ySpeed;
        };
    };

};

function circle(x, y, radius, isFilled) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2*Math.PI, false);
    if(!isFilled){
        ctx.stroke();
    } else {
        ctx.fill();
    };
};

function generateRandomRGBColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`; // rgb(118, 10, 118)
}

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.strokeRect(0,0,200,200);

var ball = new Ball(100, 100, -2,4);

 
setInterval(()=> {
    ctx.clearRect(0,0,200,200);
    ctx.strokeRect(0,0,200,200);
    ball.draw(6);
    ball.move();
    ball.checkCollision();
}, 30)
