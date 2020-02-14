const sklad = new Sklad();
sklad.vypisTonery(); 

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.font = "50px Arial";

var grd = ctx.createLinearGradient(200, 0, 600, 0);
grd.addColorStop(0, "blue");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.textAlign = "center"; 
ctx.fillText("SEZNAM TONERŮ ",canvas.width/2, 70);

