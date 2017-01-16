var PORT = process.env.PORT || 3000;

const express = require('express');
console.log(express.toString());

var app = express();	//creates server
var http = require('http').Server(app);	//
var io = require('socket.io')(http);

app.use(express.static('./public'));

io.on('connection', function(socket){
	//console.log('Got connected for free. At education connection.');
	socket.on('message', function(message){
		console.log('Message Received:', message.text);
		io.emit('message', message);
	});

	socket.emit('message', {
		text: 'Welcome to the Chat Application'
	});
});

http.listen(PORT, function(){
	console.log('Server running on', PORT);
});