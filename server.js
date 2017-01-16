var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('./public'));

io.on('connection', function(){
	console.log('user connected');
});

http.listen(PORT, function(){
	console.log('Server Started...');
});