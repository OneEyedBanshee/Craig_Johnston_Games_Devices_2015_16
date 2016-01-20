from tornado import websocket, web, ioloop, httpserver
import tornado

connections = {}

class WSHandler(tornado.websocket.WebSocketHandler):
	def open(self):		
                connections[self.request.remote_ip] = self
                print(connections)

	def check_origin(self, origin):
		return True

	def on_message(self, message):
		print('message received %s' %message)
		self.sendToAll(message)

	def on_close(self):
		print("Websocket closed")

        def sendToAll(self, message):
                #key is ip and value is the websockethandler
                for value in connections.values():
                        value.write_message(message)	

app= tornado.web.Application([
	#map the handler to the URI named "wstest"
	(r'/wstest', WSHandler),
])
 
if __name__ == '__main__':
	app.listen(8080)
	tornado.ioloop.IOLoop.instance().start()
