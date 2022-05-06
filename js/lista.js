function Literatura(ime, slika)
{
	this.ime=ime;
	this.slika=slika;
}
var osnove_1=new Literatura('Joseph Mayo, C#, Miš, Zagreb, 2002','img/osnove_1.jpg');
var osnove_2=new Literatura('Kernighan, B.W., Ritchie, D.M.: The C programming language, Prentice hall software series, 1988.','img/osnove_2.jpg');
var skriptni_1=new Literatura('Tatroe, K. MacIntyre, P., Lerdof, R. Programiranje PHP, O’Reilly, 2013','img/skriptni_1.png');
var skriptni_2=new Literatura('Zandstra, M., PHP Objects, Patterns, and Practice, Apress, 2013','img/skriptni_2.jpg');
var skriptni_3=new Literatura('Sklar, D., Trachtenberg, A., PHP Cookbook: Solutions & Examples for PHP Programmers, O’Reilly Media, 2014','img/skriptni_3.jpg');
var skriptni_4=new Literatura('L. Budin, P. Brođanac, Z. Markučič, S. Perić: Napredno rješavanje problema programiranjem u Pythonu, Element, 2013.','img/skriptni_4.jpg');
var web_1=new Literatura('Powers, S., Naučite Javascript, O’Reilly, 2012','img/web_1.jpg');
var web_2=new Literatura('Flanagan, D., JavaScript: The Definitive Guide: Activate Your Web Pages, O’Reilly, 2011','img/web_2.jpg');
var web_3=new Literatura('Cameron, D., HTML5, Javascript & jQuery, Cisdal Publishing, 2013','img/web_3.jpg');

var osnove = [osnove_1,osnove_2];
var skriptni = [skriptni_1,skriptni_2,skriptni_3,skriptni_4];
var web = [web_1,web_2,web_3];



console.log('Osnove:');
osnove.forEach(function(value){
	var dodaj="<li putanja='"+value.slika+"'>"+value.ime+"</li>";
	$("#ubaci_osnove").append(dodaj);
	console.log(value);
});
console.log('skriptni:');
skriptni.forEach(function(value){
	var dodaj="<li putanja='"+value.slika+"'>"+value.ime+"</li>";
	$("#ubaci_skriptne").append(dodaj);
	console.log(value);
});
console.log('web:');
web.forEach(function(value){
	var dodaj="<li putanja='"+value.slika+"'>"+value.ime+"</li>";
	$("#ubaci_web").append(dodaj);
	console.log(value);
});

$('li').click(function(){
	$("#slika").attr("src",$(this).attr('putanja'));
})
