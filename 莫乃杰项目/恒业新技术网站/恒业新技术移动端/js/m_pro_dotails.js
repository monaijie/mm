/*****************产品展示轮播**************************************/
  $(function(){
	$(document).ready(function(){

	$(window).resize(function(){
	      	 
		var winWidth = $(window).innerWidth();
		$(".pict li").css({"width":winWidth+"px"});
	      	})
	      	
	      	/*获取li的个数*/
	      	var liLin = $(".pict li").length;
	      	/*获取当前的屏宽*/
	      	var winWidth = $(window).innerWidth();
	      	var bool = true;
	      	
	      	 /*设置ul的宽度，即是li的宽度总和*/
	      	$(".pict ul").css({"width":winWidth*liLin+"px"});
	      	 /*设置li的宽度*/
	      	$(".pict li").css({"width":winWidth+"px"});
	      	var a=0;
	         /*手指向左滑动*/
	        $(".pict li").on("swipeleft",function(){	
	        	if(bool){	
	        		   bool= false;
	        			$(".pict ul").animate({marginLeft:-winWidth+"px"},function(){
	        			$(".pict li").eq(0).appendTo(".pict ul");
	        			$(".pict ul").css({"margin-left":0});	        			
	        			bool=true;	        			
	        		})	
	        		a++;
	        		if(a>liLin-1){
	        			a=0;
	        		}	        		
	        		$(".pro_bd li").removeClass().eq(a).addClass("one");
	        	}	        	
	       })
	        
	        
	        /*手指向右滑动时*/
	       $(".pict li").on("swiperight",function(){
	       	
	       	if(bool){
	       		bool = false;
	       		$(".pict li").eq(liLin-1).prependTo(".pict ul");
	       		$(".pict ul").css({"margin-left":-winWidth+"px"}).animate({"marginLeft":0},function(){
	       			bool = true;
	       		})
	       		
	       		a--;
	       		if(a<0){
	       			a=liLin-1;
	       		}
	       		$(".pro_bd li").removeClass().eq(a).addClass("one");
	       	}
	       })
	       	 
			$("a").attr("data-ajax","false");
    		$(".ui-loader").remove();
  })
})()
	
	
	
	
	
	
	
	