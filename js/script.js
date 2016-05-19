var ancho_navegador = $(window).width();
var alto_navegador = $(window).height();

$(document).on("click",".texto_inicio" ,function() { 
	$(".texto_inicio").stop().animate({top: "-50%"}, 2000);
	if (alto_navegador < 805  ){
		$(".tutorial").stop().animate({top: "10%"}, 2000, function() {
				
				$(".tutorial").append('<embed src="media/flash.swf" width="649" height="383"></embed>');
				var tutorial_time
				clearTimeout(tutorial_time)
				tutorial_time = setTimeout(function(){$(".tutorial").attr('href', 'javascript:void(0);');$(".tutorial").addClass('tutorial_btn_activo');}, 6500);
			});
	} else if (alto_navegador < 820  ) {
		$(".tutorial").stop().animate({top: "15%"}, 2000, function() {
			$(".tutorial").append('<embed src="media/flash.swf" width="649" height="383"></embed>');
			var tutorial_time
			clearTimeout(tutorial_time)
			tutorial_time = setTimeout(function(){$(".tutorial").attr('href', 'javascript:void(0);');$(".tutorial").addClass('tutorial_btn_activo');}, 6500);
		});
	} else {
		$(".tutorial").stop().animate({top: "22%"}, 2000, function() {
			$(".tutorial").append('<embed src="media/flash.swf" width="649" height="383"></embed>');
			var tutorial_time
			clearTimeout(tutorial_time)
			tutorial_time = setTimeout(function(){$(".tutorial").attr('href', 'javascript:void(0);');$(".tutorial").addClass('tutorial_btn_activo');}, 6500);
		});
	}
});