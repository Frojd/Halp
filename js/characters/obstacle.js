var Obstacle = function (x, y, r) {
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
	};
};