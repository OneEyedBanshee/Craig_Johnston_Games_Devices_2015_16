function Goal()
{			
	this.m_xPos = 0;
	this.m_yPos = 0;
	this.m_size = 10;	
	this.m_alive = true;
	this.test();
	this.spawn();	
}

Goal.prototype.test = function()
{
	console.log("goaltest");
}

Goal.prototype.draw = function() 
{	
	if (this.m_alive)
	{
		ctx.clearRect(this.m_xPos + ctx.lineWidth, this.m_yPos +  ctx.lineWidth, this.m_size +  ctx.lineWidth, this.m_size +  ctx.lineWidth)
		ctx.strokeStyle = rgb(0, 200, 0);
		ctx.strokeRect(this.m_xPos + ctx.lineWidth, this.m_yPos +  ctx.lineWidth, this.m_size +  ctx.lineWidth, this.m_size + ctx.lineWidth)
	}	
}

Goal.prototype.spawn = function()
{
	this.m_xPos = Math.random() * 800 - (this.m_size + 8) + 10;
	this.m_yPos = Math.random() * 720 - (this.m_size + 8) + 10;
}