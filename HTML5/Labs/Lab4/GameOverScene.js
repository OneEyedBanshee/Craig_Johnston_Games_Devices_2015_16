function GameOverScene(m_title, nextScene)
{		
	Scene.call(this, m_title, nextScene);
}
GameOverScene.prototype = new Scene();

GameOverScene.prototype.render = function()
{
	ctx.font = "72px serif";
	ctx.textAlign = "center";
	ctx.fillText(this.m_title, window.innerWidth / 2, window.innerHeight / 2);
}