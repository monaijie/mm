/*****放大镜****/
		$(function(){
			
			$(".glass").html("<img />");
			$(".glass").css({"display":"none"});
			var imgsrc;
			$(".big_pic ul li").mouseover(function(){
				$(".glass").stop(true,true).fadeIn(300).css({"z-index":"10"});
				$(".img_mak").stop(true,true).fadeIn(300);
				imgsrc = $(this).find("img").attr("src");			
				$(".glass").find("img").attr("src",imgsrc).css({"position":"absolute","width":"543px"})
			})
			$(".big_pic ul li").mouseout(function(){
				$(".glass").stop(true,true).fadeOut(300);
				$(".img_mak").stop(true,true).fadeOut(300);
			})
			$(".big_pic ul li").mousemove(function(e){
				var imgX = e.pageX;
				var imgY = e.pageY;
				var bigLeft = $(".big_pic ul li").offset().left;
				var bigTop = $(".big_pic ul li").offset().top;
				
				var imgmakLeft = imgX - bigLeft - $(".img_mak").innerWidth()/2;
				var imgmakTop = imgY- bigTop - $(".img_mak").innerHeight()/2;
				
				var dissLeft = $(".big_pic ul li").innerWidth()-$(".img_mak").innerWidth();
				var dissTop  = $(".big_pic ul li").innerHeight()-$(".img_mak").innerHeight()
				if(imgmakLeft<0){
					imgmakLeft = 0;
				}else if(imgmakLeft>dissLeft){
					imgmakLeft = dissLeft;
				}
				
				if(imgmakTop<0){
					imgmakTop = 0
				}else if(imgmakTop>dissTop){
					imgmakTop = dissTop;
				}
				$(".img_mak").css({"left":imgmakLeft+"px","top":imgmakTop+"px"});
				$(".glass img").css({"left":-imgmakLeft*3+"px","top":-imgmakTop*3+"px"})
			})
		
		})
