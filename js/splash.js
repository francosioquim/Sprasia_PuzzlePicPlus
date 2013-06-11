var load_once = 0;

function removeSplashScreen() {
	if (load_once == 0) {
		setTimeout(function() {
		$('#splashscreen').fadeOut('slow');
		;},3000);
		load_once = 1;
	}

}
 