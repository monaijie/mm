$(function(){
	//输入
	$(".lookup .all input").change(function() {
		var inpVal = $(".certification").val();
		console.log(inpVal)
		var reg = /^\d+$/;
		if(!reg.test(inpVal)) {
			inpVal = 100;
		}
		$(".certification").val(inpVal);
	})

	$(".lookup .alls input").change(function() {
		var inpVal = $(".certifications").val();
		console.log(inpVal)
		var reg = /^\d+$/;
		if(!reg.test(inpVal)) {
			inpVal = 300;
		}
		$(".certifications").val(inpVal);
	})
	
	
})
















