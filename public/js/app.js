var socket = io();

socket.on('connect', function(){
	console.log('connected to socket.io');
});

socket.on('pizza', function(data){
	console.log(data.text);
	//socket.emit('pizza', {text: "You've got mail."});
});

function sendMessage(){
	var message = document.getElementById('message').value;
	document.getElementById('message').value = "";
	socket.emit('pizza', {text:message});
}