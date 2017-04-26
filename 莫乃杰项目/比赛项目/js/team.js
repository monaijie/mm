$(document).ready(function(){
			
			
			var curent =0;
			var curson = 0;
			var liPic = $(".team .mg li")
			function show(){		
				liPic.eq(curent).fadeIn(500).siblings(liPic.not(liPic).eq(curent)).fadeOut(500);
				curent ++;
				if(curent>=liPic.length){
					curent = 0;
				}
				curson = curent;
			}
//			
			var clean = setInterval(show,3000)
			$(".mg>a,.mg>ul").mouseover(function(){
				clearInterval(clean);
			})
			$(".mg>a,.mg>ul").mouseout(function(){
				clean = setInterval(show,6000)
			})
			$(".prew").click(function(){
				curson--;
				if(curson<0){
					curson = liPic.length-1
				}
				
				liPic.eq(curson).fadeIn(500).siblings(liPic.not(liPic).eq(curson)).fadeOut(500);
			})
			$(".next").click(function(){
				show();	
			})
			
			
			
		})