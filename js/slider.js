
var slika = $("#slika");
var id=slika.attr("data-slika-id")



function Prev()
{
	if(id==1)
	{
		id=5;
	}
	else
	{
		id=id-1;
	}

	var nova_putanja = 'img/slider_'+id+'.jpg';

	slika.attr("src",nova_putanja);
	slika.attr("data-slika-id",id);
}

function Next()
{
	if(id==5)
	{
		id=1;
	}
	else
	{
		id++;
	}

	var nova_putanja = 'img/slider_'+id+'.jpg';

	slika.attr("src",nova_putanja);
	slika.attr("data-slika-id",id);

}