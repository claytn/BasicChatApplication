var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.use(express.static('./public'));

//listen for connection
io.on('connection', function(socket){
	//when message received return message to everyone, but sender.
	socket.on('pizza', function(data){
		//use broadcast.emit to send it to everyone, but you.
		io.emit('pizza', data);	
	});

});

http.listen(PORT, function(){
	console.log('Server Started on port:', PORT);
});