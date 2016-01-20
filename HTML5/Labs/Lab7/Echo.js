var url = "ws://localhost:8080/wstest";
var ws = new WebSocket(url);

ws.onopen = function()
{
	ws.send("Hello World");
}

ws.onclose = function()
{
	
}

ws.onmessage = function(evt)
{
	alert(evt.data);
}