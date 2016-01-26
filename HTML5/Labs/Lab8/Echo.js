var url = "ws://149.153.102.70:8080/wstest";
var ws = new WebSocket(url);
var player={ x : 1, y : 1};


ws.onopen = function()
{
    var message = {};
    message.type = "join";
    ws.send(JSON.stringify(message));
}

function sendMessage(message)
{    
    ws.send(message);
    return "I exist, am I defined?";
}

ws.onclose = function()
{
    
}

ws.onmessage = function(evt)
{
    var data = JSON.parse(evt.data);
    console.log("type: " + data.type + " data: " + data.data); 
}

window.addEventListener("click", function()
{
    ws.send(JSON.stringify(player));
    });