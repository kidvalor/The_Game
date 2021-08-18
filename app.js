//Grabbing Canvas element to render Graphics
var canvas = document.getElementById("canvas")
var ctx = canvas.getContext('2d')

// two grass strips 
ctx.fillStyle = "green";
ctx.fillRect(0,440,570,45);
ctx.fillRect(0,220,570,45)


//car lines 

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