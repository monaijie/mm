$(function(){
	      $(document).ready(function(){
	      	/*****************banner图轮播图效果*********************/
	      	$(window).resize(function(){
	      	 
						var winWidth = $(window).innerWidth();
						$(".banner li").css({"width":winWidth+"px"});
	      	})
	      	
	      	/*获取li的个数*/
	      	var liLin = $(".banner li").length;
	      	/*获取当前的屏宽*/
	      	var winWidth = $(window).innerWidth();
	      	var bool = true;
	      	 /*设置ul的宽度，即是li的宽度总和*/
	      	$(".banner ul").css({"width":winWidth*liLin+"px"});
	      	 /*设置li的宽度*/
	      	$(".banner li").css({"width":winWidth+"px"});
	      	
	         /*手指向左滑动*/
	        $(".banner li").on("swipeleft",function(){	
	        	if(bool){	
	        		   bool= false;
	        			$(".banner ul").animate({marginLeft:-winWidth+"px"},function(){
	        			$(".banner li").eq(0).appendTo(".banner ul");
	        			$(".banner ul").css({"margin-left":0});
	        			bool=true;
	        		})	        		
	        	}	        	
	       })
	        
	        
	        /*手指向右滑动时*/
	       $(".banner li").on("swiperight",function(){
	       	
	       	if(bool){
	       		bool = false;
	       		$(".banner li").eq(liLin-1).prependTo(".banner ul");
	       		$(".banner ul").css({"margin-left":-winWidth+"px"}).animate({"marginLeft":0},function(){
	       			bool = true;
	       		})
	       	}
	       })
	       
	       
	      function show(){
	       	 if(bool){	
	        		   bool= false;
	        			$(".banner ul").animate({marginLeft:-winWidth+"px"},function(){
	        			$(".banner li").eq(0).appendTo(".banner ul");
	        			$(".banner ul").css({"margin-left":0});
	        			bool=true;
	        		})	        		
	        	}	     
	       	
	       }
	      	 setInterval(show,3000);	    	   
			$("a").attr("data-ajax","false");
    		$(".ui-loader").remove();
  })
	})
















