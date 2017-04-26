window.onload = function(){

		function _(id){
			
			return document.getElementById(id)
		}
		var chenboxs = document.querySelectorAll("#check")	;
		var total = document.getElementsByClassName("total");
		var unmber = document.getElementsByClassName("Unbmer");
		var sum=0;
		var subtotal = 0;
		_("num").innerHTML = sum.toFixed(2)
		//点击全选	
		_('all-check').onclick = function(){
			sum = 0;
			for(var i=0;i<chenboxs.length;i++){
			// 如果全选被勾上的话。则所有的选项都被选上
				if(this.checked==true){
					chenboxs[i].checked=true;
					$(this).parent().addClass("on")
					$(".pro_list .gou label").addClass("on");
					subSum(i)
				// 如果全选不被勾上的话。则所有的选项不全被选上	
				}else{
					chenboxs[i].checked=false;
					$(this).parent().removeClass("on")
					$(".pro_list .gou label").removeClass("on");
					_("num").innerHTML = sum.toFixed(2);
				}
			}
			
		}	
		function subSum(i){
			subtotal = total[i].innerHTML*unmber[i].innerHTML
			sum += subtotal
			_("num").innerHTML = sum.toFixed(2)
		}
		function show(){
			
			for(var i=0;i<chenboxs.length;i++){
			chenboxs[i].index = i;
			chenboxs[i].onclick = function(){
				if(this.checked){
					subSum(this.index)
				}else{
					sum -= subtotal
					_("num").innerHTML = sum.toFixed(2)
				}
				
				var arr = []
				for (var j=0;j<chenboxs.length;j++) {
					
					if(chenboxs[j].checked){
						
						arr.push(chenboxs[j].checked)
						//如果所有都被选上，则全选按纽被选上 ，否则就不选上  
						if(chenboxs.length==arr.length){
						
							_("all-check").checked = true
							
						}else{
							_("all-check").checked = false
						}
								
						}
					}
				}																
			}
				
		}
		show();
		
		
	}



