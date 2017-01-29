//Handle Socket Listeners
var socket = io();

socket.on('connect', function(){
	console.log('connected to socket.io');
});

socket.on('pizza', function(data){
	$('#messages').append('<p>'+data.text+'</p>').append('<sup>Sent: '+data.time+'</sup>');
});


//Handle Form Submissions
var $form = jQuery('#message-form');
$form.on('submit', function(e){
	e.preventDefault();
	var messageInput = $form.find('input[name=message]');
	if(messageInput.val().length > 0){
	socket.emit('pizza', {
		text: messageInput.val()
	 });
	messageInput.val("");
}
});

