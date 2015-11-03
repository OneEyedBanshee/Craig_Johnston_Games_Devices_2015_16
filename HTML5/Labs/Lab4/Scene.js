function Scene(m_title, nextScene)
{		
	this.m_title = m_title;
	this.nextScene = nextScene;		
	console.log(this);
}

Scene.prototype.start = function()
{
	console.log("started scene");
}

Scene.prototype.stop = function()
{
	console.log("stopped scene");
}

Scene.prototype.render = function()
{
	ctx.font = "48px serif";
	ctx.textAlign = "center";
	ctx.fillText("Menu Screen", window.innerWidth / 2, window.innerHeight / 2);
}

Scene.prototype.update = function()
{
	
}