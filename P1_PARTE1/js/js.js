$(document).ready(() =>{
	$('#contenedor').load('ejemplos.html')
})

$("li a").click(function(event){
	event.preventDefault();
	if($(this).data('item') != null){
		$('#contenedor').load($(this).data('item')+'.html')
	}
})