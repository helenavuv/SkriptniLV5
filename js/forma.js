
function Student(ime,prezime,jmbag,oib,datum_rod,adresa,pbr,grad)
{
	this.ime=ime;
	this.prezime=prezime;
	this.jmbag=jmbag;
	this.oib=oib;
	this.datum_rod=datum_rod;
	this.adresa=adresa;
	this.pbr=pbr;
	this.grad=grad;
}

function Spremi()
{
	var popunjeno = true;
	$("input").each(function() {
		var element = $(this);
		if (element.val() == "") {
			popunjeno = false;
		}
	});

	if (popunjeno)
	{
		try
		{
			var jmbag = parseInt($("#JMBAG").val());
			var pbr = parseInt($("#Postanski_broj").val());
			var oib = parseInt($("#OIB").val());
		}
		catch(error)
		{
			console.log("Pogreska kod upisa podataka s brojevima");
		}
		
		if (Number.isInteger(jmbag) == false)
		{
			console.log("false");
		}
		if(jmbag>0 && pbr>0 && oib>0 && Number.isInteger(jmbag) && Number.isInteger(pbr) && Number.isInteger(oib))
		{
			var student = new Student($("#Ime").val(),$("#Prezime").val(),$("#JMBAG").val(),$("#OIB").val(),$("#datum_rodenja").val(),$("#Adresa").val(),$("#Postanski_broj").val(),$("#Grad").val());
			console.log(student);
		}
		else
		{
			alert("Pogreska kod upisa podataka s brojevima");
		}


	}
	else
	{
		alert("Nisu popunjena sva polja");
	}
}