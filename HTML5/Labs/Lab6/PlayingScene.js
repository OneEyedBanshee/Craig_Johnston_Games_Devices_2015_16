function PlayingScene(m_title, nextScene)
{		
	Scene.call(this, m_title, nextScene);		
	this.playerSprite = new Image();	
	this.playerSprite.src = "resources/spr_polarBear.png";	
}
PlayingScene.prototype = new Scene();


PlayingScene.prototype.render = function()
{	
	ctx.drawImage(this.playerSprite, (window.innerWidth / 2) - this.playerSprite.width / 2, (window.innerHeight / 2) + this.playerSprite.height / 4);
	ctx.font = "32px serif";
	ctx.textAlign = "center";
	ctx.fillText(this.m_title, window.innerWidth / 2, window.innerHeight / 2);	
}