$("li a").click(function(event){
	event.preventDefault();
	if($(this).data('seleccion') != null){
		if($(this).data('seleccion') != 'contacto')
			$('#contenedor').load('selecciones/'+$(this).data('seleccion')+'.html')
		else $('#contenedor').load($(this).data('seleccion')+'.html')
	}
})

$('#contact_form').submit(function(event){
	console.log(event)
	event.preventDefault()
})

