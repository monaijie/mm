
		$(function(){
				var cartTop = function(){
					var proList = localStorage.getItem("proList")//定义变量接收本地存储的字符串
						proList = JSON.parse(proList)
						var numBer = 0
						
					if(proList!=null&&proList!=undefined){
						for(var i= 0;i<proList.length;i++){
							numBer += parseInt(proList[i].number)
						}
						$(".badge").html(numBer)
					}else{
						$(".badge").html("0")
					}
				}
			
		var proLocal = localStorage.getItem('proList'),//定义变量proLocal，获取本地存储数据
			proList = [],//定义数组变量
			len,
			proLocalJson = JSON.parse(proLocal)//把获取到的字符串数据转换成数组对象
		if(proLocalJson != null){ //判断本地存储localStorage是否存在proList的值,如果存在，则赋予len的值
			len =  proLocalJson.length //获取本地存储转换的数组长度
		}
		for(var i = 0;i<len;i++){
			proList.push(proLocalJson[i]) //把数组对象push进数组里面
		}
			
		//点击事件 获取产品详情数据
		$(".add-cart").click(function(){
		
//			cartTop()
			var pro_image = $('.big_pic >ul >li>img').attr('src'),
		
				sale_price = $('.conter>ul>li:nth-child(3)>span>em').html(),//定义变量sale_price,获取产品相关促销价，并赋值给变量sale_price
				or_price = $('.conter>ul>li:nth-child(2)>span>em').html(),//定义变量or_price,商品原价，并赋值给变量or_price
				pro_num = $('input#number').val(),//定义变量pro_num,商品数量，并赋值给变量pro_num
				pro_size = $('.conter>ul>li:nth-child(7)>span.on').html(),//获取商品的尺寸
				total = pro_num * parseFloat(sale_price)
			console.log(pro_size)
		
		/**
		 * 为了判断是否为同一个产品尺寸，
		 * 必须遍历出proList的每个对象的产品尺寸，
		 * 让数组的产品颜色与获取到的产品尺寸进行对比判断,
		 * 相似则给数组的产品数量加上input的val值，
		 * 进行本地存储，
		 * 接着return false跳出循环 
		 * */
			console.log(pro_image,sale_price,or_price,pro_num,pro_size,total)
			for(var x=0;x<proList.length;x++){
				if(pro_size==proList[x].size){
					proList[x].number  = parseInt(proList[x].number)+parseInt(pro_num)
						localStorage.setItem("proList",JSON.stringify(proList))
						cartTop()
						return false;
				}
			}
			localData(pro_image,sale_price,or_price,pro_num,pro_size,total)  //调用函数localData(),进行本地存储操作
			
		})
		function localData(imgage,price,or_price,number,size,total){
			var product = {
				    image:imgage,
					price:price,
					or_price:or_price,
					number:number,
					size:size,
					total:total
				}
				proList.push(product)
				localStorage.setItem("proList",JSON.stringify(proList))
		}
		console.log(localStorage.getItem('proList'))
	})
	
	