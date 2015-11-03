var canvas;
var ctx;

function main()
{	
	console.log("Hello, world!");
	initCanvas();
	draw();
}

function initCanvas()
{
	canvas = document.createElement("canvas");
	/*ctx is the context that we will draw on*/
	ctx = canvas.getContext("2d");

	document.body.appendChild(canvas);
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

function draw() 
{
	for (i = 0; i < 200; i++)
	{
		var squareWidth = (Math.random() * 100) + 10;
		var randX = Math.random() * (window.innerWidth - squareWidth);
		var randY = Math.random() * (window.innerHeight - squareWidth);

		ctx.fillStyle = rgb(0,0,0);

		ctx.fillRect(randX - 2, randY + 2, squareWidth, squareWidth);

		ctx.fillStyle = rgb(Math.random() * 255,Math.random() * 255,Math.random() * 255);

		ctx.fillRect(randX, randY, squareWidth, squareWidth);		
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