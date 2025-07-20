var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.lineWidth = 2;
ctx.strokeStyle = "green";

ctx.beginPath();
ctx.arc(100,250,50, 0, Math.PI, false); // half circle
ctx.stroke();

ctx.beginPath();
ctx.arc(250,250,50, 0, (270*(Math.PI/180)), false); // 3/4 circle
ctx.stroke();


ctx.beginPath();
ctx.arc(420,250,50,0,Math.PI*2, false); // Full circle
ctx.stroke();

ctx.beginPath();
ctx.arc(550, 250, 50, 0, 90*(Math.PI/180), false);// 1/4 circle
ctx.stroke();

