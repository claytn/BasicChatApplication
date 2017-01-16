var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('./public'));

io.on('connection', function(socket){
	socket.on('pizza', function(data){
		socket.broadcast.emit('pizza', data);	
	});

	socket.emit('pizza', {date: new Date(), from: 'Server', text: 'Hello, welcome to the chat app.'});
});


http.listen(PORT, function(){
	console.log('Server Started...');
});