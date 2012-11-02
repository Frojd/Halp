function rect(x,y,w,h) {
	halp.ctx.beginPath();
	halp.ctx.rect(x,y,w,h);
	halp.ctx.closePath();
	halp.ctx.fill();
	halp.ctx.stroke();
}

function floorRect() {
	halp.ctx.beginPath();
	halp.ctx.rect(0,400,800,200);
	halp.ctx.closePath();
	halp.ctx.fill()
	halp.ctx.stroke();
}