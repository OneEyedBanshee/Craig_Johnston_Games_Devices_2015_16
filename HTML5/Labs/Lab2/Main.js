//global variable
var game;

function main()
{
	game = new Game();
	game.gameLoop();
	window.addEventListener("keypress", game.checkKeys);		
}
