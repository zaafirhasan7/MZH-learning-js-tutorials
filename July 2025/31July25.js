var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function hangmanDrawer (mistakes) {
    if (mistakes==1) {
        // draw head
        ctx.beginPath();
        ctx.lineWidth = 10;
        ctx.strokeRect(250, 250, 50, 50);        
    } else if (mistakes==2) {
        hangmanDrawer(1);
        // draw torso
        ctx.lineWidth = 10;
        ctx.moveTo(250+50/2, 300);
        ctx.lineTo(250+50/2, 450);
        ctx.stroke();
    } else if (mistakes==3) {
        hangmanDrawer(1);
        hangmanDrawer(2);
        // draw left hand
        ctx.lineWidth = 10;
        ctx.moveTo(250+50/2,300+25);
        ctx.lineTo((250+50/2)-75, (300+25)+65);
        ctx.stroke();
    } else if (mistakes==4) {
        hangmanDrawer(1);
        hangmanDrawer(2);
        hangmanDrawer(3);
        // draw right hand
        ctx.lineWidth = 10;
        ctx.moveTo(250+50/2,300+25);
        ctx.lineTo((250+50/2)+75, (300+25)+65);
        ctx.stroke();
    } else if (mistakes==5) {
        hangmanDrawer(1);
        hangmanDrawer(2);
        hangmanDrawer(3);
        hangmanDrawer(4);
        // draw left leg
        ctx.lineWidth = 10;
        ctx.moveTo(250+50/2,450);
        ctx.lineTo((250+50/2)-70, (300+25)+200);
        ctx.stroke();
    } else if (mistakes==6) {
        hangmanDrawer(1);
        hangmanDrawer(2);
        hangmanDrawer(3);
        hangmanDrawer(4);
        hangmanDrawer(5);
        // draw right leg
        ctx.lineWidth = 10;
        ctx.moveTo(250+50/2,450);
        ctx.lineTo((250+50/2)+70, (300+25)+200);
        ctx.stroke();
    }

};

hangmanDrawer(6);