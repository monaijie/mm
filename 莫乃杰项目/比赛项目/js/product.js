(function($){

	
	$( window ).on( "load", function(){
		proShow();

	})

	
	var bg = function(obj){	
	}	
	function proShow(){
		var oproShow = $("#proShow"),
			oLi = oproShow.find("li"),
			oLiIndex = oLi.length,
			num = 0;

		oproShow.find("img").hide();
		bg($(".picList"));
		var box_w = oproShow.width();
		var banner_w = oproShow.width()*0.30,
			banner_h = oproShow.height(),
			banner_pro = banner_h/banner_w;

		oLi.each(function(i,n){
			$(this).css({"position":"absolute","left":(25*i)+"%"});
			var oImg = $(this).find("img"),
					oImg_w = oImg.width(),
					oImg_h = oImg.height(),
					oImg_pro = oImg_h/oImg_w;

				if (oImg_pro < banner_pro) {
					oImg.height(banner_h);
					oImg_h = oImg.height();
					oImg_w = Math.floor(banner_h/oImg_pro);
					oImg.css({"margin-left":-Math.floor((oImg_w-banner_w)/2)}) 
				}else if(oImg_pro >= banner_pro){
					oImg.width(banner_w);
					oImg_w = oImg.width();
					oImg_h = Math.floor(banner_w/oImg_pro);
					//oImg.css({"margin-top":Math.floor((oImg_h-banner_h)/2)})  
				}
				oImg.show();
				console.log("oImg_h:"+oImg_h+"  banner_h:"+banner_h+"  oImg_w:"+oImg_w+"  margin-top:"+(Math.floor((oImg_h-banner_h)/2)))
		})
		oLi.on('mouseenter',function(){
			var i = $(this).index();
			if(i == 0){
				num = "0";
			}else if(i == oLiIndex-1){
				num = "-5%";
			}else{
				num = "-2.5%";
			}
			$(this).addClass("on").animate({
				"width":"30%",
				"margin-left":num
			}).siblings().removeClass("on").animate({
				"width":"25%",
				"margin-left":0
			});
		})
		oproShow.on('mouseout',function(){
			oLi.css({"width":"25%","margin-left":0}).siblings().removeClass("on")
		})
	}


})($);