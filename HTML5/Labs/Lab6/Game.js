function Game()
{		
	this.initialise();	
    this.sceneMgr;
	//this.draw();	
}

Game.prototype.initialise = function()
{	
    this.sceneMgr = new SceneManager();

	var scene3 = new GameOverScene("Game Over", null);
	var scene2 = new PlayingScene("Playing", scene3);	
	var scene1 = new MenuScene("Menu Screen", scene2);	

	this.sceneMgr.addScene(scene1);
	this.sceneMgr.addScene(scene2);
	this.sceneMgr.addScene(scene3);
	this.sceneMgr.goToScene("Menu Screen");		
	
	this.initCanvas();		
}

Game.prototype.gameLoop = function()
{	
	console.log("gameLooped");		
	game.draw();
	game.sceneMgr.currentScene.update();
	window.requestAnimationFrame(game.gameLoop);		
}

Game.prototype.initCanvas = function()
{
	canvas = document.createElement("canvas");	
	ctx = canvas.getContext("2d");
	document.body.appendChild(canvas);
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

Game.prototype.clickChecker = function(e)
{
	game.sceneMgr.nextScene();
	game.draw();
}

Game.prototype.draw = function() 
{
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	this.sceneMgr.currentScene.render();
}