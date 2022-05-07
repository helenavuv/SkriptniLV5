$("select").change(function(){
	$("input").attr('type',$("select").val());
});

function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

function Spremi()
{
    var data = $("input").val()
    var data = {podatak:data};

   var jsonData = JSON.stringify(data); //tip+":"+podatak

    download(jsonData, 'podatak.json', 'text/json');

}