$('.carouselFounder').owlCarousel({
	loop: true,
	nav: true,
	dots: false,
	responsive:{
		0:{
			items:1
		},
		444:{
			items: 2
		},
		650:{
			items: 3
		},
		1000:{
			items: 4
		}
	}
});
var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'home.html',
		controller: 'AppCtrl'
	})
	.when('/about', {
		templateUrl: 'about_hospital.html',
		controller: 'AboutCtrl'
	})
	.when('/contact', {
		templateUrl: 'Contacts.html',
		controller: 'ConCtrl'
	})
	.when('/book_appointment', {
		templateUrl: 'book_appointment.html',
		controller: 'BookCtrl'
	})
	// ---------------------------service
	.when('/services', {
		templateUrl: 'services.html',
		controller: 'SerCtrl',
		controller: 'ConCtrl'
	})
	.when('/cd', {
		templateUrl: 'html/html_service/chuan_doan.html',
		controller: 'cd'
	})
	.when('/nk', {
		templateUrl: 'html/html_service/nhakhoa.html',
		controller: 'nk'
	})
	.when('/ts', {
		templateUrl: 'html/html_service/thai_san.html',
		controller: 'ts'
	})
	.when('/tm', {
		templateUrl: 'html/html_service/tim_mach.html',
		controller: 'tm'
	})
	.when('/ut', {
		templateUrl: 'html/html_service/ung_thu.html',
		controller: 'ut'
	})
	.when('/xk', {
		templateUrl: 'html/html_service/xuong_khop.html',
		controller: 'xk'
	})
	// ----------------------------Instruction
	.when('/Instructions', {
		templateUrl: 'Instruction.html',
		controller: 'InsCtrl',
		controller: 'ConCtrl'
	})
	.when('/he', {
		templateUrl: 'html/html_tutorial/Health.html',
		controller: 'he'
	})
	.when('/ob', {
		templateUrl: 'html/html_tutorial/obstetric.html',
		controller: 'ob'
	})
	.when('/pa', {
		templateUrl: 'html/html_tutorial/pat.html',
		controller: 'pa'
	})
	.when('/pe', {
		templateUrl: 'html/html_tutorial/periodic.html',
		controller: 'pe'
	})
	.when('/re', {
		templateUrl: 'html/html_tutorial/register.html',
		controller: 're'
	})
	.when('/sc', {
		templateUrl: 'html/html_tutorial/Schedule.html',
		controller: 'sc'
	})
	// ------------------------------------
	.when('/acc$pay', {
		templateUrl: 'checkout.html',
		controller: 'CheckCtrl'
	})
	.when('/register', {
		templateUrl: 'signup.html',
		controller: 'SignCtrl'
	})
});
myApp.controller('AppCtrl', function ($scope,$http) {
	$scope.title = 'Cambridge Hospital';
	// ---------------------------------login------------------------------
	$http.get('data/users.json').then(function(listUser){
		$scope.account = false;
		var getData = sessionStorage.getItem('saveDataLogin');
		if(getData){
			$scope.account = angular.fromJson(getData);//chuyển lại từ json sang đối tượng JS
		}
		$scope.check_login = function(){
			var password=$scope.password;
			var email=$scope.email;
			var check = check_acc(email, password);
			// console.log(check);
			if(check){
				$scope.account = check; //gán truyền qua view
				var convertJson = angular.toJson(check);//chuyển sang json
				sessionStorage.setItem ('saveDataLogin',convertJson);
			}else{
				// confirm('Account incorrect!!! Register?');
				if(confirm('Account incorrect!!! Register?')){
					window.location.href = '/eProject_sem_I/index.html#!/register';
				}
			}
			function check_acc(mail,pass){
				for(var key in listUser.data){
					if(listUser.data[key].email==mail && listUser.data[key].pass == pass){
						return listUser.data[key];
					}
				}
				return false;
			};
			location.reload();
		}
		$scope.log_out = function(log_out){
			sessionStorage.removeItem('saveDataLogin');
			$scope.account = false;
			// location.reload();
		}
	});
});
myApp.controller('ConCtrl', function ($scope,$http) {
	$http.get('data/news.json').then(function(list){
		$scope.news = list.data;
	});
});
myApp.controller('AboutCtrl',function () {
});
myApp.controller('BookCtrl',function () {
});
myApp.controller('SerCtrl',function ($scope,$http) {
	$http.get('data/service.json').then(function(list){
		var services =[];
		for(var key in list.data){
			for(var key2 in list.data[key]){
				if(key == 'service'){
					services.push(list.data[key][key2]);
					// console.log(list.data[key][key2]);
				}
			}
		}
		$scope.services = services;
	});
});
myApp.controller('InsCtrl',function ($scope,$http) {
	$http.get('data/service.json').then(function(list){
		var instructs =[];
		for(var key in list.data){
			for(var key2 in list.data[key]){
				if(key == 'tutorial'){
					instructs.push(list.data[key][key2]);
					// console.log(list.data[key][key2]);
				}
			}
		}
		$scope.instructs = instructs;
	});
});
myApp.controller('cd',function () {
});
myApp.controller('nk',function () {
});
myApp.controller('ts',function () {
});
myApp.controller('tm',function () {
});
myApp.controller('ut',function () {
});
myApp.controller('xk',function () {
});
myApp.controller('he',function () {
});
myApp.controller('ob',function () {
});
myApp.controller('pa',function () {
});
myApp.controller('pe',function () {
});
myApp.controller('re',function () {
});
myApp.controller('sc',function () {
});
myApp.controller('SignCtrl',function () {
});
