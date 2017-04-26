
		window.onload = function(){
			//点击全选
			function _(id){
				
				return document.getElementById(id);
			}
			
			var chenboxs = document.querySelectorAll("#check");
			
			_('all-check').onclick = function(){
				
				for (var i=0;i<chenboxs.length;i++) {
					
					if (this.checked==true) {
						
						chenboxs[i].checked=true;
						$(this).parent().addClass("on")
						$(".texts .gou label").addClass("on");
																								
					} else{
						chenboxs[i].checked=false;
						$(this).parent().removeClass("on")
						$(".texts .gou label").removeClass("on");
					}
					
				}
			}
			//若取消了一个，全选取消
			for(var i=0;i<chenboxs.length;i++){
				chenboxs[i].index = i;
				chenboxs[i].onclick = function(){
					
					var arr=[];
					for(var j=0;j<chenboxs.length;j++){
						if(chenboxs[j].checked==true){
							
							arr.push(chenboxs[j].checked);
							if(chenboxs.length==arr.length){
								_("all-check").checked=true;
								
							}else{
								_("all-check").checked=false;
							}
						}else{
							continue;
						}
					}
				}
			}
		//点击删除事件	
			var raduce =document.getElementById("del");
			var checks = document.querySelectorAll("#check");
			var arr = [];
			
			  raduce.onclick = function(){
			  	
			  	var pool =true;
			  	 for(var i=0;i<checks.length;i++){
			  	 	checks[i].index=i;
			  	 	if(checks[i].checked==true){
			  	 		arr.push(checks[i].index)
//			  	 		/*checks[i].parentNode.parentNode.parentNode.remove();*/
						pool  = true;
						break;
			  	 	}else{
			  	 		pool = false;
			  	 	}
			  	 }
			    if(pool){
			    	var bool = confirm("确定吗？");
			    	if(bool){
					  	for(var i=0;i<checks.length;i++){
//					  		checks[i].index=i;
					  		if(checks[i].checked==true){
//					  			arr.push(checks[i].index);
					  			checks[i].parentNode.parentNode.parentNode.remove();
					  			
					  		}
					  	}
			  		}
			    	
			    }
			  
			  	
			  }
					
		}
		


