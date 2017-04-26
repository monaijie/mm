var maxtime;
		if(window.name==''){ 
		maxtime = 900*60;
		}else{
		maxtime = window.name;
		}
		  
		function CountDown(){
		if(maxtime>=0){
		hours = Math.floor(maxtime/3600);
		minutes = Math.floor((maxtime-hours*3600)/60);
		seconds = Math.floor(maxtime%60);
		msg = hours+minutes+seconds;
		document.all["timer"].innerHTML = hours;
		document.all["timers"].innerHTML = minutes;
		document.all["tmer"].innerHTML = seconds;
		if(maxtime == 5*60) alert('注意，还有5分钟开抢!');
		--maxtime;
		window.name = maxtime; 
		}
		else{
		clearInterval(timer);
		alert("抢购时间到，抢吧!");
		}
		}
		timer = setInterval("CountDown()",1000);