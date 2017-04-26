function _(id){
	return document.getElementById(id);
}

//获取注册信息

	var obj = localStorage.getItem("userlogins");
		userofTo = JSON.parse(obj),
		logIpone = null,
		logpass = null;
	if(userofTo!=null){
		logIpone = userofTo.phone;
		logpass = userofTo.pwd;
		
	}
    
    //检验登录信息
    
    	_("name").onblur = function(){
   		var inponeValue = _("name").value;
   		var reRex = /^0*(13|15|18)\d{9}$/;
   		if(inponeValue!=""){
 			if(reRex.test(inponeValue)){
 				if(inponeValue ==logIpone){
	 				_("nameTip").innerText = "手机号码正确";
		 			_("nameTip").style.color ="#00a0a0";
 				}else{
 					_("nameTip").innerText = "该用户没有注册,请先注册";
		 			_("nameTip").style.color ="red";
 				}
	 				 	

 			}else{
 				_("nameTip").innerText = "请输入正确的手机号码";
 				_("nameTip").style.color ="red";
 			}
 		}else{
 			_("nameTip").innerText = "手机号码不能为空";
 			_("nameTip").style.color ="red";
 		}
   		
   	}
   	_("name").onclick =function(){
 		
 		if(_("nameTip").innerText!= "手机号码正确"){
 			
 			_("nameTip").innerText = "";
 		}
 	}
		
	/***密码**/
   	_("password").onblur = function(){
   		var pwdValue = _("password").value;
   		var reRex = /^([a-z0-9_-]){6,12}$/;
   		if(pwdValue!=""){
 			if(reRex.test(pwdValue)){
 				if(pwdValue ==logpass){
 					_("passwordTip").innerText = "密码正确";
	 				_("passwordTip").style.color ="#00a0a0";	 
 				}else{
 					_("passwordTip").innerText = "密码不正确，请重新填写";
	 				_("passwordTip").style.color ="red";	
 				}
	 				
	 			
 			}else{
 				_("passwordTip").innerText = "格式不对，密码可用字母数字下划线，6-8位";
 				_("passwordTip").style.color ="red";
 			}
 		}else{
 			_("passwordTip").innerText = "密码不能为空";
 			_("passwordTip").style.color ="red";
 		}
   		
   	}
   	_("password").onclick =function(){
 		
 		if(_("passwordTip").innerText!= "密码正确"){
 			
 			_("passwordTip").innerText = "";
 		}
 	}


	/*****表单提交时验证****/
    _("submit").onclick = function(){
    	var ipone = _("name").value;
    	var pwd = _("password").value;
    	var pwdTip = _("passwordTip").innerText;
    	var iponeTip = _("nameTip").innerText
    	if(pwdTip == "密码正确"&&iponeTip == "手机号码正确"){
    		
    		setLogin(ipone,pwd);
    		return true;
    	}else{
    		alert("亲！请完善正确的登录信息")
    		return false;
    	}

    }
    console.log(localStorage.getItem("loginDate"),logIpone)
    
    
    /**存储登录信息***/
    function setLogin(name,pass){
    	var loginDate = {
    		loginIpone:name,
    		loginPass:pass
    	}
 	  localStorage.setItem("loginDate",JSON.stringify(loginDate))
    }







