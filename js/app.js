var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'pages/home.html',
		controller: 'HomeCtrl'
	})
	.when('/kw', {
		templateUrl: 'pages/win-key.html',
		controller: 'kwCtrl'
	})
	.when('/list-app', {
		templateUrl: 'pages/my-applications.html',
		controller: 'perApp'
	})
	.when('/my-ads', {
		templateUrl: 'pages/my-ads.html',
		controller: 'myAds'
	})
});

myApp.filter("trustUrl", function($sce) {
	return function(Url) {
		console.log(Url);
		return $sce.trustAsResourceUrl(Url);
	};
});


myApp.controller('AppCtrl',function ($scope,$http) {
	$http.get('data/listApp.json').then(function(itemList){
		var leftApp = [];
		var rightApp = [];
		var custom = [];
		var videos = ['https://www.youtube.com/embed/sKus7wlFXoQ', 'https://www.youtube.com/embed/yg9G1SkwNZY', 'https://www.youtube.com/embed/sKus7wlFXoQ', 'https://www.youtube.com/embed/W9gO-K7_31M', 'https://www.youtube.com/embed/X2WBWoo12ow'];
		var linkYoutube = videos[Math.floor(Math.random()*videos.length)];
		$scope.linkYoutube = linkYoutube;
		for(var key in itemList.data){
			if(key == '0'){
				for(key2 in itemList.data[key]){
					leftApp.push(itemList.data[key][key2]);
				}
			}
			else if(key == '1'){
				for(key2 in itemList.data[key]){
					rightApp.push(itemList.data[key][key2]);
				}
			}
			else if(key == '2'){
				for(key2 in itemList.data[key]){
					custom.push(itemList.data[key][key2]);
				}
			}
		}
		$scope.leftApp = leftApp;
		$scope.rightApp = rightApp;
		$scope.custom = custom;
	});
});
myApp.controller('HomeCtrl',function ($scope,$http) {
	$http.get('data/listApp.json').then(function(itemList){
		var mainRight = [];
		var mainLeft = [];
		var mainFoot = [];
		for(var key in itemList.data){
			if(key == 'mainLeft'){
				var j = 1;
				for(var i = 0; i < 32; i++){
					if(i==1||i==2||i==4||i==7||i==8||i==12||i==16||i==21||i==26||i==31){
						mainLeft.push(itemList.data[key][j]);
						j++;
					}else{
						mainLeft.push(i);
					}
				}
			}
			else if(key == 'mainRight'){
				var j = 1;
				for(var i = 0; i < 32; i++){
					if(i==1||i==2||i==4||i==7||i==11||i==15||i==19||i==22||i==25||i==28||i==31){
						mainRight.push(itemList.data[key][j]);
						j++;
					}else{
						mainRight.push(i);
					}
				}
			}
			else if(key == 'mainFoot'){
				for(var key2 in itemList.data[key]){
					mainFoot.push(itemList.data[key][key2]);
				}
			}
		}
		$scope.mainLeft = mainLeft;
		$scope.mainRight = mainRight;
		$scope.mainFoot = mainFoot;
	});
});

myApp.controller('kwCtrl',function ($scope,$http) {
	$http.get('data/wk.json').then(function(item){
		var kw = [];
		// var mainLeft = [];
		for(var key in item.data){
			kw[key] = [];
			for(var key2 in item.data[key]){
				kw[key].push(item.data[key][key2]);
			}
		}
		$scope.w10 = kw['w10'];
		$scope.w81 = kw['w81'];
		$scope.w8 = kw['w8'];
		$scope.w7 = kw['w7'];
	});
});

myApp.controller('perApp',function ($scope,$http) {
	$http.get('data/myApp.json').then(function(item){
		var categori = [];
		// var mainLeft = [];
		for(var key in item.data){
			categori[key] = [];
			for(var key2 in item.data[key]){
				categori[key].push(item.data[key][key2]);
			}
		}
		$scope.office = categori['office'];
		// console.log(categori['apps']);
	});
});

myApp.controller('myAds',function ($scope,$http) {
	$http.get('data/myApp.json').then(function(item){
		var links = [];
		var lnkAds = [];
		for(var key in item.data){
			links.push(item.data[key].l);
		}
		
		for(var i =0; i<6; i++){
			var lnk = links[Math.floor(Math.random()*links.length)];

			lnkAds.push(lnk);
		}
		// console.log(lnkAds);
		$scope.lnkAds = lnkAds;
	});
});


