//global variable
var game;

function main()
{
	game = new Game();
	game.gameLoop();

	//1. is this running in a touch capable environment?
	var touchable = 'createTouch' in document;    
 
	//2. If it is touchable, add a listener
	if(touchable) {
	        canvas.addEventListener( 'touchstart', game.onTouchStart, false );
	        canvas.addEventListener( 'touchmove', game.onTouchMove, false );
	        canvas.addEventListener( 'touchend', game.onTouchEnd, false );
	}
}
