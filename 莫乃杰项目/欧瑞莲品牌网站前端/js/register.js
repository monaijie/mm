$(document).ready(function(){
	
				/**
				 * 进行手机号码法性检查函数 
				 */
				$("#phone").blur(function(){
					var checkPhone = $("#phone").val()
					var phone = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
						if(!phone.test(checkPhone)){
							$('#phoneTip').html('*请填写正确的手机号码')
						}else{
							$('#phoneTip').hide()
						}	
				})
				//认证码不为空
				$("#code").blur(function(){
					var checkCode = $("#code").val()
					var code = /^[a-z0-9_-]{4,16}$/;
						if(!code.test(checkCode)){
							$('#codeTip').html('*请填写正确的验证码')
						}else{
							$('#codeTip').hide()
						}	
				})
				
					//手机认证码不为空
				$("#phone_code").blur(function(){
					var phone_code = $("#phone_code").val()
					var codes = /^[a-z0-9_-]{4,16}$/;
						if(!codes.test(phone_code)){
							$('#phone_codeTip').html('*请填写正确的验证码')
						}else{
							$('#phone_codeTip').hide()
						}	
				})
				
				
				//密码合法性
			
			 $("#password").blur(function(){
			 	var checkPassword = $("#password").val()
			   var password = /^[a-z0-9_-]{4,16}$/;
					if(!password.test(checkPassword)){
						$("#passwordTip").html('*填写正确的密码')
					}else{
						$("#passwordTip").hide()
					}
			 })
			 
			 
			 //检验邮箱
	
				 $("#email").blur(function(){
				 	var checkEmail = $("#email").val()
				   var email = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
						if(!email.test(checkEmail)){
							$("#emailTip").html('*请填写正确的邮箱')
						}else{
							$("#emailTip").hide()
						}
				 })
				 
				 //进行再输入密码法性检查函数 
	
				 $("#password_suer").blur(function(){
				 	 var checkPassword = $("#password").val()
				 	var checkpassword_suer = $("#password_suer").val()				 
				   console.log(checkpassword_suer);
				    console.log(checkPassword);
						if(checkPassword!=checkpassword_suer ||checkpassword_suer=='' ){
							
							$("#password_suerTip").html('*密码不相符')
						}else{
							$("#password_suerTip").hide()
						}
				 })
				 
	////检验提交是否为空
	
	$("#submit").click(function(){
		var checkPhone = $("#phone").val()
		var checkCode = $("#code").val()
		var phone_code = $("#phone_code").val()
		var checkPassword = $("#password").val()
		var checkEmail = $("#email").val()
		var checkpassword_suer = $("#password_suer").val()
		var checked = $("#cheched").prop("checked")
		console.log(checked)
		console.log(checkPhone,checkPassword,checkEmail,checkpassword_suer)
		if(checkPhone== '' || checkCode== '' || phone_code =='' || checkPassword=='' || checkEmail=='' || checkpassword_suer=='' || !checked || checkPassword!=checkpassword_suer){
			alert('亲，请将信息完善后再注册哦')
			return false;
		}else{
			setLocal(checkPhone,checkPassword,checkEmail,checkpassword_suer)
			return true;
			
		}
		
		
	})
	
	//选框
	$("#cheks input").bind("click",function(){
		
		if($(this).is(":checked")){
			
			$(this).parent().addClass("checked");
			}else{
				$(this).parent().removeClass("checked");
			}
	})
		/***设置本地存储***/
   	function setLocal(phone,pwd,email,okpwd){
   		userlogins = 
   		{
   			phone:phone,
   			pwd:pwd,
   			email:email,
   			okpwd:okpwd
   		};
   		localStorage.setItem("userlogins",JSON.stringify(userlogins));
   		
   	}

	
})


   




















