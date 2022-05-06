$("select").change(function(){
	$("input").attr('type',$("select").val());
});

function Spremi()
{
	var value=$("input").val()
	var data={podatak:value};
	var json = JSON.stringify(data);
	console.log(json);
}