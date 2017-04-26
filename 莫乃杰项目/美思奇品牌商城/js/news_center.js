

window.onload = function(){
	var box = document.getElementsByClassName('box')[0];
	var text = document.getElementsByClassName('text')[0];
	var div1 = document.getElementsByClassName('div1')[0];
	var div2 = document.getElementsByClassName('div2')[0];
	
	function onMouseWheel(ev)
	{
		var oEvent=ev||event;
		var bDown=true;
		
		bDown=oEvent.wheelDelta?oEvent.wheelDelta<0:oEvent.detail>0;
		
		if(bDown)
		{
			setTop(div2.offsetTop+10);
		}
		else
		{
			setTop(div2.offsetTop-10);
		}
		
		if(oEvent.preventDefault)
		{
			oEvent.preventDefault();
		}
		
		return false;
	}
	
	addEvent( box, 'mousewheel', onMouseWheel );
	addEvent( box, 'DOMMouseScroll', onMouseWheel );
	
	div2.onmousedown = function( e ){
		
		var ev = e || window.event;
		disY = ev.clientY - div2.offsetTop;
		document.onmousemove = function( e ){
			
			var ev = e || window.event;
			var t = ev.clientY - disY;
			
			setTop( t );
		}
		document.onmouseup = function(){
			
			document.onmousemove = null;
			document.onmousepu = null;
			
		}
		return false;
	}
	
	function addEvent( obj, Event, fn ){
		
		if( obj.addEventListener ){
			
			obj.addEventListener( Event, fn, false );
		} else {
			
			obj.attachEvent( 'on' + Event, fn );
		}
	}
	
	function setTop( t ){
		
		if( t < 0 ){
			t = 0;
		}else if( t > div1.offsetHeight-div2.offsetHeight ){
			t = div1.offsetHeight - div2.offsetHeight;
		}
			
		var scale = t / (div1.offsetHeight-div2.offsetHeight);
		div2.style.top = t + 'px';
			
		text.style.top = -scale * ( text.offsetHeight-box.offsetHeight ) + 'px';
	}
	
}
























































