var halp = {};

halp.canvas = null;
halp.ctx = null;
halp.floorCtx = null;
halp.dx = 5;
halp.dy = 5;
halp.x = 200;
halp.y = 346;
halp.WIDTH = 800;
halp.HEIGHT = 600;
halp.PLAYHEIGHT = 346;
halp.PLAYWIDTH = 800;

halp.obsY = 400;
halp.obsX = 800;
halp.obsHeight = 34;
halp.obsWidth = 40;

halp.running = false;

halp.obstacles = [];

halp.player = null;

halp.gameover = false;

// Autoset animation to frames
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          window.oRequestAnimationFrame      ||
          window.msRequestAnimationFrame     ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

// Load and set up resources
function onload() {
	halp.player = new Player(halp.x, halp.y, 96, 54);

	halp.obstacles.push(new Obstacle(halp.obsX-halp.obsWidth, halp.obsY-halp.obsHeight, halp.obsWidth, halp.obsHeight));

	//halp.obstacles.push(new Obstacle(800, halp.obsY, -20));

	halp.canvas = document.getElementById("halp");
	halp.ctx = halp.canvas.getContext("2d");

	setTimeout(update, 1000/60);
}


function clear() {
	halp.ctx.clearRect(0, 0, halp.WIDTH, halp.HEIGHT);
}

function draw() {
	clear();
	halp.ctx.fillStyle = "black";
	halp.ctx.strokeStyle = "black";
	rect(0,0,halp.WIDTH,halp.HEIGHT);

	halp.ctx.fillStyle = "yellow";
	floorRect();
	

	halp.ctx.fillStyle = "purple";
	halp.player.draw();

	halp.ctx.fillStyle = "blue";
	for(var i = 0; i < halp.obstacles.length; i++) {
		halp.obstacles[i].draw();
	}

	obstaclePath();
}

var frame = 0;
var lastUpdateTime = 0;
var acDelta = 0;
var msPerFrame = 10;

function update() {
    if(!halp.gameover) {
    	requestAnimFrame(update);

    	var delta = Date.now() - lastUpdateTime;
	    if (acDelta > msPerFrame) {
	        acDelta = 0;
	        draw();
	        frame++;
	        if (frame >= 6) frame = 0;
	    } else {
	        acDelta += delta;
	    }	

	    lastUpdateTime = Date.now();
    } else {
    	alert("you lose");	
    }
}