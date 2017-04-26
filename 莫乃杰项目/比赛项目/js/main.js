(function($){
	
	
	
	
	$( window ).on( "load", function(){
		//bg($(".index_banner .bd"));
		proShow();
//		profileMain();
//		$(".about_pic").slide({mainCell:".bd ul",effect:"fold",autoPlay:true,interTime:3500});
//		$(".news_pic").slide({mainCell:".bd ul",effect:"fold",autoPlay:true,interTime:3500});

//		(function banner(){
//			var banner = $(".index_banner .bd"),
//				oLi = banner.find("li");
//
//			banner.find("img").hide();
//			bg(banner);
//			var banner_w = banner.width(),
//				banner_h = banner.height(),
//				banner_pro = banner_h/banner_w;
//
//			oLi.each(function(i,n){
//				var oImg = $(this).find("img"),
//					oImg_w = oImg.width(),
//					oImg_h = oImg.height(),
//					oImg_pro = oImg_h/oImg_w;
//
//				if (oImg_pro < banner_pro) {
//					oImg.height(banner_h);
//					oImg_h = oImg.height();
//					oImg_w = Math.floor(banner_h/oImg_pro);
//					oImg.css({"margin-left":-Math.floor((oImg_w-banner_w)/2)}) 
//				}else if(oImg_pro >= banner_pro){
//					oImg.width(banner_w);
//					oImg_w = oImg.width();
//					oImg_h = Math.floor(banner_w/oImg_pro);
//					oImg.css({"margin-top":-Math.floor((oImg_h-banner_h)/2)})  
//				}
//				oImg.show();
//			})
//			$(".index_banner").slide({mainCell:".bd ul",effect:"fold",autoPlay:true,trigger:"click",delayTime:500,interTime:5000,autoPage:"<li></li>",titCell:".hd ul"});
//		})();
	})

	
	var bg = function(obj){
//		var oBg = $(".index_banner"),
//			oImg = oBg.find(".bd img"),
//			win = $(window),
//			win_h = win.height(),
//			win_w = win.width();

//		function resizeFun(){
//			win_h = win.height();
//			win_w = win.width();
//			if(win_h < 768){
//				win_h = 768;
//			}else{
//				win_h = win.height();
//			};
//			if(win_w < 1440){
//				win_w = 1440;
//			}else{
//				win_w = win.width();
//			}
//			obj.css({"width":win_w-320,"height":win_h-180,"border":"3px solid #b98122"});
//		}
//		resizeFun()
//		win.bind('resize',function(){
//			setTimeout(function(){
//				resizeFun()
				//$(".index_banner .bd img").css({"width":win_w-320});
//				$(".index_banner").slide({mainCell:".bd ul",effect:"fold",autoPlay:true,trigger:"click",delayTime:500,interTime:5000,autoPage:"<li></li>",titCell:".hd ul"});
//				$(".index_banner2").slide({mainCell:".bd ul",effect:"fold",autoPlay:true,trigger:"click",delayTime:500,interTime:5000,autoPage:"<li></li>",titCell:".hd ul",prevCell:".pic-prev",nextCell:".pic-next"});
//			},100)
//		}).trigger('resize');
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

//	function profileMain(){
//		var oproShow = $("#profileMain"),
//			oLi = oproShow.find("li"),
//			oImg = oproShow.find("img"),
//			oLiIndex = oLi.length,
//			oleft = 0,
//			otop = 0;
//
//		bg($(".profileMain"))
//		
//		oLi.each(function(i,n){
//			oleft = ((i%4)*25)+"%";
//			otop = (Math.floor(i/4)*50)+"%";
//			$(this).css({"position":"absolute","left":oleft,"top":otop})
//				
//		})
//
//		var oLiW = oLi.width(),
//			oLiH = oLi.height(),
//			oImgW = oImg.width(),
//			oImgH = oImg.height();
//
//		var imgPro = (oImgW-oImgH)/oImgW;
//      var picPro = (oLiW-oLiH)/oLiW;
//      if( imgPro > picPro ){
//      	oImg.height(oLiH+20)
//      }else{
//      	oImg.width(oLiW+20);
//      }
//
//      oLi.on('mouseenter',function(){
//      	$(this).find(".bg").fadeIn(500);
//      	$(this).find(".ch").fadeIn(500);
//      	$(this).find("em").fadeIn(500);
//      	$(this).siblings().find(".bg").fadeOut(500);
//      	$(this).siblings().find(".ch").fadeOut(500);
//      	$(this).siblings().find("em").fadeOut(500);
//      })
//      oproShow.on('mouseleave',function(){
//      	$(this).find(".bg").fadeOut(500);
//      	$(this).find(".ch").fadeOut(500);
//      	$(this).find("em").fadeOut(500);
//      })
//
//	};

})($);