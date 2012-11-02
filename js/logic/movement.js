function doKeyDown(evt){
	switch (evt.keyCode) {
		case 32:  /* Space pressed */
			jump();
			break;
	}	

}

function jump() {
	window.removeEventListener('keydown',doKeyDown,true);
	var reachedTop = false;
	var jumpState = setInterval(function() {
		if (halp.y - halp.dy < 270) {
			reachedTop = true;
		} else if (halp.y + halp.dy > (halp.PLAYHEIGHT-5) && reachedTop) {
			clearInterval(jumpState);
			window.addEventListener('keydown',doKeyDown,true);
		}

		var delta = (reachedTop) ? halp.y += halp.dy : halp.y -= halp.dy;

	},40);
}

window.addEventListener('keydown',doKeyDown,true);