function PlayingScene(m_title, nextScene)
{		
	Scene.call(this, m_title, nextScene);	
}
PlayingScene.prototype = new Scene();

PlayingScene.prototype.render = function()
{
	ctx.font = "32px serif";
	ctx.textAlign = "center";
	ctx.fillText(this.m_title, window.innerWidth / 2, window.innerHeight / 2);
}