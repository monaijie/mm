window.onload = function(){
	var bool=true;
	document.getElementById("state").onclick=function(){
		var ul = document.getElementById("send");
		if(bool){
			ul.style.display="block";
			var li = ul.getElementsByTagName("li");
			for(var i=0;i<li.length;i++){
				li[i].onclick=function(){
					document.getElementById("state").innerHTML=(this.innerText);
					ul.style.display="none";
					bool=true;
					return bool;
				}
			}
			bool = false;
		}else{
			ul.style.display="none"
			 bool = true;
		}
		
	}
	
	
}
