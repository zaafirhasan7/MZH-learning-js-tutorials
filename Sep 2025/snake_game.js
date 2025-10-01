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

var sampleCircle = new Block(9, 10); // apple

// snake
var sampleBlock2 = new Block (10, 11);
var sampleBlock3 = new Block (11, 11);
var sampleBlock4 = new Block (12, 11);
var sampleBlock5 = new Block (13, 11);
var sampleBlock6 = new Block (14, 11);
var sampleBlock7 = new Block (15, 11);
var sampleBlock8 = new Block (16, 11);
var sampleBlock9 = new Block (17, 11);

sampleCircle.drawCircle(ctx, blockSize, "maroon");

sampleBlock2.drawSquare(ctx, blockSize, "green");
sampleBlock3.drawSquare(ctx, blockSize, "green");
sampleBlock4.drawSquare(ctx, blockSize, "green");
sampleBlock5.drawSquare(ctx, blockSize, "green");
sampleBlock6.drawSquare(ctx, blockSize, "green");
sampleBlock7.drawSquare(ctx, blockSize, "green");
sampleBlock8.drawSquare(ctx, blockSize, "green");
sampleBlock9.drawSquare(ctx, blockSize, "green");
// setInterval(()=>{
//     score++;
//     ctx.clearRect(0,0, width, height);
//     drawBorder();
//     scoreDrawer();
// }, 100);

drawBorder();
scoreDrawer();
// gameOver();
