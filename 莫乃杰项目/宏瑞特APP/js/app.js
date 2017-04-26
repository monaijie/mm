angular.module('myApp',['ionic'])
//创健路由
.config(function($httpProvider) {
			$httpProvider.defaults.transformRequest = function(obj) {
					var str = [];
					for(var p in obj) {
						str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
					}
					return str.join("&");	
				}
				$httpProvider.defaults.headers.post = {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			})
    		
.config(function($stateProvider){
	$stateProvider
	.state('home',{
		templateUrl:'./home.html',
		controller:"homeController"
	})
	.state('guide',{
		templateUrl:'./guide.html',
		controller:'guideCrl'
	})
	.state('shopCar',{
		templateUrl:'./shop_cart.html',
		cache:'false', 
		controller:'shopCartController'
		
	})
	.state('users',{
		templateUrl:'./user.html',		
		controller:'userController'
	})
	.state('pro_list',{
		templateUrl:'./pro_list.html',
		controller:'proListController'
	})
	.state('register',{
		templateUrl:'./register.html',
		controller:'registerController'
	})
	.state('login',{
		templateUrl:'./login.html',
		controller:'loginController'
	})
	.state('confrim',{
		templateUrl:'./confirm_order.html',
		controller:'confrimController'
	})
	.state('order',{
		templateUrl:'./order.html',
		controller:'orderController'
	})
	.state('pay',{
		templateUrl:'./pay.html',
		controller:'payController'
	})
	.state('proCategories',{
		templateUrl:'./pro_categories.html',
		controller:'categoriesController'
	})
	.state('details',{
		templateUrl:'./pro_details.html',
		controller:'proDetailsController'
	})
	.state('search',{
		templateUrl:'./pro_search.html',
		controller:'searchController'
	})
	
})
//跳转页面
.controller('stateCrl',function($scope,$state,$ionicHistory){
	
	$state.go('guide')
	$scope.home = function(){
		
		console.log(123)
		$state.go('home')
		
	}
	$scope.shopcart = function(){
		console.log(321)
		$state.go('shopCar')
	}
	$scope.users = function(){
		console.log(321)
		$state.go('users')
		cache:false
	}
	$scope.pro_list= function(){
		console.log(321)
		$state.go('pro_list')
	}
	$scope.register= function(){
		console.log(321)
		$state.go('register')
	}
	$scope.login= function(){
		console.log(321)
		$state.go('login')
	}
	$scope.confrim= function(){
		console.log(321)
		$state.go('confrim')
	}
	$scope.order= function(){
		console.log(321)
		$state.go('order')
	}
	$scope.pay= function(){
		console.log(321)
		$state.go('pay')
	}
	$scope.proCategories= function(){
		console.log(321)
		$state.go('proCategories')
	}
	$scope.details= function(){
		console.log(321)
		$state.go('details')
	}
	
	$scope.search= function(){
		console.log(321)
		$state.go('search')
	}
	$scope.backs=function(){
		$ionicHistory.goBack();
	}
	
})
//引导页
.controller('guideCrl',function($scope,$state,$http,$ionicSlideBoxDelegate){
	
	
	$scope.changeSlide = function(index){
	 	var num = $ionicSlideBoxDelegate.slidesCount();
	 	var slide_a = document.getElementsByTagName('a');
	 	if(index>=num-1){
	 		$ionicSlideBoxDelegate.enableSlide(false);
	 		slide_a[num-1].style.display="block";
	 	}
	 	var hei = slide_a[num-1].offsetHeight;
	 	slide_a[num-1].style.lineHeight=hei-4+"px"
	}
	$scope.guideArr = [
						{"img":"img/guide/guide_1.jpg"},
						{"img":"img/guide/guide_2.jpg"},
						{"img":"img/guide/start.jpg"},
					];
	
	/*
	$http.get('js/guide.json')
	.success(function(data){
		$scope.img = data;
	})*/
})

//首页导航
.controller('homeController',function($scope,$timeout){
	$scope.navArr = [
						{src:'img/home/ioc01.png',name:'商品分类'},
						{src:'img/home/ioc02.png',name:'商城热卖'},
						{src:'img/home/ioc03.png',name:'摇一摇'},
						{src:'img/home/ioc04.png',name:'物流咨询'},
						{src:'img/home/ioc05.png',name:'话费充值'},
						{src:'img/home/ioc06.png',name:'浏览历史'},
						{src:'img/home/ioc07.png',name:'猜你喜欢'},
						{src:'img/home/ioc08.png',name:'意见反馈'},
					];
	
	$scope.refre = function(){
		$timeout(function(){
			$scope.$broadcast("scroll.refreshComplete")
		},1500)
	}
})

//个人中心
.controller('userController',function($scope,$state,$timeout){
	$scope.userArr = [
						{src:'img/user/iocn01.png',name:'我的资料'},
						{src:'img/user/iocn02.png',name:'我的订单'},
						{src:'img/user/iocn03.png',name:'我的收藏'},
						{src:'img/user/iocn04.png',name:'我的地址'},
						{src:'img/user/iocn05.png',name:'我的留言'},
						{src:'img/user/iocn06.png',name:'我的帐户'},
					];
	$scope.refre = function(){
		$timeout(function(){
			$scope.$broadcast("scroll.refreshComplete")
		},1500)
	}
})


//列表
.controller('proListController',function($scope,$state,$timeout){
			$scope.picArr = [
					{id:0,name:'香甜果脯',src:'img/pro_list/pic.jpg',price:48.00,sold:57.00},
					{id:1,name:'香甜果脯',src:'img/pro_list/pic.jpg',price:48.00,sold:57.00},
					{id:2,name:'香甜果脯',src:'img/pro_list/pic.jpg',price:48.00,sold:57.00},
					{id:3,name:'香甜果脯',src:'img/pro_list/pic.jpg',price:48.00,sold:57.00},
					{id:4,name:'香甜果脯',src:'img/pro_list/pic.jpg',price:48.00,sold:57.00},
					{id:5,name:'香甜果脯',src:'img/pro_list/pic.jpg',price:48.00,sold:57.00},
					{id:6,name:'香甜果脯',src:'img/pro_list/pic.jpg',price:48.00,sold:57.00},
					{id:7,name:'香甜蜜饯',src:'img/pro_list/pic.jpg',price:48.00,sold:57.00},
					{id:8,name:'香甜蜜饯',src:'img/pro_list/pic.jpg',price:48.00,sold:57.00},
					{id:9,name:'香甜蜜饯',src:'img/pro_list/pic.jpg',price:48.00,sold:57.00},
					{id:10,name:'香甜蜜饯',src:'img/pro_list/pic.jpg',price:48.00,sold:57.00},
					{id:11,name:'香甜蜜饯',src:'img/pro_list/pic.jpg',price:48.00,sold:57.00},
					{id:12,name:'香甜蜜饯',src:'img/pro_list/pic.jpg',price:48.00,sold:57.00},
					{id:13,name:'香甜蜜饯',src:'img/pro_list/pic.jpg',price:48.00,sold:57.00},
					{id:14,name:'香甜蜜饯',src:'img/pro_list/pic.jpg',price:48.00,sold:57.00},
					{id:15,name:'香甜蜜饯',src:'img/pro_list/pic.jpg',price:48.00,sold:57.00},
					{id:16,name:'香甜蜜饯',src:'img/pro_list/pic.jpg',price:48.00,sold:57.00},
					{id:17,name:'香甜蜜饯',src:'img/pro_list/pic.jpg',price:48.00,sold:57.00},
					{id:18,name:'香甜蜜饯',src:'img/pro_list/pic.jpg',price:48.00,sold:57.00},
					{id:19,name:'香甜果脯',src:'img/pro_list/pic.jpg',price:48.00,sold:57.00},
					{id:20,name:'香甜果脯',src:'img/pro_list/pic.jpg',price:48.00,sold:57.00},
					{id:21,name:'香甜果脯',src:'img/pro_list/pic.jpg',price:48.00,sold:57.00},
					{id:22,name:'香甜果脯',src:'img/pro_list/pic.jpg',price:48.00,sold:57.00},
					{id:23,name:'香甜蜜饯',src:'img/pro_list/pic.jpg',price:48.00,sold:57.00},
					{id:24,name:'香甜果脯',src:'img/pro_list/pic.jpg',price:48.00,sold:57.00},
					{id:25,name:'香甜果脯',src:'img/pro_list/pic.jpg',price:48.00,sold:57.00},
					{id:26,name:'香甜蜜饯',src:'img/pro_list/pic.jpg',price:48.00,sold:57.00},
					{id:27,name:'香甜蜜饯',src:'img/pro_list/pic.jpg',price:48.00,sold:57.00},		
				]
				/*把数组进行循环，先输出12个，往后每次输出4个*/
				$scope.startArr = [];
				for(var i = 0;i<12;i++){
					$scope.startArr.push($scope.picArr.shift())
				}
				
				function _(ele){
					return angular.element(document.querySelectorAll(ele))
					}
					
					/*选项卡*/
					_(".more li").on("click",function(){
						for(var i = 0;i<_(".more li").length;i++){
							_(".more li")[i].index = i;
						}
						var indexs =this.index;
						console.log(indexs)
						_(".more li").removeClass("activ")
						_(".more li").eq(indexs).addClass("activ")
						_(".pro_list ul").css({"display":"none"})
						_(".pro_list ul").eq(indexs).css({"display":"block"})
					})
					/*排序添加当前状态*/
					$scope.changeOrder = function($event,val){
						$scope.orderType = val;
						_(".styas li").removeClass("on")
						$($event.target).addClass("on"); 
					}
					
					/*下拉加载，每次输出4个产品*/
					$scope.moveBool = true;
					$scope.loadMove = function(){
						$timeout(function(){
							for(var x =0;x<4;x++){
								if($scope.picArr.length == 0){
									$('.pro_list>ul').append('<li class="item-divider">没有更多了……<li>')
									$scope.moveBool = false;
									break;
								}else{
									$scope.startArr.push($scope.picArr.shift())
								}
								$scope.$broadcast('scroll.infiniteScrollComplete')
							}
						},1500)
					}
					
					//存储数据	
					$scope.shopCart = function(){
					var i = parseInt(Math.random()*3)
					ShopCar.addShopCar(product[i])
				}	
			
			$scope.refre = function(){
				$timeout(function(){
					$scope.$broadcast("scroll.refreshComplete")
				},1500)
			}
		})

//购物车
.controller('shopCartController',function($scope,$ionicPopup,$timeout){
    		function $(ele){
    			return angular.element(document.querySelectorAll(ele))
    		}
    		$scope.initVal = {
    			total:0,
    			ship:20,
    			sum:0
    		}
    		
			var aa = localStorage.getItem("SHOP_CAR") //获取本地数据
			var data = JSON.parse(aa)
			if(data==null){
				return
			}
			var proList = data.productList    //[{}，{}]转换为数组对象
			$scope.produtes = proList
			function getTotal(){
				$scope.initVal.total = 0
				$scope.initVal.sum = 0
				for(var i=0;i<$scope.produtes.length;i++){
					$scope.initVal.total +=$scope.produtes[i].price * $scope.produtes[i].number
					$scope.initVal.sum = $scope.initVal.total - $scope.initVal.ship 
				}
			}			
			getTotal()
			
			$scope.miuns = function(index){
				if($scope.produtes[index].number>1){
					$scope.produtes[index].number --
					getTotal()
				}
			}
			$scope.add = function(index){
				if($scope.produtes[index].number<99){
					$scope.produtes[index].number++
					getTotal()
				}
			}
			
			$scope.blurText=function(val,index){
				var reg = /^\d+$/;
				console.log(index)
				if(!reg.test(val)||val<1||val>99){
					val= 1;
					$scope.produtes[index].number = val;
					getTotal()
				}
			
			}
			
			$scope.remove = function(index){
						var confrim = $ionicPopup.confirm({
							title:'您确定删除吗？',
							okText:'确定',
							okType:'button-royal',
							cancelText:'取消',
							cancelTyoe:'button-assertive'
						})
						confrim.then(function(reg){
							if(reg){
								/*var aa = localStorage.getItem("SHOP_CAR")
								var data = JSON.parse(aa)*/
								$scope.produtes.splice(index, 1);
								
								data.productList = $scope.produtes
								
								ShopCar.addCar(data)
								
								$scope.produtes = data.productList
								
							}else{
								console.log('取消')
							}
							getTotal()
						})
					}
			$scope.settle = function(event){
				var confrim = $ionicPopup.confirm({
					title:'您确定提交吗？',
					okText:'确定',
					okType:'button-royal',
					cancelText:'取消',
					cancelTyoe:'button-assertive'
				})
			
			}
			
			$scope.refre = function(){
				$timeout(function(){
					$scope.$broadcast("scroll.refreshComplete")
				},1500)
			}
		})

//支付页面

.controller('payController',function($scope,$ionicPopup,$ionicPopover,$timeout){
			function $(ele){
					return angular.element(document.querySelectorAll(ele))
			}
				$scope.porterArr = [
					{id:0,name:'灰常好吃的那个果脯',src:'img/order/pic.jpg',standard:'袋',price:99.00,sold:1},					
				]
				$scope.cartPro = [
				{id:'1',proSrc:'img/home/pro_01.png',price:'49',protitle:'BartoniseN 帐篷户外2秒速开 3-4人帐篷 ',proName:'(全自动双人多人防雨露营)',unmber:'1'},

			]
				 $ionicPopover.fromTemplateUrl('my-popover-succss.html', {
					    scope: $scope
					  }).then(function(popover) {
					    $scope.popovers = popover;
					  
					 });
					$ionicPopover.fromTemplateUrl('my-popover.html', {
						    scope: $scope
					  }).then(function(popover) {
					  	$scope.popoverf = popover;
					 		
					 });
				//对话框confirm()
				$scope.surepay = function($event){
					var confirm = $ionicPopup.confirm({
						title:'你确定提交订单吗？',
						okText:'确定',
						okType:'button-royal',
						cancelText:'取消',
						cancelType:'button-assertive'
					})
					confirm.then(function(reg){
						if(reg){
							console.log('你确定了订单')
						 $scope.popovers.show($event);
						}else{
						 $scope.popoverf.show($event);
							console.log("你取消啦订单")
						}
					})
				}
				$scope.shows = function(){
					 $scope.popovers.hide();
					 $scope.popoverf.hide();
				}
			
			$scope.refre = function(){
				$timeout(function(){
					$scope.$broadcast("scroll.refreshComplete")
				},1500)
			}	
		})

//产品搜索
.controller('searchController',function($scope,$state){
			console.log(document.getElementById("focus"))
			document.getElementById("focus").focus();
		})

//产品分类
.controller('categoriesController',function($scope,$timeout){
			$scope.proArr = [
							{id:0,name:'嘿好吃的干干',src:'img/pro_categories/pic01.jpg',standard:'5g装/50g装/150g装 '},
							{id:1,name:'嘿好吃的干干',src:'img/pro_categories/pic02.jpg',standard:'5g装/50g装/150g装 '},
							{id:2,name:'嘿好吃的干干',src:'img/pro_categories/pic03.jpg',standard:'5g装/50g装/150g装 '},
							{id:3,name:'嘿好吃的干干',src:'img/pro_categories/pic04.jpg',standard:'5g装/50g装/150g装 '},
							{id:4,name:'嘿好吃的干干',src:'img/pro_categories/pic05.jpg',standard:'5g装/50g装/150g装 '},						
						];
						
			
			function $(ele){
				return angular.element(document.querySelectorAll(ele))
			}
			
			$(".pro_style ul li a").on("click",function(){
				for(var i= 0;i<$(".pro_style ul li").length;i++){
					$(".pro_style ul li a")[i].index = i;
				}
				var indexs = this.index;
				$(".pro_style ul li a").removeClass("action");
				this.className = "action";
				$(".com_style ul").removeClass("pics");
				$(".com_style ul")[indexs].className ="pics";
			})
		
		$scope.refre = function(){
				$timeout(function(){
					$scope.$broadcast("scroll.refreshComplete")
				},1500)
			}
			
		})

//我的订单
.controller('orderController',function($scope,$state,$ionicPopup,$ionicPopover,$timeout){
			$scope.productArr = [
						{id:0,name:'新疆原产葡萄干',comment:'【吃过的用户评价满分全5星】',src:'img/order/pic.jpg',price:99.00,sold:159.00},
						{id:1,name:'新疆原产葡萄干',comment:'【吃过的用户评价满分全5星】',src:'img/order/pic.jpg',price:99.00,sold:159.00},
						{id:2,name:'新疆原产葡萄干',comment:'【吃过的用户评价满分全5星】',src:'img/order/pic.jpg',price:99.00,sold:159.00},
						{id:3,name:'新疆原产葡萄干',comment:'【吃过的用户评价满分全5星】',src:'img/order/pic.jpg',price:99.00,sold:159.00},
						{id:4,name:'新疆原产葡萄干',comment:'【吃过的用户评价满分全5星】',src:'img/order/pic.jpg',price:99.00,sold:159.00},
						{id:5,name:'新疆原产葡萄干',comment:'【吃过的用户评价满分全5星】',src:'img/order/pic.jpg',price:99.00,sold:159.00},
						{id:6,name:'新疆原产葡萄干',comment:'【吃过的用户评价满分全5星】',src:'img/order/pic.jpg',price:99.00,sold:159.00},
						{id:7,name:'新疆原产葡萄干',comment:'【吃过的用户评价满分全5星】',src:'img/order/pic.jpg',price:99.00,sold:159.00},
						{id:8,name:'新疆原产葡萄干',comment:'【吃过的用户评价满分全5星】',src:'img/order/pic.jpg',price:99.00,sold:159.00}
					];
					$scope.remove = function(index){
						var confrim = $ionicPopup.confirm({
							title:'您确定删除吗？',
							okText:'确定',
							okType:'button-royal',
							cancelText:'取消',
							cancelTyoe:'button-assertive'
						})
						confrim.then(function(reg){
							if(reg){
								$scope.productArr.splice(index, 1);	
							
							}else{
								console.log('取消')
							}
						})
					}
				function _(ele){
				return angular.element(document.querySelectorAll(ele))
				}
				_(".more li").on("click",function(){
					for(var i = 0;i<_(".more li").length;i++){
						_(".more li")[i].index = i;
					}
					var indexs =this.index;
					console.log(indexs)
					_(".more li").removeClass("on")
					_(".more li").eq(indexs).addClass("on")
					_(".pro_list ul").css({"display":"none"})
					_(".pro_list ul").eq(indexs).css({"display":"block"})
				})
				
				$scope.refre = function(){
					$timeout(function(){
						$scope.$broadcast("scroll.refreshComplete")
					},1500)
				}
			})

//产品详情

.controller('proDetailsController',function($scope,$state,$timeout){
			$scope.picsArr = [
					{id:0,src:'img/pro_details/pro01.jpg'},
					{id:1,src:'img/pro_details/pro02.jpg'},
					{id:2,src:'img/pro_details/pro03.jpg'},
					{id:3,src:'img/pro_details/pro04.jpg'},
					{id:4,src:'img/pro_details/pro05.jpg'},
					{id:5,src:'img/pro_details/pro01.jpg'},
					{id:6,src:'img/pro_details/pro04.jpg'},
					{id:7,src:'img/pro_details/pro03.jpg'},
					{id:8,src:'img/pro_details/pro05.jpg'},
					{id:9,src:'img/pro_details/pro02.jpg'},
				]
			
			/*把数组进行循环，先输出12个，往后每次输出4个*/
				$scope.startArrs = [];
				for(var i = 0;i<5;i++){
					$scope.startArrs.push($scope.picsArr.shift())
				}
				/*封装*/
				function _(ele){
					return angular.element(document.querySelectorAll(ele))
					}
				/*下拉加载，每次输出4个产品*/
					$scope.moveBool = true;
					$scope.loadMove = function(){
						$timeout(function(){
							for(var x =0;x<2;x++){
								if($scope.picsArr.length == 0){
									$('.Product>ul').append('<li class="item-divider">没有更多了……<li>')
									$scope.moveBool = false;
									break;
								}else{
									$scope.startArrs.push($scope.picsArr.shift())
								}
								$scope.$broadcast('scroll.infiniteScrollComplete')
							}
						},1500)
					}
					
					//存储数据
	
				$scope.shopCart = function(){
					var i = parseInt(Math.random()*3)
					ShopCar.addShopCar(product[i])
				}
				
				$scope.refre = function(){
					$timeout(function(){
						$scope.$broadcast("scroll.refreshComplete")
					},1500)
				}
				
		})

//确定订单
.controller('confrimController',function($scope,$state,$ionicPopup,$ionicPopover,$timeout){
    		function $(ele){
    			return angular.element(document.querySelectorAll(ele))
    		}
    		$scope.initVal = {
    			total:0
    		}
			$scope.porsArr = [
					{id:0,name:'灰常好吃的那个果脯',src:'img/order/pic.jpg',standard:'袋',price:99.00,sold:1},					
				]
			function getTotal(){
				console.log(123)
				$scope.initVal.total = 0
				console.log(123)
				for(var i=0;i<$scope.porsArr.length;i++){
					console.log(123)
					$scope.initVal.total += $scope.porsArr[i].price * $scope.porsArr[i].sold
				}
			}
    		getTotal()
    		
    		$scope.submit = function(event){
    			console.log('我进来了')
    			var comfrim = $ionicPopup.confirm({
    				title:'您确定提交吗？',
					okText:'确定',
					okType:'button-royal',
					cancelText:'取消',
					cancelTyoe:'button-assertive'
    			})
    			confirm.then(function(reg){
    				console.log(12)
    			})
    		}
    		
    		$scope.refre = function(){
					$timeout(function(){
						$scope.$broadcast("scroll.refreshComplete")
					},1500)
				}
    		
		})

//登陆
    	.config(function($httpProvider){
    		$httpProvider.defaults.transformRequest = function(obj){
    			var str = [];
    			for(var p in obj){
    				str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));   				
    			}
    			return str.join("&")
    		}
    		$httpProvider.defaults.headers.post = {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
    	})
    	
    	.controller('loginController',function($scope,$http,$state){
			function $(ele){
				return angular.element(document.querySelectorAll(ele))
			}
			//把tip隐藏
				$scope.tip = false
				$scope.user_tip =false 
				$scope.into = function(user,password){
//				var userv = $("#user").val()
//				var passeordV = $("#password").val()
				if(user=="" || password==""){
					$scope.tip = true;
					return
				}else{
					$scope.tip = false;
				}
				//获取PHP验证
				$http({
					method:"GET",
//					url:"http://Localhost/mojie/js/user.json"
					url:"http://25937_4y7S220.php.100dan.cn/js/user.json"
				}).success(function(data){			
					for(var i in data){
						if(data[i].username==user && data[i].password==password){
							$scope.user_tip=false;
							console.log("我登录成功了")
							localStorage.setItem("usernames",user)
							$state.go('users')
							$("#names").html(user)
						}else{
							$scope.user_tip=true;
							$scope.tip = false;
						}
					}
				})
				
			}
			
		})


