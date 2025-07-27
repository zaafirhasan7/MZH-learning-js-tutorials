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
// head
fullCircle(100, 250, 20, "black", false);// the head
fullCircle(92, 245, 4, "black", true); // left eye
fullCircle(107, 245, 4, "black", true);// right eye
fullCircle(100, 255, 4, "darkOrange", true);// carrot nose
// torso
fullCircle(100, 295, 25, "black", false);// the torso
fullCircle(100, 280, 4, "black", true);// the top button
fullCircle(100, 293, 4, "black", true);// the middle button
fullCircle(100, 305, 4, "black", true);// the bottom button





