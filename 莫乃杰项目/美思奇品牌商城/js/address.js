
$(function(){
	$(".checkbox label input").bind("click",function(){
		if($(this).is(":checked")){
			$(this).parent("label").addClass("no");
			}else{
				$(this).parent("label").removeClass("no");
			  	}
	})
})

  