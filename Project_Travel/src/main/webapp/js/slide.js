/**
 *  slide.js
 */

$(document).ready(function(){
	
	var movedIndex = 0;
	
	function moveSlide(index){
		movedIndex = index;
		
		var moveLeft = -(index * 960);
		$('#slidePanel').animate({'left':moveLeft}, 'slow');
		
	}
	$('#slidePanel').animate({'left':0}, 'slow');
	
	$('#prevButton').on('click', function(){
		if(movedIndex !=0)
			movedIndex = movedIndex-1;
		
		moveSlide(movedIndex);
	})
	
	$('#nextButton').on('click', function(){
		if(movedIndex !=4)
			movedIndex = movedIndex+1;
		
		moveSlide(movedIndex);
	})

	
	$('.controlButton').each(function(index){
		$(this).hover(
			function(){
				$(this).attr('src','image/controlButton2.png');
			},
			function(){
				$(this).attr('src','image/controlButton1.png');
			}
		);

		$(this).on('click',function(){
			moveSlide(index);
		})
	})
});