//注册页

    		
    	.controller('registerController',function($scope,$http,$state){
			function $(id){
		 	return	angular.element(document.querySelectorAll(id))
		}
			
		// 注册号码
		$scope.again_tip=false;//注册号码是否填上
		$scope.bool=false
		$scope.srue= function(iphone,password,codes){
//			var userv = $("#user").val()
//			var passv = $("#password").val()
//			var cadeV = $("#code").val()
			var checked = $("#checked").prop("checked")
			console.log(password,iphone,codes,checked)			
			if(iphone!="" && password!="" && codes!="" && checked==true){
				$scope.again_tip=false;	
				
				//发送请求
				$scope.user={username:iphone,password:password}
				$http({
					method:"POST",
//					url:"http://Localhost/mojie/js/index.php",
					url:"http://25937_4y7S220.php.100dan.cn/js/index.php",
					data:$scope.user
				}).success(function(data){
					alert("恭喜您成为了我们的会员")
					console.log("注册成功啦")
					$state.go('login')
				})
				$scope.bool=true;
			}else{
				$scope.again_tip=true;
				$scope.register_tip= false ;
				return
			}

		}
		//检验账号是否已经被注册
		$scope.register_tip=false
		$scope.code_num=function(ipone){
			console.log(ipone)
			//获取请求
				$http({
					method:"GET",
					url:"js/user.json"
				}).success(function(data){
					for(var i in data){
//						var userv = $("#user").val()
						if(ipone!=null){							
							if(data[i].username == ipone){								
								console.log(123)
								$scope.register_tip = true;
								return
							}else{	
								$scope.register_tip= false ;	
							}														
						}
						
					}
					
				})
			
		}	
		console.log(1230)				
		})

