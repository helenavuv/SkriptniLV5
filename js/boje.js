function PromijeniBoju()
{
	body=$('body');
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	body.css('background-color',color);
	$('h2').text('Boja: '+ color);
}