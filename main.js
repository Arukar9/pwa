if('serviceWorker' in navigator) {
	console.log('puedes usar eso');

	navigator.serviceWorker.register('./sw.js')
							.then(res => console.log('serviceWorker trabaja bien', res))
							.cath(err => console.log('serviceWorker no registra', err));
}else{
	console.log('no funciona');
}


$(document).ready(function(){
	
	$("#menu a").click(function(e){
		e.preventDefault();

		$("html, body").animate({
			scrollTop: $($(this).attr('href')).offset().top
		});

		return false;
	});
});

