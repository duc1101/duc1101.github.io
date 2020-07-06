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
	$http.get('data/listApp.json').then(function(listCenter){
		var leftApp = [];
		var rightApp = [];
		var mainLeft = [];
		var mainRight = [];
		for(var key in listCenter.data){
			if(key == '0'){
				for(key2 in listCenter.data[key]){
					leftApp.push(listCenter.data[key][key2]);
				}
			}
			else if(key == 'mainLeft'){
				var j = 1;
				for(var i = 0; i < 32; i++){
					if(i==1||i==2||i==4||i==7||i==8||i==12||i==16||i==21||i==26||i==31){
						mainLeft.push(listCenter.data[key][j]);
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
						mainRight.push(listCenter.data[key][j]);
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
		if(d.getHours() < 10){
			// bgimg.style.backgroundImage = 'url("https://image.freepik.com/free-photo/beautiful-outdoor-nature-landscape-sea-beach-with-coconut-palm-tree_74190-8417.jpg")';
		}else if(d.getHours() < 16){
			// bgimg.style.backgroundImage = 'url("https://image.freepik.com/free-vector/landscape-background-ocean-day-time_1639-10107.jpg")';
		}else{
			// bgimg.style.backgroundImage = 'url("../images/bg1.jpg")';
		}
	},1000);
};
$(document).ready(function(){
	$("#assistive-left").click(function(){
		$("#assistive-left").hide(0,function(){
			$("#mainLeft").animate({
				width: "toggle",
				height: "toggle",
				top: "16%",
				left: "9%"
			});
		});
	});
	$(window).resize(function(){
		$("#mainLeft").show(0,function(){
			$("#assistive-left").hide()
		});
	});
	$(".main").click(function(){
		$("#mainLeft").hide(350,function(){
			$("#assistive-left").show()
		});
	});
});