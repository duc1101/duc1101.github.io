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
	// ----------------------------guide
	.when('/guides', {
		templateUrl: 'Guide.html',
		controller: 'Guide',
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
	$http.get('data/founder.json').then(function(list){
		$scope.founders = list.data;
		$scope.title = 'Cambridge Hospital';
		// console.log($scope.founders);
	});
});
myApp.controller('ConCtrl', function ($scope,$http) {
	$http.get('data/news.json').then(function(list){
		$scope.news = list.data;
		$scope.title = 'Contact';
	});
});
myApp.controller('AboutCtrl',function () {
	$scope.title = 'About Us';
});
myApp.controller('BookCtrl',function () {
	$scope.title = 'Make an appointment';
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
myApp.controller('Guide',function ($scope,$http) {
	$http.get('data/service.json').then(function(list){
		var guides =[];
		for(var key in list.data){
			for(var key2 in list.data[key]){
				if(key == 'tutorial'){
					guides.push(list.data[key][key2]);
					// console.log(list.data[key][key2]);
				}
			}
		}
		$scope.guides = guides;
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
