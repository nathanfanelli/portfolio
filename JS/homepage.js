/*-- Smooth Scroll --*/
$('.navbar a').on('click', function(e){
	if(this.hash !== ''){
		e.preventDefault();

		const hash = this.hash;

		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 1000);
	}
});

$('.header-content a').on('click', function(e){
	if(this.hash !== ''){
		e.preventDefault();

		const hash = this.hash;

		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 1000);
	}
});

$('.back').on('click', function(e){
	if(this.hash !== ''){
		e.preventDefault();

		const hash = this.hash;

		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 1000);
	}
});
/*-- End Smooth Scroll --*/


/*-- Scroll Up Button --*/
$(document).ready(function(){ 

	$(window).scroll(function(){
		if ($(this).scrollTop() > 700) {
			$('#scrollup').fadeIn();
		} else {
			$('#scrollup').fadeOut();
		}
	}); 

	$('#scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 500);
		return false;
	});
});
/*-- End Scroll Up Button --*/


/*-- WOW --*/