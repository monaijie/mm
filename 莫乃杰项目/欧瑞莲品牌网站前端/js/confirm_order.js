window.onload = function(){
	var raduce = document.getElementsByClassName("dle")
	for(var i=0;i<raduce.length;i++){
		raduce[i].onclick = function(){
			var bool = confirm("亲，您确定要删除吗？？")
			if(bool){
				this.parentNode.parentNode.remove();
			}
		}
		
		
		
	}
	
	/*****************下拉地址********************/
		var bool=true;
		document.getElementById("addss").onclick=function(){
			var ul = document.getElementById("add_down");
			if(bool){
				ul.style.display="block";
				var li = ul.getElementsByTagName("li");
				for(var i=0;i<li.length;i++){
					li[i].onclick=function(){
						document.getElementById("addss").innerHTML=(this.innerText);
						ul.style.display="none";
						bool = true;
						return bool;
					}
				}
				bool=false;
				
			}else{
				ul.style.display="none";
				bool=true;
			}
		}


   var bool=true;
		document.getElementById("use").onclick=function(){
			var ul = document.getElementById("coupons");
			if(bool){
				ul.style.display="block";
				var li = ul.getElementsByTagName("li");
				for(var i=0;i<li.length;i++){
					li[i].onclick=function(){
						document.getElementById("use").innerHTML=(this.innerText);
						ul.style.display="none";
						bool = true;
						return bool;
					}
				}
				bool=false;
				
			}else{
				ul.style.display="none";
				bool=true;
			}
		}


}


$(function(){
			
	$(".information  label input").bind("click",function(){
		
	if($(this).is(":checked")){
	console.log(123)
		$(this).parent().addClass("checked");
		}else{
			$(this).parent().removeClass("checked");
			}
		})
	
	$("#submit").bind("click",function(){
		window.location.href = "pay.html";
		
	})
			
	})
		
	





















