var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function fullCircle(x, y, radius, colour, isFilled) {
    if (colour === undefined) {
        colour = "black";
    };
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2*Math.PI, false);
    if(isFilled === false){
        ctx.strokeStyle = colour;
        ctx.stroke();
    } else if(isFilled === true) {
        // isCircileFilled is actually true now
        ctx.fillStyle = colour;
        ctx.fill();
    } else {
        // must be 
        alert("you have to provide an isFilled value (which are true or false)");
        
    }
};

function snowmanDrawer (x, y) {
    // head
    fullCircle(x, y, 20, "black", false);// the head
    fullCircle(x-7, y-5, 4, "black", true); // left eye
    fullCircle(x+7, y-5, 4, "black", true);// right eye
    fullCircle(x, y+3, 4, "darkOrange", true);// carrot nose
    // torso
    var torsoCircleY = y+20+25; // 95
    fullCircle(x, torsoCircleY, 25, "black", false);// the torso
    fullCircle(x, torsoCircleY-10, 4, "black", true);// the top button
    fullCircle(x, torsoCircleY, 4, "black", true);// the middle button
    fullCircle(x, torsoCircleY+10, 4, "black", true);// the bottom button
};

snowmanDrawer(300,300);