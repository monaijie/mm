
			$(function(){
	      /*****************banner图轮播图效果*********************/
		var winW = $(window).width();
			var winW = $(window).width();
			var liLen = $(".banner .banner_bd li").length;
			$(".banner .banner_bd").css({"width":winW*liLen+"px"});
			$(".banner .banner_bd li").width(winW+"px");
			 var a = 0;
			$(".banner .banner_hd li").eq(0).addClass("actie");
			

			$(".banner .banner_hd li").click(function(){
				a = $(this).index();
				$(".banner .banner_bd").animate({"left":-winW*a+"px"},700);
				$(".banner .banner_hd li").removeClass("actie").eq(a).addClass("actie");
			})

			$(".banner").mouseover(function(){
				clearInterval(lun);
			})
			$(".banner").mouseout(function(){
				lun = setInterval(show,3000);
			})
			
			
			function show(){
				a = a + 1;
				if(a>liLen-1){
					a = 0;
				}
				console.log(a)
				$(".banner .banner_bd").animate({"left":-winW*a+"px"},700);
				$(".banner .banner_hd li").removeClass("actie").eq(a).addClass("actie");
			}
			var lun = setInterval(show,3000);			
	
	})
	
	