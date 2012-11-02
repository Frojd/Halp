var Obstacle = function (x, y, w, h) {
	this.img = new Image();
  this.img.src = 'images/obstacle.png';

	this.coords = {
		x: x,
		y: y,
		w: w,
		h: h
	};

	this.draw = function() {
		// halp.ctx.beginPath();
		// halp.ctx.rect(this.coords.x,this.coords.y,this.coords.w,this.coords.h);
		// halp.ctx.closePath();
		// halp.ctx.fill();
		// halp.ctx.stroke();

		halp.ctx.drawImage(this.img, this.coords.x, this.coords.y);
  	
		// this.coords.x = halp.x;
  //   this.coords.y = halp.y;
	};
};