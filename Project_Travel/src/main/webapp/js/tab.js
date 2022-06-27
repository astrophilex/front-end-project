/**
 * tab.js
 */

$(document).ready(function(){
	
	var $tabContent = $('#tabContent div');
	
	
	var movedIndex = 0;
	
	function moveSlide(index){
		movedIndex = index;
		
		var moveLeft = -(index * 960);
		$('#slidePanel').animate({'left':moveLeft}, 'slow');
		
	}
	$('#tab li').on('click', function(){
		var index = $(this).index();
		
		moveSlide(index);
		$('#tab li').removeClass('selectedItem');
		$(this).addClass('selectedItem');
		
		$tabContent.css('display','none');
		$tabContent.eq(index).css('display','block');
	});
});