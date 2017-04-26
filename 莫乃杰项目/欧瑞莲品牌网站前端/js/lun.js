
	$(function() {
		//产品轮播
		bool = true;
		var liList = $(".pissss ul li").length//获取li的个数
			//	alert(liList)
		var liWidth = $(".pissss ul li").eq(0).outerWidth(true); //一个li的宽度
		var ulWidth = $(".pissss ul").css({
			"width": liList * liWidth + "px"
		}); //整个ul的宽度
		var timts = null;
		//上一个
		$(".pissss ul li").eq(1).find("span").addClass("mo")//默认中间的图片无阴影
		//向右移动
		$(".nextt").click(function(){
			if(bool){
				bool= false;
				$(".pissss ul").animate({"marginLeft":-liWidth+"px"},function(){ // 整个ul向左移动一li的宽度                
					$(".pissss ul").css({"marginLeft":0+"px"});//个ul恢复到原来的位置
					$(".pissss ul li").eq(0).appendTo(".pissss ul");//第一过热li回掉到ul的后面
					bool= true;
				})
				$(".pissss ul li").find("span").removeClass("mo")//将mo的样式去除
				$(".pissss ul li").eq(2).find("span").addClass("mo")//对第二歌li添加mo样式
				
			}
		})
		
		$(".pre").click(function() {//向左引动

			show();
		})
		//鼠标上来停止轮播
		$(".pissss ul").mouseover(function(){
			timts = clearInterval(timts);
		})
		
		$(".pre , .nextt").mouseover(function(){
			timts = clearInterval(timts);
		})
		//鼠标离开始轮播
		$(".pissss ul").mouseout(function(){
			timts = setInterval(show,3000)
		})
		
		$(".pre , .nextt").mouseout(function(){
			timts = setInterval(show,3000)
		})
		
		function show() {
			if(bool) {
				bool = false;
				$(".pissss ul").css({
					"marginLeft": -liWidth + "px"
				});
				$(".pissss ul li").eq(liList - 1).prependTo($(".pissss ul"));
				$(".pissss ul").animate({
					"marginLeft": 0 + "px"
				}, function() {

					bool = true
				});
				$(".pissss ul li").find("span").removeClass("mo")
				$(".pissss ul li").eq(1).find("span").addClass("mo")
			}

		}
		
		
		timts = setInterval(show, 3000)

	})

