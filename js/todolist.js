var gumb=$("button");

$("i").click(function()
{
	$(this).parent().empty();

})

gumb.click(function()
{
	var zadatak=$("#zadatak").val()
	var dodaj='<li><input type="checkbox" class="checkbox"><i class="fa fa-trash" aria-hidden="true"></i></i>'+zadatak+'</li>';
	$("ul").append(dodaj);

	$("i").click(function()
	{
		$(this).parent().empty();
	});
});

$("ul").on('click', 'li', function() {
  $(this).toggleClass('strike');
});

