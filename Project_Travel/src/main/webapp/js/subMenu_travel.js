/**
 * subMenu_travel.js
 */
 
 $(document).ready(function() {
	//메뉴 항목에 마우스 올렸을 때 메뉴 항목 보이게
	$('#mainMenuBox li').on({
				mouseover:function(){
					$('#subMenuBox').css('visibility','visible');
				},
				mouseout:function(){
					$('#subMenuBox').css('visibility','hidden');
				}
				});
				
				
	$('#subMenuBox').on({
	mouseover:function(){
		$('#subMenuBox').css('visibility','visible');
	},
	mouseout:function(){
		$('#subMenuBox').css('visibility','hidden');
	}
	});
});

	
	