$(function(){
	      /*****************banner图轮播图效果*********************/
		var winW = $(window).width();
			var winW = $(window).width();
			var liLen = $(".index_banner .banner li").length;
			$(".index_banner .banner").css({"width":winW*liLen+"px"});
			$(".index_banner .banner li").width(winW+"px");
			 var a = 0;
			$(".index_banner .banner_bottom li").eq(0).addClass("on");
			

			$(".index_banner .banner_bottom li").click(function(){
				a = $(this).index();
				$(".index_banner .banner").animate({"left":-winW*a+"px"},700);
				$(".index_banner .banner_bottom li").removeClass("on").eq(a).addClass("on");
			})

			$(".index_banner").mouseover(function(){
				clearInterval(lun);
			})
			$(".index_banner").mouseout(function(){
				lun = setInterval(show,3000);
			})
			
			
			function show(){
				a = a + 1;
				if(a>liLen-1){
					a = 0;
				}
				console.log(a)
				$(".index_banner .banner").animate({"left":-winW*a+"px"},700);
				$(".index_banner .banner_bottom li").removeClass("on").eq(a).addClass("on");
			}
			var lun = setInterval(show,3000);			
	
	})
	
/**********************产品展示轮播图效果**********************************/	
	$(document).ready(function(){
		var bool=true;
			var liLeng=$(".pic li").length;//li的个数
			var liWidth=$(".pic li").eq(0).outerWidth(true);//一个li的宽度
			//alert(liWidth);
			var ulWid=$(".pic ul").css({"width":liLeng*liWidth+"px"});//整个ul的宽度
			//alert(ulWid);
			//alert(liLen);
			for(var i=0;i<liLeng;i++){
				$(".pic li").eq(i).css({"left":i*liWidth+"px"});
			}
			//上一个
			$(".Product_right").click(function(){
				show()
			})
			//下一个
			$(".Product_left").click(function(){
				if(bool){
					bool=false;
					if(liLeng>4){
						for(var i=0;i<liLeng-1;i++){
							$(".pic li").eq(i).animate({"left":liWidth*(i+1)+"px"},function(){
								bool=true;
							})
						}
						$(".pic li").eq(liLeng-1).prependTo(".pic ul").css({"left":-liWidth+"px"}).animate({"left":0+"px"},function(){
							bool=true;
						});	
					}
				}
			})
			 //鼠标停止
			$(".Product_left,.Product_right").mouseover(function(){
				clearInterval(lun);
			})
			
			$(".pic li").mouseover(function(){
				clearInterval(lun);
			})
			
			
			$(".pic li").mouseout(function(){
				lun=setInterval(function(){
					show()
				},3000)
			})
			
			$(".Product_left,.Product_right").mouseout(function(){
				lun=setInterval(function(){
					show()
				},3000)
			})
			//轮播函数
			function show(){
				if(bool){
					bool=false;
					if(liLeng>4){
						$(".pic li").eq(0).animate({"left":-liWidth+"px"},function(){
							$(".pic li").eq(0).css({"left":liWidth*(liLeng-1)+"px"}).appendTo(".pic ul");
							bool=true;
						});
						for(var i=1;i<liLeng;i++){
							$(".pic li").eq(i).animate({"left":liWidth*(i-1)+"px"},function(){
								bool=true;
							})
						}
					}
				}
			}
			
			//记时器，自动轮播
			var lun=setInterval(function(){
			show()
			},3000)	
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	