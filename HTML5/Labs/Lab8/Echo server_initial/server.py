from tornado import websocket, web, ioloop, httpserver
import tornado
import json

connections = {}

#States
WAITING_FOR_PLAYERS="Waiting for players"
STARTING_GAME="Game is starting"
gameState=WAITING_FOR_PLAYERS

class WSHandler(tornado.websocket.WebSocketHandler):
    def open(self):
                
                print(connections)

    def check_origin(self, origin):
        return True

    def on_message(self, message):
        
        global gameState
     
        data = json.loads(message)         
        type = data['type']
        
        if type == "join" and len(connections) < 2:
            connections[self.request.remote_ip] = self
            if len(connections) == 2:
                gameState = STARTING_GAME
            self.messageSelf("gameState", gameState)                
        else:
            self.write_message("Sorry, session is full.")
        
        #print('message received %s' %message)        
        #self.sendToAllButPlayer(self.request.remote_ip, message)
        
    def messageSelf(self, type, data):
        msg=dict()
        msg["type"]=type; #set your type here
        msg["data"]=data; #set your message data here
        msg=json.dumps(msg)
        print(msg)
        self.write_message(msg)
        

    def on_close(self):
        print("Websocket closed")
        connections.pop(self.request.remote_ip, None)
        print(connections)

    def sendToAll(self, message):
            #key is ip and value is the websockethandler
            for value in connections.values():
                    value.write_message(message)

    def sendToAllButPlayer(self, player_ip, message):
    
        
        
        
        
        for key, value in connections.items():
            if(key != player_ip):
                value.write_message(message)

app= tornado.web.Application([
    #map the handler to the URI named "wstest"
    (r'/wstest', WSHandler),
])
 
if __name__ == '__main__':
    app.listen(8080)
    tornado.ioloop.IOLoop.instance().start()
