$(document).ready(function(){
	//draw();
var canvas;
var ctx;
var floorCtx;
var dx = 5;
var dy = 5;
var x = 200;
var y = 390;
var WIDTH = 800;
var HEIGHT = 600;
var PLAYHEIGHT = 400;
var PLAYWIDTH = 800;

var obsY = 400;
var obsX = 400;

var running = false;

var player = new Circle(x, y, 10);
var obstacle = new Obstacle(obsX, obsY, -20);
var obstacle2 = new Obstacle(obsX, obsY, -20);

var gameover = false;

function Circle (x, y, r) {
  this.coords = {
   	x: x,
    y: y,
    r: r
  }

  this.draw = function(x, y, r) {
  	ctx.beginPath();
		ctx.arc(x, y, r, 0, Math.PI*2, true);
		ctx.fill();
		this.coords = {
			x: x,
			y: y,
			r: r
		};
  }
}

function Obstacle(x, y, r) {
	this.coords = {
		x: x,
		y: y,
		r: r
	};

	this.draw = function() {
		ctx.beginPath();
		ctx.rect(this.coords.x,this.coords.y,this.coords.r,this.coords.r);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
	}
}

function rect(x,y,w,h) {
	ctx.beginPath();
	ctx.rect(x,y,w,h);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
}

function floorRect() {
	ctx.beginPath();
	ctx.rect(0,400,800,200);
	ctx.closePath();
	ctx.fill()
	ctx.stroke();
}

function clear() {
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

function doKeyDown(evt){
	switch (evt.keyCode) {
		case 32:  /* Space pressed */
			jump();
			break;
	}
	
}

function obstaclePath() {
	if(!running) {
		var moveObstacle = setInterval(function() {
			intersect(player.coords, obstacle.coords);
			intersect(player.coords, obstacle2.coords);

			if(obstacle.coords.x - dx < 50) {
				obstacle.coords.x = 400;
			} else {
				obstacle.coords.x -= dx;
			}

			if(bla > 800) {
				if(obstacle2.coords.x - dx < 50) {
					obstacle2.coords.x = 400;
				} else {
					obstacle2.coords.x -= dx;
				}
			}

		}, 20);	
		running = true;
	}
}

function intersect(player, obstacle) {
	var pXmin = player.x+player.r;
	var pXmax = player.x+player.r+player.r+player.r;
	var pYmin = player.y+player.r;
	var pYmax = player.y+player.r+player.r+player.r;

	var oXmin = obstacle.x;
	var oXmax = obstacle.x-obstacle.r;
	var oYmin = obstacle.y;
	var oYmax = obstacle.y-obstacle.r;

	if(oXmax >= pXmin && oXmin <= pXmax && oYmax >= pYmin && oYmin <= pYmax) {
		gameover = true;
	}
}

function jump() {
	window.removeEventListener('keydown',doKeyDown,true);
	var reachedTop = false;
	var jumpState = setInterval(function() {
		//clear();
		if (y - dy < 320) {
			reachedTop = true;
		} else if (y + dy > (PLAYHEIGHT-15) && reachedTop) {
			clearInterval(jumpState);
			window.addEventListener('keydown',doKeyDown,true);
		}

		var delta = (reachedTop) ? y += dy : y -= dy;

		ctx.fillStyle = "purple";
		player.draw(x, delta, 10);
	},20);
}

var bla = 0;

function draw() {
	clear();
	ctx.fillStyle = "white";
	ctx.strokeStyle = "black";
	rect(0,0,WIDTH,HEIGHT);

	ctx.fillStyle = "yellow";
	floorRect();
	

	ctx.fillStyle = "purple";
	player.draw(x, y, 10);

	ctx.fillStyle = "blue";
	obstacle.draw();

	if(bla > 800) {
		ctx.fillStyle = "black";
		obstacle2.draw();
	} else {
		bla++;
	}


	obstaclePath();
}

function init() {
	canvas = document.getElementById("halp");
	ctx = canvas.getContext("2d");
	var drawing = setInterval(function() {
		if(gameover) {
			clearInterval(drawing);
			alert("YOU LOSE");
		}
		draw();
	}, 10);
	
}

init();
window.addEventListener('keydown',doKeyDown,true);

});
