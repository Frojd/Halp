function obstaclePath() {
	if(!halp.running) {
		var moveObstacle = setInterval(function() {
			for(var i = 0; i < halp.obstacles.length; i++) {
				halp.gameover = intersect(halp.player.coords, halp.obstacles[i].coords);
				if(halp.obstacles[i].coords.x - halp.dx < 50) {
					halp.obstacles[i].coords.x = 700;
				} else {
					halp.obstacles[i].coords.x -= halp.dx;
				}
			}
		}, 20);	
		halp.running = true;
	}
}