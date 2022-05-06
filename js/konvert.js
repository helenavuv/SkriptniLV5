var euro_u_ostalo = {
	kuna:7.53,
	dolar:1.06,
	forinta:387.71,
	marka:1.95
};



$('button').click(function()
{
	var broj=$('#pretvori').val();
	var valuta1=$("#valute1").val();
	var valuta2=$("#valute2").val();
	var djelitelj=1;
	var faktor=1;

	switch (valuta1) {
    case "kuna":
        djelitelj=7.53;
        break;
    case "dolar":
        djelitelj=1.06;
        break;
    case "forinta":
        djelitelj=387.71;
        break;
    case "marka":
        djelitelj=1.95;
        break;
    case "euro":
        djelitelj=1;
        break;
    default:
        console.log("Valuta 1 nije pronadena");
    }

    switch (valuta2) {
    case "kuna":
        faktor=7.53;
        break;
    case "dolar":
        faktor=1.06;
        break;
    case "forinta":
        faktor=387.71;
        break;
    case "marka":
        faktor=1.95;
        break;
    case "euro":
        faktor=1;
        break;
    default:
        console.log("Valuta 2 nije pronadena");
    }

	var rjesenje = (broj/djelitelj*faktor).toFixed(2);
	$('#rjesenje').val(rjesenje);

});