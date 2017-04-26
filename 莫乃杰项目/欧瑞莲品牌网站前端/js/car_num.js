$(function(){
	var cartTop = function(){
		var proList = localStorage.getItem("proList")//定义变量接收本地存储的字符串
			proList = JSON.parse(proList)
			var numBer = 0
			
		if(proList!=null&&proList!=undefined){
			for(var i= 0;i<proList.length;i++){
				
				numBer += parseInt(proList[i].number)
				
			}
			$(".badge").html(numBer)
		}else{
			$(".badge").html("0")
		}
	}
	cartTop()
	
	//获取登录信息
	var obj = localStorage.getItem("loginDate");
	var loginDate = JSON.parse(obj);
	console.log(loginDate)
	if(loginDate!=null){
		$("#login").html(loginDate.loginIpone);
		$("#register").html("安全退出")
		
	}else{
		$("#login").html("[登录]");
		$("#register").html("[注册]")
	}
	
	//未登录前的登录
	$("#login").click(function(){
		var logVal = $(this).html();
		if(logVal == "[登录]"){
			window.location.href = "login.html"
		}else if(logVal ==loginDate.loginIpone){
			window.location.href = "user.html"
			
		}
	})
	
	/**未登录前的注册***/
	$("#register").click(function(){
		var regVal = $(this).html();
		if(regVal == "安全退出"){
		 localStorage.removeItem("loginDate");
		 $("#login").html("[登录]");
		 $("#register").html("[注册]")
		 window.location.href = 'login.html';
		}else if(regVal =="[注册]"){
			window.location.href = "register.html"
		}
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
})
