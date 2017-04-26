
window.onload = function(){
	var pic = document.getElementById("pic");
	var list = pic.getElementsByTagName("li");
	for(var i=0;i<list.length;i++){
		pic.getElementsByTagName("li")[i].index = i;
		pic.getElementsByTagName("li")[i].onclick = function(){
			var j=this.index;
			for(var k=0;k<list.length;k++){
				pic.getElementsByTagName("li")[k].className="";
			}
			for(var q=0;q<=j;q++){
				pic.getElementsByTagName("li")[q].className="on";
			}
		}
		
	}
	
	
	
}

			