var wsServer = require('ws').Server;
var wsInstance = new wsServer({
	port: 8081
});
wsInstance.on('connection', function(ws) {
	console.log('client connected');
	wsInstance.on('message', function(message) {
		console.log(message);
		wsInstance.send(message);
	});
});