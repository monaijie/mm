window.onload= function(){
		function _(id){
	
		return document.getElementById(id)
	}
	var numbers = document.getElementsByClassName("numbers")
	
	var sum = 0;
	for(var i=0;i<numbers.length;i++){
//				var numb = numbers[i].innerHTML
		sum = parseInt(sum)+parseFloat(numbers[i].innerHTML)
		
	}
	_("num").innerHTML = sum.toFixed(2);
	var freight = _("freight").innerHTML;
	var discount = _("discount").innerHTML;
	sunAll = parseFloat(sum) +parseFloat(freight)+parseFloat(freight);
	_("total").innerHTML = sunAll.toFixed(2);
}