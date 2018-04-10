$("#login").click(function(event){
	event.preventDefault();
	$('#contenido').load($(this).data('login.html'))
})
