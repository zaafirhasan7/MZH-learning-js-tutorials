// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");

// // Draw head
// ctx.fillRect(120, 85, 60, 60)

// // Draw body
// ctx.fillRect(120, 150, 60, 100);

// // Draw left arm
// ctx.fillRect(85, 150, 30, 80);

// // Draw right arm
// ctx.fillRect(185, 150, 30, 80);

// // Draw left leg
// ctx.fillRect(120, 250, 20, 60);

// // Draw right leg
// ctx.fillRect(160, 250, 20, 60);

// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");
// ctx.fillStyle = "cyan";
// for (var i = 1; i < 8; i++) {
//   ctx.fillRect(i * 10, i * 15, 90, 10);

// draw 3 rectangle with different colors

var colors = ["red", "green", "blue"];
var x_pos = 10;
for (let index = 0; index < 3; index++) {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = colors[index];
  ctx.fillRect(x_pos, 10, 50, 100);
  x_pos += 50;
}

var canvas = document.getElementById("canvas");
var ctx1 = canvas.getContext("2d");
ctx1.fillStyle = "Green";
ctx1.fillRect(170, 10, 150, 100);

ctx1.fillStyle = "red";
ctx1.beginPath();
// Math.PI is π (about 3.14159), which is 180 degrees.
// Math.PI * 2 is 360 degrees.
ctx1.arc(235, 60, 36, 0, Math.PI * 2); // x, y, radius, startAngle, endAngle
ctx1.fill();
