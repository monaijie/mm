
			var i;
		window.onload = function(){
			num = document.getElementById('number')
			i = num.value					
		}
		
		function raduce(){
			console.log(i);
			i--;
			if(i<=1){
				i=1;
			}
			num.value=i
		}
		
		function add(){
		  i++;
		  num.value=i
		}																
		

		
		
    $(function(){
    	 var img = $(".small_pic li img");
		$("ul>li>img").click(function(){						
			var src = $(this).attr("src")
			$(".img").attr("src",src);
		  	cursin = $(this).index();
		   	img.removeClass("on");
            $(this).attr("class","on");	
		})
		
		
		$(".buy_car .buy_number input").change(function(){
			var inpVal = $("#number").val();
			var reRex =/[^\d]/g;
			
			if(reRex.test(inpVal)||inpVal<1){
				inpVal =1;
			}
			$("#number").val(inpVal);
		})
	})
					

