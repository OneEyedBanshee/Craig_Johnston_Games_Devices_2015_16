function Animation(texturePath, speed, srcRect, destRect)
{		
	this.spriteSheet = new Image();
	this.spriteSheet.src = texturePath;		
	this.frameNumber = 0;
	this.timer = 0;	
	this.previousTime = Date.now() / 1000;
	this.timeDifference = 0;
	this.sourceRect = srcRect;
	this.destinationRect = destRect;
	this.animationSpeed = speed;	
}

Animation.prototype.update=function()
{
	var currentTime = Date.now() / 1000;   
	this.timeDifference = currentTime - this.previousTime; 		

	this.timer += this.timeDifference;
 	console.log(this.timer);

 	if (this.timer > this.animationSpeed)
 	{
 		if (this.frameNumber < 15)
 		{
 			this.frameNumber ++;
 		}
 		else
 		{
 			this.frameNumber = 0;
 		}

 		this.timer = 0;
 	}

 	this.previousTime = currentTime;
}

Animation.prototype.animate=function()
{
 	//drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight); 	

  	// Draw slice
  	ctx.drawImage(this.spriteSheet,
                this.frameNumber * this.sourceRect.width, this.sourceRect.yPos, 
                this.sourceRect.width, this.sourceRect.height, 
                this.destinationRect.xPos, this.destinationRect.yPos, 
                this.destinationRect.width, this.destinationRect.height);  	
}