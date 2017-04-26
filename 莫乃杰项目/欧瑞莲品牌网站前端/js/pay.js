					
		$("#ply").click(function(){
			var bool =	confirm('亲，你确定要选用此种支付方式吗?')
				if(bool){
					$(".mak").show();						
				}else{
					$(".mak").hide();
				}
				
		})
		
		//检验密码是否正确
		$("#password").blur(function(){
	 		var checkPassword = $("#password").val()
	 	  var passwords = /^[a-z0-9_-]{4,16}$/;
			if(!passwords.test(checkPassword)||checkPassword==""){
			 	bool =	confirm('亲，要继续填写正确的密码吗？')
			 	if(bool){
			 		$(".mak").show();
			 	}else{
			 		window.location.href = "pay_failure.html";
			 	}
			 
			}
						
		 })
		$("#submit").click(function(){
			
			var passwords = $("#password").val();						
				if(passwords != ""){						
					window.location.href = "pay_failure.html";
					return true
				}else{
					var bools = confirm("请先输入密码")
					if(bools){
						$(".mak").show();
					}else{
						window.location.href = "pay_failure.html";
					}
					
				}
			
		})
		


	$(".mg  label input").bind("click",function(){
		$(".mg  label").removeClass("checked")
		if($(this).is(":checked")){
			$(this).parent().addClass("checked");
			}else{
				$(this).parent().removeClass("checked");
			}
	})
	


















