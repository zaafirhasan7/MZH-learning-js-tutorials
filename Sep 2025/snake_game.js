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
var sampleBlock = new Block (11, 30);
var anotherBlock = new Block (11, 31);
console.log(sampleBlock.equal(anotherBlock));

sampleCircle.drawCircle(ctx, blockSize, "maroon");
sampleBlock.drawSquare(ctx, blockSize, "green");
// setInterval(()=>{
//     score++;
//     ctx.clearRect(0,0, width, height);
//     drawBorder();
//     scoreDrawer();
// }, 100);

drawBorder();
scoreDrawer();
// gameOver();
