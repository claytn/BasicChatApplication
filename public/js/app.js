//Handle Socket Listeners
var socket = io();

socket.on('connect', function(){
	console.log('connected to socket.io');
});

socket.on('pizza', function(data){
	console.log(data.text);
});


//Handle Form Submissions
var $form = jQuery('#message-form');
$form.on('submit', function(e){
	e.preventDefault();
	var messageInput = $form.find('input[name=message]');
	socket.emit('pizza', {
		text: messageInput.val()
	 });
	messageInput.val("");
});