//个人中心
.controller('userController',function($scope,$state,$timeout,$ionicPopup){
			$scope.userArr = [
						{src:'img/user/iocn01.png',name:'我的资料'},
						{src:'img/user/iocn02.png',name:'我的订单'},
						{src:'img/user/iocn03.png',name:'我的收藏'},
						{src:'img/user/iocn04.png',name:'我的地址'},
						{src:'img/user/iocn05.png',name:'我的留言'},
						{src:'img/user/iocn06.png',name:'我的帐户'},
					];
			$scope.refre = function(){
				$timeout(function(){
					$scope.$broadcast("scroll.refreshComplete")
				},1500)
			}
			
			
			 //获取登录信息
				
				if(localStorage.getItem("usernames")){
					$scope.usernamess = localStorage.getItem("usernames");
				}else{
					$scope.usernamess = "未登录";
				}
				
				$scope.denlu = function(){
					if(localStorage.getItem("usernames")){
						var confirm = $ionicPopup.confirm({
							title:'您是想要退出吗？',
							okText:'是的',
							okType:'button-royal',
							cancelText:'取消',
							cancelType:'button-assertive'
						})
						confirm.then(function(reg){
							if(reg){
								console.log('你退出了登录')
							 	localStorage.removeItem("usernames")
							 	$state.go("login")	
							}
						})
											
					}else{
						$state.go("login")
					}
				}
				  
		})





