function nhay(){
	var d = document.querySelectorAll('a.mrDuc');
	var bdy = document.querySelector('.main-center');
	var color_table = ['red','orange','yellow','green','aqua','blue','white'];
	var border_table = ['#4c4f56','#0048ba','#1b1404','#7cb0a1','#b0bf1a','#7cb9e8','#c9ffe5','#714693','#b284be','#00308f','#72a0c1','#d4c4a8','#af002a','#fafafa','#f5e9d3','#93dfb8','#f0f8ff','#84de02','#e32636','#c46210','#0076a3','#efdecd','#907b71','#af8f2c','#dbdbdb','#a9acb6','#e52b50','#f19cbb','#ab274f','#d3212d','#3b7a57','#ffbf00','#ff033e','#87756e','#9966cc','#a397b4','#f9eaf3','#7b9f80','#9de5ff','#a4c639','#f2f3f4','#cd9575','#665d1e','#915c83','#841b2d','#faebd7','#e0b646','#008000','#dfbe6f','#4fa83d','#af4d43','#8db600','#fbceb1','#fffeec','#014b43','#5fa777','#edf5f5','#a1dad7','#eaf9f5','#e8f5f2','#7fffd4','#71d9e2','#110c6c','#d0ff14','#433e37','#4b5320','#948771','#3b444b','#8f9779','#e9d66b','#c6c3b5','#b2beb5','#87a96b','#130a06','#faeab9','#327da0','#283a77','#013e62','#eef0f3','#ecebce','#97cd2d','#0a6f75','#97605d','#3b0910','#a52a2a','#fdee00','#6e7f80','#f5ffbe','#568203','#4e6649','#f7c8da','#0d1c19','#c39953','#007fff','#f0ffff','#dbe9f4','#89cff0','#a1caf1','#fefefa','#026395','#a5cb0c','#fff8d1','#ff91af','#859faf','#21abcd','#2a2630','#da6304','#fae7b5','#ffe135','#858470','#ded717','#e0218a','#a68b5b','#fff4ce','#7c0a02','#44012d','#292130','#828f72','#7da98d','#273a81','#98777b','#2e5894','#bcd4e6','#eec1be','#9f8170','#fef2c7','#f5f5dc','#add8ff','#7dd8c6','#6b8ba2','#dee5c0','#fcfbf3','#9c2542','#e88e5a','#162a40','#327c14','#b2a1ea','#373021','#d4cd16','#1b3162','#497183','#c1b7a4','#ffe4c4','#3d2b1f','#868974','#cae00d','#fe6f5e','#bf4f51','#eededa','#000000','#3d0c02','#54626f','#0b1304','#f6f7f7','#253529','#3e2c1c','#3b3c36','#041322','#0d0332','#67032d','#0a001c','#bfafb2','#f2fafa','#fffef6','#4d0135','#32293a','#ffebcd','#a57164','#ff6700','#fef3d8','#2c2133','#318ce7','#a3e3ed','#faf0be','#dcb4bc','#0000ff','#496679','#a2a2d0','#f1e9ff','#010d1a','#0c8990','#380474','#204852','#2c0e8c','#6699cc','#0d98ba','#bfbed8','#5dadec','#ace5ee','#553592','#7666c6','#0066ff','#d2f6de','#126180','#748881','#016162','#8a2be2','#042e4c','#5072a7','#13264d','#4f86f7','#1c1cf0','#18587a','#de5d83','#79443b','#afb1b8','#e5e0e1','#0095b6','#e3dac9','#dde26a','#5c0120','#4e2a5a','#3b91b4','#cc0000','#c7dde5','#006a4e','#7a7a7a','#ae809e','#ba6f1e','#873260','#4a2a04','#0070ff','#dec196','#cd8429','#bb8983','#b5a642','#5da19f','#cb4154','#fffaf4','#fef0ec','#1dacd6','#3c4151','#66ff00','#bf94e4','#d891ef','#c32148','#1974d2','#b10000','#fed33c','#08e8de','#d19fe8','#ffaa1d','#3399ff','#f4bbff','#ff55a3','#fb607f','#004225','#aba196','#cd7f32','#4e420c','#737000','#4d400f','#ffec13','#964b00','#592804','#492615','#401801','#af593e','#af6e4d','#37290e','#cc9966','#1b4d3e','#ffc1cc','#e7feff','#622f30','#a8ae9c','#7bb661','#c1a004','#f0dc82','#480607','#864d1e','#0d1117','#151f4c','#800020','#deb887','#002e20','#ff7034','#d99376','#a17a74','#420303','#cc5500','#e97451','#8a3324','#0d2e1c','#f3ad16','#a1750d','#624e9a','#fff1b5','#fffcea','#bd33a4','#702963','#007aa5','#e03c31','#4d0a18','#d94972','#3f4c3a','#587156','#536872','#5f9ea0','#91a3b0','#b04c6a','#006b3c','#ed872d','#e30022','#fff600','#4b3621','#6f440c','#1e4d2b','#e0c095','#fe9d04','#31728d','#00581a','#a3c1ad','#893456','#d9b99b','#efbbcc','#3c3910','#78866b','#d591a4','#f3fb62','#ffef00','#fcd917','#ff0800','#251706','#894367','#3c4443','#fee5ac','#a26645','#dcedb4','#00bfff','#592720','#ffddaf','#eeeee8','#01361c','#c41e3a','#8c055e','#d29eaa','#00cc99','#ea88a8','#f3ffd8','#960018','#eb4c42','#ff0038','#5c2e01','#f95a61','#ffa6c9','#b31b1b','#56a0d3','#f9e0ed','#ed9121','#f8b853','#2f6168','#8ba9a5','#e6bea5','#adbed1','#00563b','#52001f','#062a78','#703642','#eef6f7','#e3bebe','#3e1c14','#c95a49','#711a00','#92a1cf','#ace1af','#2f847c','#b8c25d','#b2ffff','#4997d0','#1e385b','#163222','#8d7662','#fcfff9','#de3163','#ec3b83','#007ba7','#2a52be','#6d9bc3','#fff4f3','#516e3d','#eed794','#354e8c','#eddcb1','#a0785a','#f7e7ce','#f8c3df','#292937','#36454f','#fff3f1','#ffcd8c','#232b2b','#baeef9','#d47494','#e68fac','#dfff00','#40a860','#bdb3c7','#175579','#83aa5d','#9e5302','#dfcd6f','#fcda98','#ffb7c5','#2a0359','#651a14','#f8d9e9','#954535','#8581d9','#5d5c58','#f1ffc8','#f77703','#fffde6','#fcffe7','#a8516e','#aa381e','#856088','#cec7a7','#a8e3bd','#4aff00','#7b3f00','#33036b','#67a712','#e7730a','#e8f1d4','#ffa700','#0e0e18','#fde1dc','#98817b','#e34234','#cd607e','#55280c','#e4d00a','#faf7d6','#9fa91f','#a1c50a','#480656','#d4b6af','#7f1734','#fbcce7','#bdc8b3','#8a8360','#e9fffd','#e96e00','#371d09','#c7c4bf','#202e54','#aca59f','#384910','#0047ab','#481c1c','#d2691e','#965a3e','#f8f7dc','#0b0b0b','#6f4e37','#2a140e','#9f381d','#3f2500','#aba0d9','#cebaba','#ffedbc','#c4d8e2','#5c5d75','#517c66','#c9d9d2','#7c7b7a','#f2f2f2','#e9d75a','#593737','#f88379','#02478e','#acdd4d','#c6726b','#002e63','#8c92ac','#b87333','#7e3a15','#ad6f69','#cb6d51','#996666','#944747','#ff3800','#ff7f50','#ff4040','#c7bca2','#a86b6b','#893f45','#606e68','#c4d0b0','#40291d','#e7bf05','#f8facd','#8b6b0b','#6495ed','#ffb0ac','#fff8dc','#fad3a2','#76395d','#2e2d88','#fff8e7','#ffd8d9','#615d30','#ffbcd9','#c2bdb6','#01371a','#4d282d','#81613e','#b95140','#db5079','#462425','#1f75fe','#1cac78','#ff7538','#ee204d','#fce883','#fffdd0','#ffe5a0','#f5c85c','#1e0f04','#737829','#dc143c','#be0032','#990000','#736d58','#771f1f','#1c1208','#b5ecdf','#004816','#fd7b33','#924321','#fdffd5','#fbbeda','#2596d1','#507672','#00ffff','#4e82b4','#4682bf','#28589c','#188bc2','#58427c','#ffd300','#f56fa1','#003e40','#ffff31','#012731','#f9e4bc','#4f2398','#6e4b26','#f0e130','#6093d1','#00008b','#666699','#654321','#88654e','#770f05','#5d3954','#a40000','#08457e','#986960','#cd5b45','#008b8b','#3c2005','#0a480d','#b8860b','#013220','#1f262a','#6e6ef9','#1a2421','#bdb76b','#734f96','#534b4f','#8b008b','#a9a9a9','#003366','#4a5d23','#556b2f','#ff8c00','#9932cc','#779ecb','#03c03c','#966fd6','#c23b22','#e75480','#4f3a3c','#301934','#872657','#8b0000','#e9967a','#560319','#8fbc8f','#3c1414','#8cbed6','#483d8b','#2f4f4f','#177245','#918151','#ffa812','#cc4e5c','#00ced1','#d1bea8','#9400d3','#9b870c','#00703c','#555555','#a6a29a','#f3e9e5','#7ac488','#d70a53','#d2da97','#220878','#e47698','#4a3004','#a9203e','#ef3038','#e9692c','#da3287','#b94e48','#051040','#002900','#182d09','#c154c1','#056608','#0e7c61','#004b49','#333366','#f5c71a','#9955bb','#cc00cc','#820000','#412010','#ff1493','#a95c68','#850101','#843f5b','#ff9933','#082567','#01826b','#095859','#4a646c','#7e5e60','#003532','#66424d','#330066','#ba8759','#b09a95','#396413','#a4a49d','#7563a8','#1560bd','#2243b6','#ffeed8','#669999','#ae6020','#edc9af','#f8f8f7','#ea3c53','#eafffe','#db995e','#b9f2ff','#130000','#696969','#5d7747','#c53151','#9b7653','#871550','#e29418','#1e90ff','#b86d29','#d71868','#85bb65','#f9ff8b','#646077','#8e775e','#5d4c51','#664c28','#6b5755','#eee3ad','#fcf4d0','#e6d7b9','#6d6c6c','#092256','#6fd0c5','#af8751','#fdf7ad','#00009c','#a899e6','#383533','#e5ccc9','#a8989b','#efdfbb','#b6baa4','#004953','#c9b93b','#fff9e6','#e1a95f','#414c7d','#ac91ce','#1e9ab0','#e9e3e3','#555d50','#26283b','#311c17','#c2b280','#f5f3e5','#fa7814','#105852','#c8e3d7','#a2aeab','#1b1b1b','#fff4dd','#ffefc1','#614051','#f0ead6','#1034a6','#1e1708','#8f3e33','#7df9ff','#ff003f','#6f00ff','#ccff00','#bf00ff','#8b00ff','#ffff33','#123447','#088370','#1c7c7d','#50c878','#6c3082','#514649','#817377','#0056a7','#f8dd5c','#ba160c','#022d15','#b48395','#ab4b52','#cc474b','#3e2b23','#8ba690','#e1bc64','#612718','#211a0e','#96c8a2','#44d7a8','#cfa39d','#024e46','#1c402e','#010b13','#010203','#427977','#ffefec','#7f626d','#c19a6b','#801818','#b53389','#de5285','#faf3f0','#f400a1','#e5aa70','#796a78','#9fdd8c','#4d5d53','#63b76c','#657220','#4f7942','#704f50','#ff2800','#fbe96c','#f0fcea','#6c541e','#b35213','#ff5470','#626649','#556d56','#692d54','#405169','#aa4203','#e89928','#ce2029','#b22222','#0e2a30','#e25822','#da5b38','#ff7d07','#f2552a','#fc8eac','#f7e98e','#eedc82','#7b8265','#6f6a61','#a2006d','#fffaf0','#ca3435','#d8fcfa','#d7d0ff','#cbcab6','#ff004f','#228b22','#fff1ee','#56b4be','#ffdeb3','#856d4d','#0072bb','#fd3f92','#bdbdc6','#86608e','#9efd38','#d473d4','#bdedfd','#fd6c9e','#811453','#4e1609','#c72c48','#f64a8a','#77b5fe','#8806ce','#ac1e44','#a6e7ff','#990066','#807e79','#b1e2c1','#f57584','#edf5dd','#e936a7','#dbfff8','#e4f6e7','#4f9d5d','#ff00ff','#7a58c1','#ff77ff','#cc397b','#c74375','#bede0d','#eca927','#e48400','#1959a8','#016d39','#54534d','#cc6666','#c45655','#00ab66','#163531','#dcdcdc','#efefef','#dcb20c','#e49b0f','#996600','#ffdf46','#d18f1b','#007f66','#15736b','#fb8989','#d4dfe2','#c7c9d5','#f8f8ff','#b05c52','#fe5a1d','#523c94','#b8b56a','#e8f2eb','#fff9e2','#b06500','#f8e4bf','#80b3c4','#61845f','#6082b6','#e6e8fa','#ab92b3','#726d4e','#3d7d52','#f18200','#85754e','#deba13','#ffd700','#e28913','#996515','#f0d52d','#f5fb3d','#c0362c','#fde295','#fcc200','#f0db7d','#ffcc5c','#ffdf00','#daa520','#261414','#0b1107','#fff14f','#069b81','#d2f8b0','#6d92a1','#2f3cb3','#e4d5b7','#ffd38c','#676767','#8d8974','#d5f6e3','#84a0a0','#a8e4a0','#6f2da8','#251607','#4a444b','#808080','#465945','#a2aab3','#c3c3bd','#e7ece6','#a9a491','#c1becd','#00ff00','#1164b4','#009966','#01a368','#24500f','#25311c','#436a0d','#a7f432','#cbd3b0','#1d6142','#6eaea1','#a4af6e','#b8c1b1','#032b52','#101405','#e8ebe0','#adff2f','#d54600','#885818','#a99a86','#ba0101','#051657','#80b3ae','#9dacb7','#b6d3bf','#7ca1a6','#414257','#2a3439','#828685','#9a9577','#98811b','#6b2a14','#1b1035','#663854','#85c4cc','#fdf6d3','#fef7de','#fef4db','#fffee1','#e5d8af','#446ccf','#5218fa','#3fff00','#46cb18','#e6f2ea','#c90016','#da9100','#5590d9','#9d5616','#d4e2fc','#ff7a00','#541012','#b7c3d0','#b6b095','#2b3228','#df73ff','#aa98a9','#aa00bb','#5e5d3b','#907874','#b6316c','#6f8e63','#aca586','#6a5d1b','#e6ffe9','#fbf9f9','#fafde4','#589aaf','#53824b','#ae4560','#a1adb5','#ffab81','#c8a528','#65869f','#011d13','#4f1c70','#f0fff0','#edfc84','#006db0','#49796b','#d06da1','#5a87a0','#543d37','#604913','#ff1dce','#ff69b4','#b38007','#cff9f3','#355e3b','#877c7b','#b7a458','#b1f4e7','#71a6d2','#fcf75e','#319177','#f6a4c9','#602f6b','#002395','#ed2939','#b0e313','#b2ec5d','#4c516d','#138808','#cd5c5c','#4d1e01','#e3a857','#4b0082','#091f92','#c26b03','#002fa7','#ff4f00','#5a4fcf','#5f3d26','#433120','#d4d7d9','#676662','#86483c','#b3446c','#f4f0ec','#009000','#fffcee','#fffff0','#2e0329','#3a2a6a','#2e1905','#20208d','#00a86b','#ef863f','#c2e8e5','#350e57','#080110','#5b3013','#f4ebd3','#9d2933','#264348','#0a6906','#780109','#5b3256','#d87c63','#f8de7e','#d73b3e','#1fc2c2','#a50b5e','#da614e','#343434','#b5d2ce','#126b40','#3b1f1f','#f4ca16','#8ab9f1','#544333','#7c7b82','#bdda57','#29ab87','#b4cfd3','#6d9292','#eccdb9','#e8000d','#5e483e','#004620','#c6c8bd','#1e1609','#ffead4','#507096','#4cbb17','#454936','#7c1c05','#3ab09e','#e8f48c','#bfc921','#c3b091','#e1ead4','#240c02','#3a6a47','#736c9f','#3e0480','#e79fc4','#6b4423','#6e6d57','#354230','#8f4b0e','#ffbd5f','#ffe772','#886221','#368716','#b3c110','#087830','#d6cadd','#26619c','#c6e610','#c8b568','#749378','#a9ba9d','#cf1020','#b57edc','#fff0f5','#c4c3d0','#9457eb','#ee82ee','#e6e6fa','#fbaed2','#967bb6','#fba0e3','#7cfc00','#967059','#fff700','#fffacd','#cca01d','#ac9e22','#fdff00','#9b9e8f','#e3ff00','#f6eabe','#fff44f','#ba93d8','#545aa7','#1a1110','#fdd5b1','#add8e6','#fe2e2e','#b5651d','#e66771','#88ace0','#f08080','#93ccea','#f56991','#e0ffff','#ff5ccd','#c8ad7f','#f984ef','#fafad2','#d3d3d3','#cc99cc','#90ee90','#ffb3de','#f0e68c','#d39bcb','#addfad','#e6a8d7','#b19cd9','#ffb6c1','#ffa07a','#ff9999','#20b2aa','#87cefa','#778899','#b0c4de','#b38b6d','#afeeee','#ffffe0','#fcc01e','#c8a2c8','#9874d3','#ae98aa','#c8aabf','#e7f8ff','#76bd17','#bfff00','#32cd32','#6f9d02','#747d63','#ac8a56','#394851','#9dc209','#195905','#faf0e6','#d9e4f5','#ab0563','#423921','#6ca0dc','#674c47','#987456','#4d282e','#eef4de','#bdc9ce','#2c8c84','#007ec7','#a8af8e','#242a1d','#aaa9cd','#dfcfdb','#bea6c3','#6d0101','#863c3c','#460b41','#af9f1c','#1a1a68','#ffe4cd','#3c493a','#e62020','#a7882c','#697e9a','#18453b','#d9f7ff','#ffbd88','#ffb97b','#b7f0be','#09255d','#3f3002','#ca1f7b','#9f4576','#cc338b','#aaf0d1','#ff4466','#f8f4ff','#c04000','#b06608','#fbec5d','#6050dc','#897d6d','#444954','#0bda51','#7dc8f7','#233418','#bdb2a1','#8e8190','#979aaa','#ad781b','#f37a48','#e25465','#f2c3b2','#ff8243','#f5c999','#74c365','#8b9c90','#eeef78','#880085','#eaa221','#fbe870','#286acd','#800000','#520c17','#0b0f08','#afa09e','#363050','#f8db9d','#403b38','#1b659d','#b05d54','#4e3b41','#e0b0ff','#915f6d','#ef98aa','#d8c2d5','#47abcc','#fafa37','#4c9141','#73c2fb','#e5b73b','#66ddaa','#0000cd','#e2062c','#035096','#1c352d','#ba55d3','#9370db','#bb3385','#aa4069','#3cb371','#80daeb','#7b68ee','#c9dc87','#00fa9a','#48d1cc','#d9603b','#e4c2d5','#300529','#f8b878','#fdbcb4','#c7c1ff','#e5e5e5','#f6f0e6','#413c37','#831923','#ff00fd','#49371b','#71291d','#d4af37','#0a7e8c','#9c7c38','#d07d12','#3c1f76','#e4007c','#a72525','#5f5f6e','#702670','#191970','#041004','#2d2510','#ffc40c','#faffa4','#b81104','#fff6d4','#594433','#f8fdd3','#e3f988','#323232','#3f5d53','#36747d','#f5e050','#3f307f','#3eb489','#f5fffa','#98ff98','#f1eec1','#c4f4eb','#161928','#d1d2dd','#c4c4bc','#bbb477','#ffe4e1','#7f7589','#6e1d14','#ffe4b5','#782d19','#c04737','#ffa194','#8b0723','#4a3c30','#b5a27f','#8a8389','#83d0c6','#c7031e','#7f76d3','#fcfeda','#dcddcc','#d6cef6','#73a9c2','#ae0c00','#9edee0','#441d00','#504351','#036a6e','#8a9a5b','#30ba8f','#959396','#997a8d','#b78e5c','#aa8b5b','#306030','#c54b8c','#5c0536','#8c472f','#4e4562','#828e84','#0093af','#00a877','#9f00c5','#f2003c','#efcc00','#ffdb58','#d69188','#ffb31f','#317873','#d65282','#ad4379','#0087bd','#009f6b','#c40233','#f6adc6','#4b5d52','#aca494','#2a8000','#fada5e','#edf9f1','#8b8680','#ffdead','#000080','#cbdbd6','#ffe2c5','#ffa343','#fe4164','#39ff14','#8eabc1','#7cb7bb','#140600','#646e75','#214fc6','#f3d69d','#d7837f','#06a189','#727472','#1f120f','#aa375a','#193751','#b7b1b1','#bab1a2','#a4dded','#059033','#a8bd9f','#c59922','#81422c','#683600','#e9ffdb','#feefce','#02866f','#4f42b5','#0077be','#48bf91','#cc7722','#e6f8f3','#fef9e3','#fd5240','#281e15','#901e1e','#43302e','#724a2f','#cfb53b','#563c5c','#fdf5e6','#796878','#867e36','#c08081','#848482','#808000','#6b8e23','#3c341f','#b5b35c','#8b8470','#716e10','#9ab973','#cdf4ff','#2f270e','#353839','#a9c6c2','#b784a7','#8e6f70','#377475','#ff7f00','#ff9f00','#ff4500','#c45719','#fa5b3d','#fefced','#f8d568','#da70d6','#f2bdcd','#fffdf3','#9b4703','#6c2e1f','#015e85','#c69191','#f3fbd4','#fb4f14','#878d91','#e9f8ed','#414a4c','#ff6e4a','#002147','#779e86','#dafaff','#e9cecd','#a65529','#776f61','#1ca9c9','#778120','#411f10','#ade6c4','#006600','#273be2','#682860','#987654','#ffff99','#af4035','#9bc4e2','#ddadaf','#da8a67','#abcdef','#87d3f8','#e6be8a','#eee8aa','#98fb98','#dcd0ff','#c0d3b9','#f984e5','#ff99cc','#988d77','#fadadd','#dda0dd','#fdfeb8','#db7093','#96ded1','#ffe1f2','#c9c0bb','#6e7783','#c3bfc1','#ecebbd','#bc987e','#cc99ff','#09230f','#19330e','#f4f2ee','#eaf6ee','#edcdab','#78184a','#0018a8','#00ad43','#d0417e','#ff5800','#d74894','#fedf00','#009b7d','#ffefd5','#8d0226','#e63e62','#317d82','#f1e9d2','#fff46e','#26056a','#cadcd4','#134f19','#aec6cf','#836953','#cfcfc4','#77dd77','#f49ac2','#ffb347','#dea5a4','#b39eb5','#ff6961','#cb99c9','#fdfd96','#639a8f','#def5ff','#260368','#d7c498','#536878','#ffcba4','#fff0db','#ffcc99','#ffdab9','#ffdcd6','#fadfad','#782f16','#d1e231','#eae0c8','#88d8c0','#e8e0d5','#fcf4dc','#32c6a6','#b768a2','#716b56','#3eabbf','#e3f5e1','#a9bef2','#d0bef8','#e6e200','#e1e6d6','#ccccff','#c3cde6','#e12c2c','#1c39bb','#00a693','#32127a','#d99058','#f77fbe','#701c1c','#cc3333','#fe28a2','#ec5800','#cd853f','#7f3a02','#7c7631','#db9690','#96a8a1','#8ba8b7','#a3807b','#000f89','#123524','#fff39d','#6e4826','#314459','#45b1e8','#c30b4e','#fdd7e4','#afbdd9','#fddde6','#333399','#00a550','#ed1c24','#6d5e54','#c7cd90','#01796f','#171f04','#ffc0cb','#fc74fd','#e1c0c8','#ffddf4','#fff1d8','#d8b2d1','#ff9966','#e7accf','#980036','#f78fa7','#beb5b7','#c96323','#fef4cc','#ffe1df','#ba7f03','#93c572','#c0d8b6','#391285','#ff9000','#c99415','#27504b','#e5e4e2','#8e4585','#5946b2','#8f021c','#e5f9f6','#5da493','#8da8cc','#f34723','#660045','#be4f62','#eff2f3','#eaae69','#251f4f','#ffffb4','#8b9fee','#f9e663','#ff5a36','#f5e7e2','#8c5738','#bcc9c2','#b0e0e6','#9a3820','#d0c0e5','#f0e2ec','#edea99','#ff85cf','#f58025','#00b7eb','#ff0090','#fef5f1','#003153','#df00ff','#cc8899','#7d2c14','#3fc1aa','#644117','#3b331c','#c2cac4','#ff7518','#b1610b','#dc4333','#4d3d14','#800080','#69359c','#9678b6','#4e5180','#fe4eda','#9c51b6','#50404d','#9a4eae','#e7cd8c','#fffdf4','#f7f2e1','#51484f','#436b95','#e8ccd7','#a6a6a6','#bd978e','#d6d6d1','#8e3a59','#623f2d','#0247fe','#66b032','#fb9902','#fe2712','#8601af','#fefe33','#0c1911','#ff355e','#eadab8','#b9c8ac','#242124','#fbab60','#2e3222','#1c1e13','#e30b5d','#e25098','#727b89','#d68a59','#826644','#ff33cc','#e3256b','#8d4e85','#663399','#3c1206','#ff0000','#7b3801','#8e0000','#da6a41','#860111','#ff5349','#6e0902','#e40078','#ed0a3f','#80341f','#fd3a4a','#d05f04','#c71585','#a45a52','#c9ffa2','#9f821c','#013f6a','#522d80','#86949f','#aad6e6','#feebf3','#a86515','#002387','#2c1632','#2e3f62','#777696','#fffef0','#eeffe2','#004040','#f1a7fe','#d70040','#0892d0','#a85307','#a76bcf','#b666d2','#b03060','#444c38','#bbd009','#f4d81c','#410056','#8be6d8','#434c59','#704241','#eac674','#00cccc','#4d3833','#9eb1cd','#ba450c','#8a7f80','#c9b29b','#747d83','#de6360','#795d4c','#838996','#fffefd','#ffd2b7','#ecc54e','#a62f20','#8e4d1e','#ff007f','#f9429e','#fbb2a3','#800b47','#9e5e6f','#674846','#e7bcb4','#b76e79','#ff66cc','#c21e56','#905d5d','#ab4e52','#fff6f5','#bf5500','#65000b','#d40000','#bc8f8f','#c6a84b','#a23b6c','#5d8aa8','#0038a8','#4169e1','#ca2c92','#ab3472','#7851a9','#ce4676','#d10056','#e0115f','#9b111e','#ff0028','#bb6528','#e18e96','#a81c07','#796989','#f9f8e4','#80461b','#755a57','#679267','#32174d','#b7410e','#480404','#86560a','#da2c43','#ff7e00','#043927','#4c3024','#8b4513','#ff7800','#eed202','#f4c430','#f9bf58','#bcb88a','#b7a214','#f1e788','#b8e0f9','#097f4b','#fa8072','#ff91a4','#fedb8d','#685e6e','#f1f7f2','#3a2010','#0b6207','#304b6a','#456cac','#967117','#aa8d6f','#ab917a','#796d62','#ecd540','#f5e7a2','#ffeac8','#f4a460','#92000a','#8d3d38','#b16d52','#9fa0b1','#507d2a','#ded4a4','#0f52ba','#0067a5','#555b10','#ff4681','#e6e4d4','#cba135','#fff5f3','#fff4e0','#675fa6','#cffaf4','#ff2400','#431560','#950015','#585562','#a9b497','#ffd800','#8b847e','#0066cc','#2ebfd4','#695f62','#fffbdc','#66ff66','#006994','#fba129','#2e8b57','#c5dbca','#78a39c','#ed989e','#4bc7cf','#80ccea','#59260b','#731e8f','#fff5ee','#1b2f11','#f0eefd','#ffba00','#704214','#2b0202','#9e5b40','#fff4e8','#8a795d','#778ba5','#9ac2b8','#aaa5a9','#4eabd1','#fbffba','#ffcff1','#33cc99','#009e60','#25272c','#8fd400','#004950','#02402c','#e8b9b3','#d98695','#6b4e31','#5fa778','#788bba','#3e3a44','#b20931','#e292c0','#fc0fc0','#5f6672','#646a54','#f3e7bb','#882d17','#bdb1a8','#c0c0c0','#acacac','#5d89ba','#c4aead','#bfc1c2','#66b58f','#9fd7d3','#cb410b','#7a013a','#718080','#d3cbba','#ff3855','#ffdb00','#cae6da','#007474','#87ceeb','#cf71af','#6a5acd','#708090','#299617','#003399','#51808f','#ff6d3a','#c84186','#738276','#832a0d','#605b73','#100c08','#933d41','#fffafa','#f7faf7','#e4ffd1','#d6ffdb','#e2d8ed','#cec8ef','#fffbf9','#d1c6b4','#f5edef','#893843','#fef8e2','#eaf6ff','#757575','#fd7c07','#ceb98f','#6a6051','#1d2951','#807532','#0070b8','#d10047','#e51a4c','#989898','#009150','#e86100','#f7bfbe','#e60026','#00aae4','#4c2882','#007f5c','#9e1316','#2f5a57','#6a442e','#8b5f4d','#74640d','#816e71','#b6d1ea','#0fc0fc','#79deec','#a7fc00','#87ff2a','#00ff7f','#578363','#accbb1','#f6ffdc','#f8f6f1','#c1d7b0','#aaabb7','#8f8176','#23297a','#2d569b','#8a8f8a','#007bb8','#9f9f9c','#e5d7bd','#ecf245','#4682b4','#262335','#cc33cc','#5f8a8b','#9c3336','#928573','#646463','#717486','#4f666a','#000741','#e4d96f','#fc5a8d','#956387','#325d52','#714ab2','#bac7c9','#f9fff6','#914e75','#c1f07c','#96bbab','#fbac13','#ff404c','#c9b35b','#ffb1b3','#e4d422','#e16865','#ffcc33','#f2f27a','#e3ab57','#fad6a5','#fd5e53','#ff9e2c','#cf6ba9','#ffc901','#bbd7c1','#cfe5d2','#0c7a79','#87ab39','#888387','#001b1c','#acb78e','#dcf0ea','#a83731','#fbea8c','#fd9fa2','#d3cdc5','#ddd6d5','#908d39','#a02712','#edb381','#d6c562','#e97c07','#eef0c8','#b32d29','#a8a589','#991613','#341515','#d2b48c','#fa9d5a','#d9dcc1','#03163c','#f94d00','#f28500','#ffcc00','#ed7a1c','#e4717a','#7b7874','#b05e81','#e1f6e8','#073a50','#fb4d46','#cfdccf','#483c32','#8b8589','#692545','#1e433c','#c1bab0','#d0f0c0','#f4c2c2','#b19461','#008080','#367588','#99e6b3','#00827f','#cf3476','#3b000b','#cd5700','#ffe6c7','#e2725b','#f8f99c','#ffb555','#b69d98','#403d19','#d8bfd8','#cccaa8','#de6fa1','#33292f','#c02b18','#c1440e','#c3d1d1','#063537','#fc89ac','#f1ffad','#bfb8b0','#0abab5','#e08d3c','#16322c','#dbd7d2','#f0eeff','#eee600','#9a6e61','#715d47','#3a0020','#1b0245','#3f583b','#ff6347','#e79f8c','#746cc0','#ffc87c','#0f2d9e','#1450aa','#8d3f3f','#991b07','#a9bdbf','#fd0e35','#5fb3ac','#e6ffff','#fffde8','#fc9c1d','#3b2820','#7c881a','#8c6495','#e64e03','#c3ddf9','#00755e','#cda4de','#4a4e5a','#0073cf','#8a73d6','#363534','#ffddcd','#417dc1','#ff878d','#eab33b','#deaa88','#353542','#4a4244','#fae600','#b57281','#cabb48','#40e0d0','#00ffef','#a0d6b4','#2a380b','#7c4848','#a67b5b','#c09999','#eef3c3','#c5994b','#fff1f9','#e4cfde','#eefdff','#8a496b','#c2955d','#66023c','#0033aa','#d9004c','#536895','#ffb300','#3cd070','#014421','#7b1113','#004f98','#8878c3','#ff6fff','#3f00ff','#4166f5','#635147','#ffddca','#f9e6f4','#5b92e5','#b78727','#f77f00','#ffff66','#ae2029','#e1ad21','#d3003f','#d84437','#350e42','#2b194f','#49170c','#664228','#f3e5ab','#f38fa9','#fff6df','#c5b358','#c80815','#055989','#928590','#43b3ae','#495400','#d9381e','#a020f0','#74bbfb','#6666ff','#64e986','#ffb077','#ffdfbf','#ffffbf','#b14a0b','#534491','#549019','#64ccdb','#983d61','#cb8fa9','#290c5e','#7f00ff','#324ab2','#991199','#f75394','#40826d','#009698','#ffefa1','#7c9ed9','#fcf8f7','#cc9900','#922724','#9f1d35','#da1d81','#00aaee','#cc0033','#ff9900','#a6d608','#00cc33','#b80ce3','#ff5f00','#ffa000','#cc00ff','#ff006c','#f70d1a','#df6124','#00ccff','#f07427','#ffa089','#e56024','#9f00ff','#ffe302','#ceff00','#533455','#10121d','#decbc6','#5a6e9c','#363c0d','#773f1a','#004242','#788a25','#a1e9de','#056f57','#7b7c94','#a4f4f9','#dcd747','#ffddcf','#ffc0a8','#f7dbe6','#7fff00','#ffa500','#4e7f9e','#7c98ab','#b43332','#645452','#625119','#ff910f','#dcd9d2','#f19bab','#f5deb3','#f3edcf','#d59a6f','#f7f5fa','#ffffff','#ddf9f1','#f8f7fc','#f8f0e8','#fef8ff','#eae8d4','#f5f5f5','#a2add0','#d470a2','#ece090','#f4f4f4','#ff43a4','#fc6c85','#b9c46a','#3a686c','#dfecda','#65745d','#fd5800','#3c0878','#a75502','#722f37','#591d35','#673147','#d5d195','#ff007c','#a0e6ff','#56887d','#fef4f8','#c9a0dc','#a4a6d3','#fffc99','#261105','#4d5328','#302a0f','#0c0d0f','#483131','#006400','#bebebe','#738678','#0f4d92','#1c2841','#ffff00','#9acd32','#716338','#ffae42','#fff000','#fea904','#ffc3c0','#7b6608','#cec291','#0014a8','#685558','#daecd6','#e5841b','#292319','#bfdbe2','#ebc2af','#2c1608','#f4f8ff','#e4d69b','#39a78e','#a59b91','#044022','#edf6ff'];
	var time = 0;
	var count =2;
	setInterval(function(){
		var co_id = Math.floor(Math.random()*border_table.length);
		// console.log(co_id);
		bdy.style.borderColor = border_table[co_id];
		//co dãn
		if(time>1){
			if(time%6==1){
				d[0].style.color = border_table[co_id];
				d[5].style.color = border_table[co_id];
			}else if(time%6==4){
				d[3].style.color = border_table[co_id];
				d[2].style.color = border_table[co_id];
			}else if(time%6==2){
				d[1].style.color = border_table[co_id];
				d[4].style.color = border_table[co_id];
			}else if(time%6==3){
				d[2].style.color = border_table[co_id];
				d[3].style.color = border_table[co_id];
				count++;
			}else if(time%6==5){
				d[4].style.color = border_table[co_id];
				d[1].style.color = border_table[co_id];
			}else if(time%6==0){
				d[5].style.color = border_table[co_id];
				d[0].style.color = border_table[co_id];
				count++;
			}
		};
		if(count>6){
			count=0;
		};
		if(time==7){
			time=0;
		}
		// console.log(time+':'+color_table[count]);
		time ++;
	},150);
};
function clock(){
	var hdimg = document.getElementById("head-con");
	var bgimg = document.getElementById("body");
	setInterval(function(){
		var d = new Date();
		hour.innerHTML = (d.getHours() < 10) ? '0'+d.getHours() : d.getHours();
		minute.innerHTML = ':'+((d.getMinutes() < 10) ? '0'+d.getMinutes() : d.getMinutes()); 
		second.innerHTML = ':'+((d.getSeconds() < 10) ? '0'+d.getSeconds() : d.getSeconds());
		if(d.getHours() < 5){
			bgimg.style.backgroundImage = 'url("../images/5h.jpg")';
		}else if(d.getHours() < 8){
			bgimg.style.backgroundImage = 'url("../images/8h.jpg")';
		}else if(d.getHours() < 15){
			bgimg.style.backgroundImage = 'url("../images/15h.jpg")';
		}else if(d.getHours() < 18){
			bgimg.style.backgroundImage = 'url("../images/18h.jpg")';
		}else if(d.getHours() < 20){
			bgimg.style.backgroundImage = 'url("../images/20h.jpg")';
		}else{
			bgimg.style.backgroundImage = 'url("../images/24h.jpg")';
		};
		// --------------------------
		if(d.getMonth()>9){
			hdimg.style.backgroundImage = 'url("../images/win.png")';
		}else if(d.getMonth()>6){
			hdimg.style.backgroundImage = 'url("../images/fall.png")';
		}else if(d.getMonth()>3){
			hdimg.style.backgroundImage = 'url("../images/sum.png")';
		}
	},1000);
};
function checkMenu(){
	var mainLeft = document.getElementById("mainLeft");
	var assisLeft = document.getElementById("assistive-left");
	var bgMenu = document.getElementById("bg-menu-l");
	if(window.matchMedia('(max-width: 575px)').matches){
		mainLeft.style.display = "none";
		assisLeft.style.display = "block";
	}else{
		mainLeft.style.display = "block";
		assisLeft.style.display = "none";
		bgMenu.style.zIndex = "-5";
	}
};

$(document).ready(function(){
	$("#assistive-left").click(function(){
		$("#assistive-left").hide(0,function(){
			$("#mainLeft").animate({
				bottom: "40%",
				left: "7%",
				width: "toggle",
				height: "toggle"
			},200);
			$("#bg-menu-l").css("z-index", "100")
		});
	});
	$("#bg-menu-l").click(function(){
		$("#mainLeft").hide(350,function(){
			$("#bg-menu-l").css("z-index", "-5");
			$("#assistive-left").animate({opacity: "1"},0).show().delay(2000).animate({opacity: ".38"},0);
		});
	});
});
