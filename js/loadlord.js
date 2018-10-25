var l1;
var l2;
var r1;
var r2;

l1 = random();

l2 = random();

r1 = random();

r2 = random();


var choice;
var endr;
function random() {
	choice = Math.random();
	endr =  Math.floor(Math.random() *100) +10; 
	endr = endr;
	endr = "+="+endr+"px";
	return endr;
}
var widd;

$(document).ready(function(){

	$("#loadlord").animate({height: "-20vw"},1000);
    $("#dmdlc1").animate({

		height: l1
		}, 500,function(){
	});
	$("#dmdlc2").animate({
		height: l2
		}, 500,function(){
	});
	$("#dmdrc1").animate({
		height: r1
		}, 500,function(){
	});
	$("#dmdrc2").animate({
		height: r2
		}, 500,function(){
	});
	
	widd = $(window).width();
	$("#work1").css({"height":widd/10, "width":widd/10});
	$("#work2").css({"height":widd/10, "width":widd/10});
	$("#work3").css({"height":widd/10, "width":widd/10});
	$("#work4").css({"height":widd/10, "width":widd/10});
	$("#work5").css({"height":widd/10, "width":widd/10});
	
});