 $(function(){						  	
	  	var show = function(){
	  	var len1 = $(".pro_list .gou label input").length;
			var len2 = $(".pro_list .gou label input:checked").length;
			return len1-len2;
			}
	  	
	  	
			$(".pro_list .gou label input").bind("click",function(){
				if(!show()){
						$(".allgou label").addClass("on")
					}else{
								$(".allgou label").removeClass("on")
					}
					if($(this).is(":checked")){
					$(this).parent("label").addClass("on");
					}else{
						$(this).parent("label").removeClass("on");
	  		}
	  	})
	})
		
	
