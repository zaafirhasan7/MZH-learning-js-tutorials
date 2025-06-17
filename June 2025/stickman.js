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


// legs


context.stroke();
