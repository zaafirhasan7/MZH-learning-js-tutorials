var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function hangmanDrawer (mistakes) {
    console.log("miastake coming from outside: " + mistakes);
    var x = 200;
    var y = 50;
    if (mistakes==1) {
        // draw head
        ctx.beginPath();
        ctx.lineWidth = 10;
        ctx.strokeRect(x, y, 50, 50);        
    } else if (mistakes==2) {
        // draw torso
        ctx.lineWidth = 10;
        ctx.moveTo(x+50/2, y+50);
        ctx.lineTo(x+50/2, y+150);
        ctx.stroke();
    } else if (mistakes==3) {
        // draw left hand
        ctx.lineWidth = 10;
        ctx.moveTo(x+50/2,y+75);
        ctx.lineTo((x+50/2)-75, (y+75)+65);
        ctx.stroke();
    } else if (mistakes==4) {
        // draw right hand
        ctx.lineWidth = 10;
        ctx.moveTo(x+50/2,y+75);
        ctx.lineTo((x+50/2)+75, (y+75)+65);
        ctx.stroke();
    } else if (mistakes==5) {
        // draw left leg
        ctx.lineWidth = 10;
        ctx.moveTo(x+50/2,y+150);
        ctx.lineTo((x+50/2)-70, (y+25)+200);
        ctx.stroke();
    } else if (mistakes==6) {
        // draw right leg
        ctx.lineWidth = 10;
        ctx.moveTo(x+50/2,y+150);
        ctx.lineTo((x+50/2)+70, (y+25)+200);
        ctx.stroke();
    }

};
