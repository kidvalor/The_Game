//Grabbing Canvas element to render Graphics
var canvas = document.getElementById("canvas")
var ctx = canvas.getContext('2d')

var chicken = new Image(); chicken.src = "images/chicken.png"
// function for updating canvas for each frame
var sx = 0;
var sy = 0;
var swidth = 40;
var sheight = 40;
var x = 50;
var y = 444;
var width = 30;
var height = 30;


function drawBackground() {
// grass 
ctx.fillStyle = "green";
ctx.fillRect(0,440,570,45);
ctx.fillRect(0,220,570,45)


//road
ctx.beginPath();
ctx.moveTo(0,395);
ctx.lineTo(570,395);
ctx.strokeStyle = "white";
ctx.setLineDash([5]);
ctx.strokeWidth = 2;
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0,350);
ctx.lineTo(570,350);
ctx.strokeStyle = "white";
ctx.setLineDash([0]);
ctx.strokeWidth = 4;
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0,305);
ctx.lineTo(570,305);
ctx.strokeStyle = "white";
ctx.setLineDash([5]);
ctx.strokeWidth = 2;
ctx.stroke();

//water 
ctx.fillStyle = "blue";
ctx.fillRect(0,0,570,220);
}

function drawChicken() {
  ctx.drawImage(chicken, sx, sy, swidth, sheight, x, y, width, height)
}

// function to use drawBackground()
function draw () {
  drawBackground();
  drawChicken();
  requestAnimationFrame(draw);
}

draw();

