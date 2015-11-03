function MenuScene(m_title, nextScene)
{		
	Scene.call(this, m_title, nextScene);
}
MenuScene.prototype = new Scene();

MenuScene.prototype.render = function()
{
	ctx.font = "64px serif";
	ctx.textAlign = "center";
	ctx.fillText(this.m_title, window.innerWidth / 2, window.innerHeight / 2);
}