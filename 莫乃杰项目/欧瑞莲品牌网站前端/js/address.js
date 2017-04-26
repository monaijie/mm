window.onload = function(){
	var raduce = document.getElementsByClassName("del")
	
	for(var i=0;i<raduce.length;i++){
		raduce[i].onclick = function(){
		var bool = confirm("亲，您确定要删除吗？");
			if(bool){
				
				this.parentNode.parentNode.remove();
			}
			
		}
			
	}
	
	
	
	
	
}
