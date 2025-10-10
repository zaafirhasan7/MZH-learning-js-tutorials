function drawBorder () {
    ctx.fillStyle = "gray";
    ctx.fillRect(0,0,width,blockSize);
    ctx.fillRect(0,0,blockSize,height);
    ctx.fillRect(width-blockSize,0,blockSize,height);
    ctx.fillRect(0,height-blockSize,width,blockSize);
};

function scoreDrawer () {
    ctx.font = "20px Courier";
    ctx.fillStyle = "black";
    ctx.textBaseline = "top";
    ctx.textAlign = "left";
    ctx.fillText("Score:" + score, blockSize, blockSize); 
}

function gameOver () {
    // clearInterval(intervalId);
    ctx.font = "60px Courier";
    ctx.fillStyle = "maroon";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillText("Game Over", width/2, height/2); 
}

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var width = canvas.width; // in pixels
var height = canvas.height; // in pixels

var blockSize = 10;
var blocksInWidth = width / blockSize; // 40
var blocksInHeight = height / blockSize;
var score = 0;

drawBorder();
scoreDrawer();

var snake = new Snake();
var apple = new Apple();
apple.draw(ctx, blockSize);


document.addEventListener("keydown", (event) => {
    var direction = event.key;
    var directionObj = {
        "ArrowUp" : "up",
        "ArrowDown" : "down",
        "ArrowLeft" : "left",
        "ArrowRight" : "right"
    };
    
    if (direction in directionObj) {
        var directionFromUser = directionObj[direction];
        snake.setDirection(directionFromUser);
    }
});