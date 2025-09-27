var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var width = canvas.width; // in pixels
var height = canvas.height; // in pixels

var blockSize = 10;
var blocksInWidth = width / blockSize;
var blocksInHeight = height / blockSize;
console.log(blocksInWidth);

function drawBorder () {
    ctx.fillStyle = "gray";
    ctx.fillRect(0,0,width,blockSize);
    ctx.fillRect(0,0,blockSize,height);
    ctx.fillRect(width-blockSize,0,blockSize,height);
    ctx.fillRect(0,height-blockSize,width,blockSize);
};


drawBorder();