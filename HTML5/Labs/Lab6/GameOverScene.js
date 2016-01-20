function GameOverScene(m_title, nextScene)
{		
	Scene.call(this, m_title, nextScene);	

	this.animatedSprite1 = new Animation("resources/spr_alienDeath.png", 0.06, new Rectangle(0,0, 125, 115), new Rectangle(10,10, 135, 125));
	this.animatedSprite2 = new Animation("resources/spr_alienDeath.png", 0.01, new Rectangle(0,0, 125, 115), new Rectangle(200,400, 125, 115));
}
GameOverScene.prototype = new Scene();

GameOverScene.prototype.update = function()
{
	this.animatedSprite1.update();	
	this.animatedSprite2.update();
}

GameOverScene.prototype.render = function()
{
	this.animatedSprite1.animate();
	this.animatedSprite2.animate();
	ctx.font = "72px serif";
	ctx.textAlign = "center";
	ctx.fillText(this.m_title, window.innerWidth / 2, window.innerHeight / 2);
}

