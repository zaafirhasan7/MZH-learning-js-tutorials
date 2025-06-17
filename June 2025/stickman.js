var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");


// head
context.lineWidth = 4;
context.strokeRect(200,10,20,20)

// torso
context.beginPath();
context.moveTo(200+(20/2), 10+20);
context.lineTo(200+(20/2), (10+20)+45);

// arms
context.moveTo(210, 50);
context.lineTo(192,38) // left arm
context.moveTo(210, 50);
context.lineTo((210-192)+210,38) // right arm

// legs
context.moveTo(210,75)
context.lineTo(195, 105)// left leg
context.moveTo(210,75)
context.lineTo((210-195)+210, 105) // right leg
context.stroke();
