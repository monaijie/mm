$(document).ready(function(){
			var curent =0;
			var liPic = $("#banners .bd li")
				$("#banners .hd li").each(function(index,element){
				$(this).mouseover(function(){
					console.log(index)
					$("#banners .hd li").removeClass("on");
					$(this).addClass("on")
					var liImg = liPic.eq(index)
					liImg.fadeIn(1000).siblings(liPic.not(liImg)).fadeOut(1000);
					curent = index;
			
				})
			
				
			})
			
			setInterval(function(){

					if(curent>=liPic.length){
						 curent=0;
					}		
 					$("#banners .hd li").eq(curent).trigger("mouseover");	
					 curent++;
			},3000)
	})
		
		