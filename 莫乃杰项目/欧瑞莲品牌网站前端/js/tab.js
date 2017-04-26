/*选项卡*/
$(document).ready(function(){
	
			//详情选项卡
			$(".evaluate li").eq(0).addClass("no");
			$(".tab").hide();
			$(".tab").eq(0).show();
			
			$(".evaluate li").click(function(){
				var index = $(this).index();
				$(".evaluate li").removeClass("no");
				$(".evaluate li").eq(index).addClass("no");
				$(".tab").hide();
				$(".tab").eq(index).show();
			})
			
		
		//评价选项卡
		$(".evaluatess ul li").eq(1).addClass("atte");
			$(".evalu").hide();
			$(".evalu").eq(1).show();
			
			$(".evaluatess li").click(function(){
				var index = $(this).index();
				$(".evaluatess ul li").removeClass("atte");
				$(".evaluatess ul li").eq(index).addClass("atte");
				$(".evalu").hide();
				$(".evalu").eq(index).show();
			})	
			
})         

















































