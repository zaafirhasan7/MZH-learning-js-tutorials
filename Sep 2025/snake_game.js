var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var width = canvas.width; // in pixels
var height = canvas.height; // in pixels

var blockSize = 10;
var blocksInWidth = width / blockSize;
var blocksInHeight = height / blockSize;
var score = 0;

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

setInterval(()=>{
    score++;
    ctx.clearRect(0,0, width, height);
    drawBorder();
    scoreDrawer();
}, 100);


// gameOver();
