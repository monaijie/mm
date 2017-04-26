/*****************产品展示轮播**************************************/
  $(function(){
	$(document).ready(function(){

	$(window).resize(function(){
	      	 
		var winWidth = $(window).innerWidth();
		$(".product_list li").css({"width":winWidth+"px"});
	      	})
	      	
	      	/*获取li的个数*/
	      	var liLin = $(".product_list li").length;
	      	/*获取当前的屏宽*/
	      	var winWidth = $(window).innerWidth();
	      	var bool = true;
	      	
	      	 /*设置ul的宽度，即是li的宽度总和*/
	      	$(".product_list ul").css({"width":winWidth*liLin+"px"});
	      	 /*设置li的宽度*/
	      	$(".product_list li").css({"width":winWidth+"px"});
	      	var a=0;
	         /*手指向左滑动*/
	        $(".product_list li").on("swipeleft",function(){	
	        	if(bool){	
	        		   bool= false;
	        			$(".product_list ul").animate({marginLeft:-winWidth+"px"},function(){
	        			$(".product_list li").eq(0).appendTo(".product_list ul");
	        			$(".product_list ul").css({"margin-left":0});	        			
	        			bool=true;	        			
	        		})	
	        		a++;
	        		if(a>liLin-1){
	        			a=0;
	        		}	        		
	        		$(".product_bd li").removeClass().eq(a).addClass("active");
	        	}	        	
	       })
	        
	        
	        /*手指向右滑动时*/
	       $(".product_list li").on("swiperight",function(){
	       	
	       	if(bool){
	       		bool = false;
	       		$(".product_list li").eq(liLin-1).prependTo(".product_list ul");
	       		$(".product_list ul").css({"margin-left":-winWidth+"px"}).animate({"marginLeft":0},function(){
	       			bool = true;
	       		})
	       		
	       		a--;
	       		if(a<0){
	       			a=liLin-1;
	       		}
	       		$(".product_bd li").removeClass().eq(a).addClass("active");
	       	}
	       })
	       	 
			$("a").attr("data-ajax","false");
    		$(".ui-loader").remove();
  })
})()
	
	
	
	
	