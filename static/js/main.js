$(document).ready(function(){
    // ###### Toggle top logo site ###### 
	$('.script-open').on('click',function(){
		var Activation = $(this).attr('data-open');
		$(this).parent().toggleClass(Activation);
		$(this).parent().children('.script-open-expand').slideToggle(100);
	});
});