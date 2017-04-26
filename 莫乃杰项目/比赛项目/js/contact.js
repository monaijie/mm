	
	$(document).ready(function(){
		
		
	//检验名字不为空
	$("#name").blur(function(){
	var name = $("#name").val()
	if(name == ''){
		$("#nameTip").html('*填写正确的名字')		
	}else{
		$("#nameTip").html('')
	}
 })
	
	
		
	//检验邮箱
	
	
	 $("#eamil").blur(function(){
	 	var checkEmail = $("#eamil").val()
	   var email = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
			if(!email.test(checkEmail)){
				$("#eamilTip").html('*填写正确的邮箱')
			}else{
				$("#eamilTip").html('')
			}
	 })
	 
	 //检验手机
	
	  $("#phone").blur(function(){
	  	 var checkphone = $("#phone").val();
	  	
	  	 var phone = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
			if(!phone.test(checkphone)){
				
				$("#phoneTip").html('*填写正确的号码')
			}else{
				$("#phoneTip").html(' ')
			}
	 	})
	 
	})

	$("#name,#eamil,#phone,textarea").focus(function(){
		
		$("#submiTip").html('')
	})
    
	
   ////检验提交是否为空
	$("#submit").click(function(){
		var name = $("#name").val();
		var phone = $("#phone").val();
		var eamil = $("#eamil").val();
		var message = $("#message").val();
		
		if(name== '' || phone== '' || eamil== '' || message== ''){
			$("#submiTip").html('*请完善信息')
			return false;
		}
		
	})
	
			