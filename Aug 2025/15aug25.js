var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;
var position = 0; // initial state


function shapeMoverToRight () {
    ctx.clearRect(0, 0, width, height); // x, y, width, height
    ctx.fillRect(position, 0, 20, 20);

    position++;
    if (position > 200) {
        position = 0; // reset to initial state
    }
};

var size = 20;
function squareSizeIncreaser () {
    ctx.clearRect(0, 0, width, height); // x, y, width, height
    ctx.fillRect(200, 200, size, size);

    size++;
    if (size > 200) {
        size = 20; // reset to initial state
    }
};
setInterval(squareSizeIncreaser, 30);