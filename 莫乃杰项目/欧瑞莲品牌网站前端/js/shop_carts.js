
    window.onload= function(){	    	
    	 function _(id){
					return document.getElementById(id)
				}
    	var proList = localStorage.getItem("proList");//定义变量接收本地存储的字符串
    		 proList = JSON.parse(proList);//将字符创转换为JSON数据
    		 toby = document.getElementsByClassName("tb")[0];//获取表表格的bodey
    		
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
			cartTop()
    		
    		
    		
    		
    	 if(proList!=null){    //如果字符串不为空，进行填充
    	 	for(var i=0;i<proList.length;i++){ //循环字符串长度
    	 		var trs = document.createElement("tr");//创建tr
    	 		trs.innerHTML = 
    	 			'<td>'+
					'<label class="check"><input type="checkbox" id="input_box"/></label>'+
					'<a href="pro_detaiis.html"><img src="" alt="图片无法加载" class="ismgs"/></a>'+
					'</td>'+
					'<td><span>￥<em class="danj">'+proList[i].price+'</em>'+'</span>'+'<span>'+'￥'+proList[i].or_price+'</span> </td>'+
					'<td><input type="button" value="-" class="raduce"/><input type="text" value="1" class="numb"/><input type="button" value="+" class="add"/></td>'+
					'<td>'+'￥'+'<em class="totel">'+proList[i].total+'</em>'+'</td>'+
					'<td><a href="##">收藏</a><a href="##" class="del">删除</a> </td>'
				

				toby.appendChild(trs);	
				var ismgs = document.getElementsByClassName("ismgs"),
					inputnum = document.getElementsByClassName("numb");
				ismgs[i].setAttribute("src",proList[i].image)
				inputnum[i].setAttribute("value",proList[i].number)
    	 	}
    	 }
    	 
    	 //加减按钮、判断输入框、全选	单选、计数
    	var inputLis = document.getElementsByClassName("numb");//获取输入框的vule
     	add = document.getElementsByClassName("add")//获取加按钮
    	raduce = document.getElementsByClassName("raduce")//获取减按纽
    	var prices = document.getElementsByClassName("danj")//获取单价
	    var totals = document.getElementsByClassName("totel")//获取小计
	    var del = document.getElementsByClassName("del");//获取删除事件
	  	var all = document.getElementById("alltital")//获取总价
	    var dX = document.getElementById("dx");//获取单选按钮的labe
	    var tb =document.getElementsByClassName("tb")[0];
    	var checked = tb.getElementsByTagName("label")
    	var tr = tb.getElementsByTagName("tr")
    	//加减按钮	
    	 for(var i=0;i<add.length;i++){
    	 	add[i].index=i;
    	 	//加按钮
    	 	add[i].onclick = function(){
    	 		i=this.index;
    	 		var num = inputLis[this.index].value;
    	 		num++;
    	 		
    	 		if(num>99){
    	 			num=99;
    	 		}
    	 		inputLis[this.index].value=num;
    	 		proList[i].number = num;
    	 		
    	 		localStorage.setItem("proList",JSON.stringify(proList))
    	 		cartTop()
    	 		show()
    	 	}
    	 	
    	 	//减钮
    	 	raduce[i].index=i;
    	 	raduce[i].onclick = function(){
    	 		i=this.index;
    	 		var num = inputLis[this.index].value;
    	 		num--;
    	 		if(num<=1){
    	 			num=1;
    	 		}
    	 		inputLis[this.index].value = num;
    	 		proList[i].number = num;
    	 		localStorage.setItem("proList",JSON.stringify(proList))
    	 		cartTop()
    	 		show()
    	 	}
    	 	
    	 	inputLis[i].index = i;
    	 	inputLis[i].onblur = function(){
    	 		i=this.index;
    			var reg = /^\d+$/;
				if(!reg.test(this.value)||parseInt(this.value)<1||parseInt(this.value)>99){
					this.value = 1;
				}
			
    	 		proList[i].number = this.value;
    	 		localStorage.setItem("proList",JSON.stringify(proList))
    	 		cartTop()
    	 		show()
    		}
    	 }
    	
    
    
    	//全选	
    	var chckbox = document.querySelectorAll("#input_box");//获取input
    	var label = document.querySelectorAll(".check");//获取lebal
    	console.log(label)
    	var qunX = document.getElementById("all-check")//获取全选的inp
    	var qX = document.getElementById("qx")//获取全选的lebal
    	var dX = document.getElementById("dx");
    	//点击全选
    	 _('all-check').onclick = function(){
    	 	// 如果全选被勾上的话。则所有的选项都被选上
    	 	for(var i=0;i<chckbox.length;i++){
    	 		if(this.checked==true){
    	 			chckbox[i].checked=true;  	 			
    	 			qX.setAttribute("class","checked"); 
    	 			dX.setAttribute("class",""); 
    	 			for(var j= 0;j<chckbox.length;j++){
    	 				label[j].setAttribute("class","chesd");
    	 			}
    	 			// 如果全选不被勾上的话。则所有的选项不全被选上
    	 		}else{
    	 			chckbox[i].checked=false; 
    	 			qX.setAttribute("class","");
    	 			for(var j= 0;j<chckbox.length;j++){
    	 				label[j].setAttribute("class","");
    	 			}
    	 		}
    	 		
    	 	}

			
    	 	show()	
    	 }
    	 
    	 //单选
    	 for(var i=0;i<chckbox.length;i++){
    	 	chckbox[i].index=i;
    	 	chckbox[i].onclick = function(){
    	 		var arr=[];
	 		for(var k=0;k<chckbox.length;k++){
	 			if(chckbox[k].checked){
	 				chckbox[k].parentNode.setAttribute("class","chesd");
//  	 				dX.setAttribute("class","checked");
	 				arr.push(chckbox[k].checked)

	 			}else{
	 				chckbox[k].parentNode.setAttribute("class","");
	 			}
	 			
	 		}
	 		//如果所有都被选上，则全选按纽被选上 ，否则就不选上 
			if(chckbox.length==arr.length){
				qunX.checked=true;  	 			
				qX.setAttribute("class","checked");  
				dX.setAttribute("class","");
			}else if(arr.length==0){
				qunX.checked=false;
// 					qunX.checked=false;  
				dX.setAttribute("class","");
				qX.setAttribute("class","");  
			}else{
				qunX.checked=false;
				dX.setAttribute("class","checked");
				qX.setAttribute("class",""); 
			}
    	 		
//  	 		slecs()
    	 	}
    	 	show()
    	 	
    	 }
    	 
    	 function slecs(){
	
	 		var arr=[];
	 		for(var k=0;k<chckbox.length;k++){
	 			if(chckbox[k].checked){
	 				chckbox[k].parentNode.setAttribute("class","chesd");
//  	 				dX.setAttribute("class","checked");
	 				arr.push(chckbox[k].checked)

	 			}else{
	 				chckbox[k].parentNode.setAttribute("class","");
	 			}
	 			
	 		}
	 		//如果所有都被选上，则全选按纽被选上 ，否则就不选上 
			if(chckbox.length==arr.length){
				qunX.checked=true;  	 			
				qX.setAttribute("class","checked");  
				dX.setAttribute("class","");
			}else if(arr.length==0){
				qunX.checked=false;
// 					qunX.checked=false;  
				dX.setAttribute("class","");
				qX.setAttribute("class","");  
			}else{
				qunX.checked=false;
				dX.setAttribute("class","checked");
				qX.setAttribute("class",""); 
			}
    	 		
    	 	
    	 }
   
   
    	//计数
    	
    	
    		
    		function show(){
    			
    			var total = 0;
	    		var numd = 0;
	    		var sum = 0;
	    		
	    		_("alltital").innerHTML = total.toFixed(2);
	    		for(var i=0;i<tr.length;i++){
	    		
	    			var price = parseFloat(prices[i].innerHTML);//单价
					var sum = parseFloat(inputLis[i].value) ;//输入框地点值
					totals[i].innerHTML = (parseFloat(price)*parseFloat(sum)).toFixed(2);
					if(chckbox[i].checked){
						total= parseFloat(totals[i].innerHTML)+parseInt(total);
						console.log(total.toFixed(2))
					}
	    		}
	    		_("alltital").innerHTML = total.toFixed(2);
    	
    	}
    		show()
    	//删除		    	
    	for(var i=0;i<del.length;i++){
    		del[i].onclick = function(){
    			bool = confirm("亲，您确定要删除吗？");
    			if(bool){
    				this.parentNode.parentNode.remove();
    			}else{
    				bool=false;
    			}
    			
    			var dels = document.getElementsByClassName("del");
	    		proList.length = dels.length
				console.log(proList.length)
    	 		localStorage.setItem("proList",JSON.stringify(proList))
    	 		
    		}
    		
	    	
    		show()
    	}
    	
  }
    var _ = function(ele){
    	return document.querySelectorAll(ele);
    }
    var arr = [];
    _("#bt")[0].onclick = function(){
    	var len = _(".number table tbody tr td label input").length;
    	for(var i=0;i<len;i++){
    		if(_(".number table tbody tr td label input")[i].checked){
    			arr.push(_(".number table tbody tr td label input")[i])
    		}
    	}
    	console.log(arr)
    	if(arr.length>0){
    		window.location.href="confirm_order.html";
    	}else{
    		alert('亲,请选择您要购买的商品')
    	}
    }
    
