 $(function(){
			 	$("[data-toggle='popover']").popover();
			 });
				/**
				 * 进行密码法性检查函数 
				 */																		
				var checkPassword = function(v){
					var reg = /^[a-z0-9_-]{4,16}$/;
					if(reg.test(v)){
						$('#passwordTip').popover('hide');
					}else{
						$('#passwordTip').popover('show')
					}
				}
					/**
				 * 进行再输入密码法性检查函数 
				 */			
				var suerPassword = function(v){
					console.log($('#firstnames').val())
					if(v == $('#firstnames').val()){
					
						$('#posswordTip').popover('hide');
					}else{
						$('#posswordTip').popover('show')
					}
				}
				
				
				/**
				 * 进行邮箱法性检查函数 
				 */
				var checkEmail = function(v){
					var email = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
					if(email.test(v)){
						$('#emailTip').popover('hide')
					}else{
						$('#emailTip').popover('show')
					}
				}
				
				
				/**
				 * 进行手机号码法性检查函数 
				 */
				var checkphone = function(v){
					var phone = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
					if(phone.test(v)){
						$('#phoneTip').popover('hide')
					}else{
						$('#phoneTip').popover('show')
					}
				}
				
				/**
				 * 检查地址是否填函数 
				 */
				var checkaddress = function(v){
					var address = document.getElementById("address").value;
					if(address== ''){
						$('#addressTip').popover('show')
					}else{
						$('#addressTip').popover('hide')
					}
				}
												
				//检查表单元素是否有填写，有填写就可以提交表单返回true表示提交表单，false不提交				
				 function checkLogin(){
				 	//定义密码的值
					var passwod = document.getElementById("firstnames").value;
					//定义密码的值
					var posswod = document.getElementById("firstname").value;
					//定义邮箱
					var email = document.getElementById("email").value;
					//定义手机的值
					var phone = document.getElementById("phone").value;
					//定义地址的值
					var address = document.getElementById("address").value;
					var isAutoLogin = document.getElementById("input").checked;
					console.log(isAutoLogin)
					console.log(passwod =='' || posswod =='' || email =='' || phone == '' || address =='')
					if(passwod =='' || posswod =='' || email =='' || phone == '' || address =='' || !isAutoLogin){
						alert("请将信息填完整")
						return false;
					}
					
					setStorage(passwod,posswod,email,phone,address,isAutoLogin);
					return true;
				}		
