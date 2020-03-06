$(document).ready(function(){
    // cuenta cuantas imagenes hay
    var imgItems = $('.slider li').length;
    var imgPos = 1;

    //Agregando paginacion
    for(i=1;i<=imgItems;i++){
        $('.pagination').append('<li><span class="fa fa-circle"></span></li>');
    }
   
    //...............................................

    $('.slider li').hide(); // ocultamos todos los slides
    $('.slider li:first').show();  // Mostramos el primer slide
    $('.pagination li:first').css({'color': '#CD6E2E'}); //Damos estilos al primer itm de la paginacion
    
    //Ejecutamos todas las funciones. Se ejecutan en el momento en el que se carga la pagina

    $('.pagination li').click(pagination);
    $('.right span').click(nextSlider);
    $('.left span').click(prevSlider);

    setInterval(function(){
		nextSlider();
	}, 4000);


    //Funciones...................................


    function pagination(){
       var paginationPos= $(this).index() + 1 //Poscion de la paginacion seleccionada

         $('.slider li').hide(); //Ocultamos todos los slides 
         $('.slider li:nth-child('+ paginationPos +')').fadeIn(); 

        $('.pagination li').css({'color': '#858585'});
        $(this).css({'color': '#CD6E2E'});
        
        imgPos = paginationPos;
    }

	function nextSlider(){
		if( imgPos >= imgItems){imgPos = 1;} 
		else {imgPos++;}

		$('.pagination li').css({'color': '#858585'});
		$('.pagination li:nth-child(' + imgPos +')').css({'color': '#CD6E2E'});

		$('.slider li').hide(); // Ocultamos todos los slides
		$('.slider li:nth-child('+ imgPos +')').fadeIn(); // Mostramos el Slide seleccionado

	}

	function prevSlider(){
		if( imgPos <= 1){imgPos = imgItems;} 
		else {imgPos--;}

		$('.pagination li').css({'color': '#858585'});
		$('.pagination li:nth-child(' + imgPos +')').css({'color': '#CD6E2E'});

		$('.slider li').hide(); // Ocultamos todos los slides
		$('.slider li:nth-child('+ imgPos +')').fadeIn(); // Mostramos el Slide seleccionado
	}

    


});