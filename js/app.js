var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'pages/home.html',
		controller: 'HomeCtrl'
	})
});
myApp.controller('HomeCtrl',function ($scope) {
	$scope.demo;
});
myApp.controller('AppCtrl',function ($scope,$http) {
	$http.get('data/listApp.json').then(function(itemList){
		var leftApp = [];
		var rightApp = [];
		var mainLeft = [];
		var mainRight = [];
		for(var key in itemList.data){
			if(key == '0'){
				for(key2 in itemList.data[key]){
					leftApp.push(itemList.data[key][key2]);
				}
			}
			else if(key == '2'){
				for(key2 in itemList.data[key]){
					rightApp.push(itemList.data[key][key2]);
				}
			}
			else if(key == 'mainLeft'){
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
		}
		$scope.leftApp = leftApp;
		$scope.mainLeft = mainLeft;
		$scope.mainRight = mainRight;
		$scope.rightApp = rightApp;
	});
});
function nhay(){
	var d = document.querySelectorAll('name.mrDuc');
	var bdy = document.querySelector('.main-center');
	var color_table = ['red','orange','yellow','green','aqua','blue','white'];
	var time = 0;
	var count =2;
	setInterval(function(){
		bdy.style.borderColor = color_table[time];
		//gậy như ý
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
	var bgimg = document.getElementById("body");
	var bg_table = ['url("images/bg.jpg")','url("images/bg1.jpg")','url("images/bg2.jpg")','url("images/bg3.jpg")','url("images/bg4.jpg")'];
	var bg_table_2 = ['url("images/bg5.jpg")','url("images/bg6.jpg")','url("images/bg7.jpg")','url("images/bg8.jpg")'];
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
		}
		else{
			bgimg.style.backgroundImage = 'url("../images/24h.jpg")';
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
				bottom: "66%",
				left: "7%",
				width: "toggle",
				height: "toggle"
			},200);
			$("#bg-menu-l").css("z-index", "100")
		});
	});
	$("#bg-menu-l").click(function(){
		$("#mainLeft").hide(350,function(){
			$("#assistive-left").show();
			$("#bg-menu-l").css("z-index", "-5")
		});
	});
});