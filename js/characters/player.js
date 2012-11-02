function Player (x, y, w, h) {

  this.img = new Image();
  this.img.src = 'http://buildnewgames.com/assets/article/sprite-animation/simba.png';
  //img.onload = loaded();
  this.coords = {
   	x: x,
    y: y,
    w: w,
    h: h
  }

  this.draw = function() {

    halp.ctx.drawImage(this.img, frame*96, 0, 96, 54, halp.x, halp.y, 96, 54);
  	
		this.coords.x = halp.x;
    this.coords.y = halp.y;
    
  }
}