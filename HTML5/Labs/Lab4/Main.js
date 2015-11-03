//global variable
var game;

function main()
{
	game = new Game();
	game.gameLoop();
	window.addEventListener("click", game.clickChecker, false);		
}
