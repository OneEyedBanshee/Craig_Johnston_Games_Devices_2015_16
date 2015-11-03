function Player()
{			
	this.xPos = 10;
	this.yPos = 10;
	this.m_size = 10;	

}

Player.prototype.draw = function() 
{
	ctx.clearRect(this.xPos,this.yPos,this.m_size,this.m_size);	
	ctx.fillStyle = rgb(255,0,0);
	ctx.fillRect(this.xPos,this.yPos,this.m_size,this.m_size);	
}

Player.prototype.moveLeft = function()
{
	this.xPos -= 3;		
}

Player.prototype.moveRight = function()
{
	this.xPos += 3;	
}

Player.prototype.moveUp = function()
{
	this.yPos -= 3;		
}

Player.prototype.moveDown = function()
{
	this.yPos += 3;	
}

//The parameter e is the object you want to check is colliding with the player.
Player.prototype.checkCollision = function (e){
 
    var collides=false;     
         
    //do the two bounding boxes overlap?
    if ((this.xPos < e.m_xPos + e.m_size) &&
    (this.xPos + this.m_size > e.m_xPos) &&
    (this.yPos + this.m_size > e.m_yPos) &&
    (this.yPos < e.m_yPos + e.m_size))
    {     
        collides = true;
        console.log("collision!");                 
    }

    return collides;
}