/**
 * 
 */
 
 $(document).ready(function(){
	 $('img[usemap]').rwdImageMaps();
				$('#map_jeju')
				.on('click',function(){
					$('#mapBox img').attr('src','image/map_jeju.png');
					$('#mapmenu').slideDown(1000);
				});
	
				$('#map_jeonrado')
				.on('click',function(){
					$('#mapBox img').attr('src','image/map_jeon.png');
				});
				
				$('#map_kangwondo')
				.on('click',function(){
					$('#mapBox img').attr('src','image/map_kang.png');
				});
				
				$('#map_kyeong')
				.on('click',function(){
					$('#mapBox img').attr('src','image/map_kyeong.png');
				});
				
				$('#map_seoul')
				.on('click',function(){
					$('#mapBox img').attr('src','image/서울경기.png');
				});
				
				$('#map_jeonN')
				.on('click',function(){
					$('#mapBox img').attr('src','image/전북.png');
				});
				
				$('#map_chungS')
				.on('click',function(){
					$('#mapBox img').attr('src','image/충남.png');
				});
				
				$('#map_kyeongN')
				.on('click',function(){
					$('#mapBox img').attr('src','image/경북.png');
				});
				
				$('#closeButton img')
				.on('click',function(){
					$('#mapBox img').attr('src','image/map01.png');
					$('#mapmenu').slideUp(1000);
				});
				
				$('#map_jeju').on('click',function(){
					$('#closeButton').css('visibility','visible');
				});
				
				$('#closeButton img')
				.on('click',function(){
					$('#closeButton').css('visibility','hidden');
					});
			});