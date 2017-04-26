$(function(){
	$(".picture .small_pic ul li").mouseover(function(){
		var src = $(this).find('img').attr('src')
		$(".picture .big_pic img").attr("src",src)
		
	})
	
	$(".conter ul li:nth-child(5) > span").click(function(){
		console.log(this)
		$(".conter ul li:nth-child(5) > span").removeClass("on")
		$(this).addClass("on")
		
	})
	
	$(".impression ul li span").click(function(){
		if($(this).hasClass("bgs"))
        $(this).removeClass("bgs");
        else
        $(this).addClass("bgs");
	})
	
	
	
	
//检验i的值只能为数字，不能为负数或其他
$(function(){
	$(".conter ul li input").change(function(){
		var inpVal = $("#number").val();
		var reRex = /[^\d]/g;
		if(reRex.test(inpVal)||inpVal<1){
			inpVal = 1 ;
			
		}
		$("#number").val(inpVal);
	})
	
	
	})
	

	
})

   var i;
   window.onload = function(){
   	num = document.getElementById("number")
   	i=num.value
   	console.log(i)
   }
   function add(){
   	i++;
   	num.value = i;
   	console.log(num.value)
   	
   }
   function raduce(){
   	i--;
   	if(i<=1){
   		i=1;
   	}
   	num.value=i
   }



