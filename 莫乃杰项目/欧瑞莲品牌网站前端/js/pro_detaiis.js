var i;
window.onload = function() {
	num = document.getElementById('number')
	i = num.value
	console.log(i)
}

function raduce() {
	i--;
	console.log(i)
	if(i <= 1) {
		i = 1;
	}
	num.value = i

}

function add() {
	i= document.getElementById('number').value;
	if(i<99){
		i++;
	}else{
		i=99;
	}
	num.value = i;

}

$(function() {
	//输入框
	$(".conter ul li input").change(function() {
		var inpVal = $("#number").val();
		var reg = /^\d+$/;
		if(!reg.test(inpVal)||parseInt(inpVal)>99||parseInt(inpVal)<0) {
			inpVal = 99;
		}
		$("#number").val(inpVal);
	})
	
	
	//尺码选择
	$(".conter ul li:nth-child(7) > span").click(function() {
		console.log(this)
		$(".conter ul li:nth-child(7) > span").removeClass("on")
		$(this).addClass("on")

	})

	//颜色选择
	$(".conter ul li:nth-child(6) > span").click(function() {
		console.log(this)
			//$(".conter ul li:nth-child(6) > span").removeClass("on")
		$(this).addClass("on")

	})

	

	//小图点大图
	$(".picture .small_pic ul li").mouseover(function() {
			var src = $(this).find("img").attr("src")
			$(".big_pic img").attr("src", src);

		})
		/*产品轮播*/
	var bool = true;
	var liLeng = $(".small_pic li").length; //li的个数
	var liWidth = $(".small_pic li").eq(0).outerWidth(true); //一个li的宽度
	//alert(liWidth);
	var ulWid = $(".small_pic ul").css({
		"width": liLeng * liWidth + "px"
	}); //整个ul的宽度
	//alert(ulWid);
	//alert(liLen);
	for(var i = 0; i < liLeng; i++) {
		$(".small_pic li").eq(i).css({
			"left": i * liWidth + "px"
		});
	}
	//上一个
	$(".Product_left").click(function() {
			show()
		})
		//下一个
	$(".Product_right").click(function() {
			if(bool) {
				bool = false;
				if(liLeng > 4) {
					for(var i = 0; i < liLeng - 1; i++) {
						$(".small_pic li").eq(i).animate({
							"left": liWidth * (i + 1) + "px"
						}, function() {
							bool = true;
						})
					}

					$(".small_pic li").eq(liLeng - 1).prependTo(".small_pic ul").css({
						"left": -liWidth + "px"
					}).animate({
						"left": 0 + "px"
					}, function() {
						bool = true;
					});
				}
			}
			var src = $(".picture .small_pic ul li").eq(0).find("img").attr("src");
			$(".big_pic img").attr("src", src);
		})
		//鼠标停止
	$(".Product_left,.Product_right").mouseover(function() {
		clearInterval(lun)
	})

	$(".small_pic li").mouseover(function() {
		clearInterval(lun)
	})

	$(".small_pic li").mouseout(function() {
		lun = setInterval(function() {
			show()
		}, 3000)
	})

	$(".Product_left,.Product_right").mouseout(function() {
			lun = setInterval(function() {
				show()
			}, 3000)
		})
		//轮播函数
	function show() {
		if(bool) {
			bool = false;
			if(liLeng > 4) {
				$(".small_pic li").eq(0).animate({
					"left": -liWidth + "px"
				}, function() {
					$(".small_pic li").eq(0).css({
						"left": liWidth * (liLeng - 1) + "px"
					}).appendTo(".small_pic ul");
					bool = true;
				});
				for(var i = 1; i < liLeng; i++) {
					$(".small_pic li").eq(i).animate({
						"left": liWidth * (i - 1) + "px"
					}, function() {
						bool = true;
					})
				}
				var src = $(".picture .small_pic ul li").eq(1).find("img").attr("src");
				$(".big_pic img").attr("src", src);
			}
		}
	}

	//记时器，自动轮播
	var lun = setInterval(function() {
		show()
	}, 3000)

	//选框
	$(".evaluatess  label input").bind("click", function() {
			$(".evaluatess  label").removeClass("checked")
			if($(this).is(":checked")) {
				$(this).parent().addClass("checked");
			} else {
				$(this).parent().removeClass("checked");
			}
		})
	
	
		//下拉选择
	var bool = true
	var boool = false
	$("#pro_list").click(function() {
		if(bool) {
			$("#order").find("span").text("+")
			$("#list").slideUp()
			boool = true
			$(this).find("span").text("-")
			$(this).siblings("#listss").slideDown()

			bool = false
		} else {
			$(this).find("span").text("+")
			$(this).siblings("#listss").slideUp()
			bool = true
		}
	})

	$("#order").click(function() {
		if(boool) {
			$("#pro_list").find("span").text("+")
			$("#listss").slideUp()
			$(this).find("span").text("-")
			$(this).siblings("#list").slideDown()
			bool = true
			boool = false
		} else {
			$(this).find("span").text("+")
			$(this).siblings("#list").slideUp()
			boool = true
		}
	})

})