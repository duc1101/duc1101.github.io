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
});
myApp.controller('AppCtrl',function ($scope,$http) {
	$http.get('data/listApp.json').then(function(itemList){
		var leftApp = [];
		var rightApp = [];
		var custom = [];
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
		var app = [];
		for(var key in item.data){
			app.push(item.data[key]);
		}
		$scope.app = app;
		});
});

function nhay(){
	var d = document.querySelectorAll('a.mrDuc');
	var bdy = document.querySelector('.main-center');
	var color_table = ['red','orange','yellow','green','aqua','blue','white'];
	var time = 0;
	var count =2;
	setInterval(function(){
		bdy.style.borderColor = color_table[time];
		//co dãn
		if(time>1){
			if(time%6==1){
				d[0].style.color = color_table[count];
				d[5].style.color = color_table[count];
			}else if(time%6==4){
				d[3].style.color = color_table[count];
				d[2].style.color = color_table[count];
			}else if(time%6==2){
				d[1].style.color = color_table[count];
				d[4].style.color = color_table[count];
			}else if(time%6==3){
				d[2].style.color = color_table[count];
				d[3].style.color = color_table[count];
				count++;
			}else if(time%6==5){
				d[4].style.color = color_table[count];
				d[1].style.color = color_table[count];
			}else if(time%6==0){
				d[5].style.color = color_table[count];
				d[0].style.color = color_table[count];
				count++;
			}
		}if(count>6){
			count=0;
		};
		if(time==7){
			time=0;
		}
		// console.log(time+':'+color_table[count]);
		time ++;
	},111);
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

window.onload = function () {
	var videos = ["https://www.youtube.com/embed/9bZkp7q19f0", "https://www.youtube.com/embed/dQw4w9WgXcQ"];
	var linkYoutube = videos[Math.floor(Math.random() * videos.length)];
	$scope.linkYoutube = linkYoutube;
};

$(document).ready(function(){
	$("#assistive-left").click(function(){
		$("#assistive-left").hide(0,function(){
			$("#mainLeft").animate({
				bottom: "56%",
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
