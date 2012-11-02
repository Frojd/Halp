function intersect(player, obstacle) {
	var pXmin = player.x;
	var pXmax = player.x+player.w;
	var pYmin = player.y;
	var pYmax = player.y+player.h;

	// var pXmin = player.x+player.r;
	// var pXmax = player.x+player.r+player.r+player.r;
	// var pYmin = player.y+player.r;
	// var pYmax = player.y+player.r+player.r+player.r;

	var oXmin = obstacle.x;
	var oXmax = obstacle.x+obstacle.w;
	var oYmin = obstacle.y;
	var oYmax = obstacle.y+obstacle.h;

	// if(oXmax >= pXmin && oXmin <= pXmax && oYmax >= pYmin && oYmin <= pYmax) {
	if(oXmax >= pXmin && oXmin <= pXmax && pYmax >= oYmin) {
		console.log("pXmin: "+pXmin);
		console.log("pXmax: "+pXmax);
		console.log("pYmin: "+pYmin);
		console.log("pYmax: "+pYmax);
		console.log("oXmin: "+oXmin);
		console.log("oXmax: "+oXmax);
		console.log("oYmin: "+oYmin);
		console.log("oYmax: "+oYmax);
		return true;
	}

	return false;
}