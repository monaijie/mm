var ShopCar ={
	
	SHOP_CAR:"SHOP_CAR",
	
	addCar:function(carData){
		localStorage.setItem(this.SHOP_CAR,JSON.stringify(carData))
	},
	
	getCar:function(){
		return localStorage.getItem(this.SHOP_CAR)
	},
	
	isEmpty:function(){
		if(localStorage.getItem(this.SHOP_CAR)){
			return true;
		}
		return false;
	},
	
	
	addShopCar:function(product){
		var shopCar = this.getCar()
		if(!shopCar){
			var carData = {
				productList:[product]				
			}
			this.addCar(carData)//把数组存到本地存储
		}else{
			var carData = JSON.parse(shopCar)
			var productList = carData.productList
			var bool =false;
			for(var i=0;i<productList.length;i++){
				if(product.id == productList[i].id){
					productList[i].number=parseFloat(product.number) +parseFloat(productList[i].number)
					bool=true;
					break;
				}
			}
			if(!bool){
				productList.push(product)
			}
			carData.totalNumber += parseFloat(product.number);			
			this.addCar(carData)
		}
		
	}
	
}
