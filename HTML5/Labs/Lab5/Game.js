function Game()
{		
	this.initialise();	
	this.touches = [];
	this.touchDistance = 0;	
	this.movementRegisterRange = 50;	
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
	game.draw();	
	console.log("gameLooped");		
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

Game.prototype.onTouchStart = function(e) {
     // Prevent the browser from doing its default thing (scroll, zoom)
    e.preventDefault();
    game.touches = e.touches; 


    if (game.touches.length == 2)
    {
    	var posBetween = [game.touches[0].clientX - game.touches[1].clientX, game.touches[0].clientY - game.touches[1].clientY];	
    	game.touchDistance = Math.sqrt(posBetween[0] * posBetween[0] + posBetween[1] * posBetween[1]);	
    }     
} 

Game.prototype.onTouchMove = function(e) {
     // Prevent the browser from doing its default thing (scroll, zoom)
    e.preventDefault();
    game.touches = e.touches; 
     
} 

Game.prototype.onTouchEnd = function(e) {
     // Prevent the browser from doing its default thing (scroll, zoom)
    e.preventDefault();
    if (game.touches.length == 2)
	{
	    var posBetween = [game.touches[0].clientX - game.touches[1].clientX, game.touches[0].clientY - game.touches[1].clientY];    	
	    var newTouchDistance = Math.sqrt(posBetween[0] * posBetween[0] + posBetween[1] * posBetween[1]);	

	    console.log("end distance: " + newTouchDistance);
	    console.log("start distance: " + game.touchDistance);
	    if (game.touchDistance > newTouchDistance + game.movementRegisterRange)
	    {
	    	game.sceneMgr.goToScene("Game Over")
	    }
	    else if (game.touchDistance < newTouchDistance - game.movementRegisterRange)
	    {
	    	game.sceneMgr.goToScene("Playing");
	    }   
    }  
    game.touches = e.touches; 
} 

Game.prototype.draw = function() 
{
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	this.sceneMgr.currentScene.render();

	//touches is an array that holds all the touch info
	//use it e.g. draw a circle around each finger 
	for(var i=0; i<this.touches.length; i++)
	{
	    var touch = this.touches[i]; 	  
	    ctx.beginPath(); 
	    ctx.strokeStyle = "red";
	    ctx.lineWidth = "6";
	    ctx.arc(touch.clientX, touch.clientY, 40, 0, Math.PI*2, true); 
	    ctx.stroke();	    
	}
}