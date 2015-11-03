function Game()
{		
	this.initWorld();
	this.initCanvas();
	this.draw();	
}

Game.prototype.initWorld = function()
{
	this.player = new Player();
	this.goal = new Goal();
}

Game.prototype.resolveCollision = function()
{		
	this.goal.m_alive = false;
	game.levelcomplete();
}

Game.prototype.levelcomplete = function()
{	
	game.draw();
	ctx.save();		
	ctx.font = 'italic 40pt Calibri';
	ctx.textBaseline = "top";
	ctx.fillStyle=rgb(0,0,0);	
	ctx.fillText("Well played! The victory is yours!",347,323);
	ctx.fillStyle=rgb(255,150,0);
	ctx.fillText("Well played! The victory is yours!",350,320);
	ctx.restore();
}

Game.prototype.gameLoop = function()
{
	game.update();	
	window.requestAnimationFrame(game.gameLoop);		
}

Game.prototype.update = function()
{
	if (this.player.checkCollision(this.goal) && this.goal.m_alive)
	{		
		game.resolveCollision();
	}
}

Game.prototype.initCanvas = function()
{
	canvas = document.createElement("canvas");	
	ctx = canvas.getContext("2d");
	document.body.appendChild(canvas);
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

Game.prototype.draw = function() 
{
	ctx.fillStyle = rgb(255,255,255);
	ctx.fillRect(0, 0, canvas.width, canvas.height);		
	ctx.lineWidth = 2;
	this.goal.draw();
	this.player.draw();		
}

Game.prototype.checkKeys = function(e)
{
	if (game.goal.m_alive)
	{
		if (e.keyCode == 97)
		{
			game.player.moveLeft();
			game.draw();
		}
		else if (e.keyCode == 119)
		{	
			game.player.moveUp();
			game.draw();
		}
		else if (e.keyCode == 100)
		{
			game.player.moveRight();
			game.draw();
		}
		else if (e.keyCode == 115)
		{
			game.player.moveDown();
			game.draw();
		}
	}
}

/*function for rgb for convenience*/
function rgb(r, g, b) 
{ 
	return 'rgb('+clamp(Math.round(r),0,255)+', '+clamp(Math.round(g),0,255)+', '+clamp(Math.round(b),0,255)+')';
}

/*helper function*/
function clamp(value, min, max)
{ 
	if(max<min) { 
		var temp = min; 
		min = max; 
		max = temp; 
	}
	return Math.max(min, Math.min(value, max)); 	
}