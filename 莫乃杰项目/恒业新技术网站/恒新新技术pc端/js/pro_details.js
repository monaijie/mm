 $(function(){
	/**************产品详情小图还大图*****************/ 
	  var big=$(".pic li");
	  var small=$(".pic_small li");
	  var cursin=0;
	  small.each(function(index, element) {
        big.eq(0).show().siblings(big.not(big).eq(0)).hide();
		$(this).click(function(){
			big.eq(index) .fadeIn().siblings(big.not(big)).fadeOut(500);
			cursin = $(this).index();
			 small.removeClass("active");
             small.eq(cursin).addClass("active");
		})
    });
}) 
	 /*******************产品中心的轮播************************/
	 $(document).ready(function(){
		var bool=true;
			var liLeng=$(".pro_pic li").length;//li的个数
			var liWidth=$(".pro_pic li").eq(0).outerWidth(true);//一个li的宽度
			//alert(liWidth);
			var ulWid=$(".pro_pic ul").css({"width":liLeng*liWidth+"px"});//整个ul的宽度
			//alert(ulWid);
			//alert(liLen);
			for(var i=0;i<liLeng;i++){
				$(".pro_pic li").eq(i).css({"left":i*liWidth+"px"});
			}
			//上一个
			$(".pic_left").click(function(){
				show()
			})
			//下一个
			$(".pic_right").click(function(){
				if(bool){
					bool=false;
					if(liLeng>4){
						for(var i=0;i<liLeng-1;i++){
							$(".pro_pic li").eq(i).animate({"left":liWidth*(i+1)+"px"},function(){
								bool=true;
							})
						}
						$(".pro_pic li").eq(liLeng-1).prependTo(".pro_pic ul").css({"left":-liWidth+"px"}).animate({"left":0+"px"},function(){
							bool=true;
						});	
					}
				}
			})
			 //鼠标停止
			$(".pic_left,.pic_right").mouseover(function(){
				clearInterval(lun)
			})
			
			
			$(".pro_pic li").mouseover(function(){
				clearInterval(lun)
			})
			
			$(".pro_pic li").mouseout(function(){
				lun=setInterval(function(){
					show()
				},3000)
			})
			
			
			$(".pic_left,.pic_right").mouseout(function(){
				lun=setInterval(function(){
					show()
				},3000)
			})
			//轮播函数
			function show(){
				if(bool){
					bool=false;
					if(liLeng>4){
						$(".pro_pic li").eq(0).animate({"left":-liWidth+"px"},function(){
							$(".pro_pic li").eq(0).css({"left":liWidth*(liLeng-1)+"px"}).appendTo(".pro_pic ul");
							bool=true;
						});
						for(var i=1;i<liLeng;i++){
							$(".pro_pic li").eq(i).animate({"left":liWidth*(i-1)+"px"},function(){
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
	
	 
	 
	
 