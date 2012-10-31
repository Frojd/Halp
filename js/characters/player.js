function Player (x, y, r) {
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