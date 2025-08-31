var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height

class Ball {
    constructor () {
        this.x = width / 2;
        this.y = height / 2;
        this.xSpeed = 5;
        this.ySpeed = 0;
    };

    move () {
        this.x = this.x + this.xSpeed;
        this.y = this.y + this.ySpeed;

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

    draw () {
        circle(this.x, this.y, 10, true);
    };

    // checkCollision (canvasWidth, canvasHeight) {         
    //     if (this.x < 0 || this.x > canvasWidth) {
    //         this.xSpeed = -this.xSpeed;
    //         this.collisionCounter++;
    //     };
        
    //     if (this.y < 0 || this.y > canvasHeight) {
    //         this.ySpeed = -this.ySpeed;
    //         this.collisionCounter++;
    //     };
    // };

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

// document.addEventListener("keydown", (event) => {
//     console.log(event.keyCode);
// });

// in object order does not matter like it matters in array
var keyNames = {
    38: "up",
    40: "down",
    37: "left",
    39: "right",
    32: "space",
    16: "shift",
    13: "enter",
    18: "alt"

};

function keyDownHandler (event) {
    console.log(keyNames[event.keyCode]);
};

document.addEventListener("keydown", keyDownHandler);






