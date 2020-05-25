var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'home.html',
		controller: 'AppCtrl'
	})
	.when('/about', {
		templateUrl: '',
		// controller: 'HomeCtrl'
	})
	.when('/contact', {
		templateUrl: 'Contacts.html',
		controller: 'ConCtrl'
	})
	.when('/service', {
		templateUrl: '',
		// controller: 'HomeCtrl'
	})
	
});
myApp.controller('AppCtrl', function ($scope,$http) {
	$http.get('data/founder.json').then(function(list){
		$scope.founders = list.data;
		// console.log($scope.founders);
	});
});
myApp.controller('ConCtrl', function ($scope,$http) {
	$http.get('data/news.json').then(function(list){
		$scope.news = list.data;
	});
});
// myApp.controller('HomeCtrl',function ($scope) {
// 	$scope.demo;
// });
// myApp.controller('AppCtrl',function ($scope,$http) {
// 	$http.get('data/listApp.json').then(function(listMenu){
// 		var leftApp = [];
// 		var centerAppMain = [];
// 		var rightApp = [];
// 		for(var key in listMenu.data){
// 			for(var key2 in listMenu.data[key]){
// 				if(key == 0){
// 					leftApp.push(listMenu.data[key][key2]);
// 				}
// 				else if(key == 1) {
// 					centerAppMain.push(listMenu.data[key][key2]);
// 				}
// 				else{
// 					rightApp.push(listMenu.data[key][key2]);
// 				}
// 			}
// 		}
// 		$scope.leftApp = leftApp;
// 		$scope.rightApp = rightApp;
// 		$scope.centerAppMain = centerAppMain;
// 		// console.log(centerAppMain);
// 	});
// })