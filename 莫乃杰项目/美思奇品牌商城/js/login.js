
										
												
			 $(function(){
			 	$("[data-toggle='popover']").popover();
			 });
						
				/**
				 * 进行登录密码法性检查函数 
				 */																		
				var checkPassword = function(v){
					var reg = /^[a-z0-9_-]{4,16}$/;
					if(reg.test(v)){
						$('#passwordTip').popover('hide');
					}else{
						$('#passwordTip').popover('show')
					}
				}
				
				//检查表单元素是否有填写，有填写就可以提交表单返回true表示提交表单，false不提交
				
				 function checkLogin(){
					var namev = document.getElementById("name").value;
					var passwordv = document.getElementById("password").value;
					var codv = document.getElementById("cod").value;
					
					if(namev =='' || passWord =='' || codv ==''){
						alert("请将信息填完整再登录")
						return false;
					}
					var isAutoLogin = document.getElementById("isAutoLogin").checked;
					setStorage(namev,passwordv,codv,isAutoLogin);
					return true;
				}	
				
				
				
	
					//设置cookie
				var setStorage = function(name,password,isAutoLogin){
					if(isAutoLogin){
						var userLoginInfo = {
							name:name,
							password:password,
							isAutoLogin:isAutoLogin
						};
						localStorage.setItem("userLoginInfo",JSON.stringify(userLoginInfo));
					}
				}
				
				//获取cookie
				var loadStorage = function(){
					var obj = localStorage.getItem("userLoginInfo");
					var userInfo = JSON.parse(obj);
					if(userInfo){
						document.getElementById("name").value=userInfo.email;
						document.getElementById("password").value=userInfo.password;
						document.getElementById("isAutoLogin").checked=userInfo.isAutoLogin;
					}
				}
				
$(function(){
	$(".checkbox label input").bind("click",function(){
		if($(this).is(":checked")){
			$(this).parent("label").addClass("no");
			}else{
				$(this).parent("label").removeClass("no");
			  	}
	})
})














