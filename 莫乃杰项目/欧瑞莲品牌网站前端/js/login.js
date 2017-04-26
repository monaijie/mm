$(document).ready(function(){
//	//检验名字不为空
//	$("#name").blur(function(){
//	var name = $("#name").val()
//	if(name == ''){
//		$("#nameTip").html('*请填写正确的账号')		
//	}else{
//		$("#nameTip").html('')
//	}
// })
//	
//	//密码不为空
//	
//	 $("#password").blur(function(){
//	 	var checkPassword = $("#password").val()
//	   var password = /^[a-z0-9_-]{4,16}$/;
//			if(!password.test(checkPassword)){
//				$("#passwordTip").html('*填写正确的密码')
//			}else{
//				$("#passwordTip").html('')
//			}
//	 })
//	
//	
//	////检验提交是否为空
//	$("#submit").click(function(){
//		var name = $("#name").val();
//		var phone = $("#password").val();
//		
//		if(name== '' || password== '' ){
//			$("#submiTip").html('*请完善信息')
//			return false;
//		}
//	})
	
	$(".from  label input").bind("click",function(){
		
		if($(this).is(":checked")){
			console.log(123)
			$(this).parent().addClass("checked");
			}else{
				$(this).parent().removeClass("checked");
			}
	})
	
	
	
})
