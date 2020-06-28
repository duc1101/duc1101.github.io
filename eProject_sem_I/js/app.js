$('.carouselFounder').owlCarousel({
	loop: true,
	nav: true,
	autoplay: true,
	autoplayTimeout: 1606,
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
	$scope.isLogin = false;
	$scope.datas = [];
	if (localStorage.getItem('user-list')) {
		$scope.datas = angular.fromJson(localStorage.getItem('user-list'));
	}
	if (sessionStorage.getItem('login')) {
		$scope.isLogin = true;
	}
	$scope.add_user = function () {
		$scope.datas.push($scope.user);
		$scope.user = null;
		localStorage.setItem('user-list', angular.toJson($scope.datas));
		alert('Success, please login!');
		window.location = 'https://mrduc0616.github.io/eProject_sem_I/';
	};
	$scope.login = function () {
		var user = check_login($scope.email, $scope.password);
		if (user) {
			sessionStorage.setItem('login', angular.toJson(user));
			$scope.isLogin = true;
			$scope.inforUser = user; //gán truyền qua view
			var chuyen_json = angular.toJson(user);//chuyển sang json
			sessionStorage.setItem ('user-list',chuyen_json);
			$('#modal-id').modal('hide');
			alert('success');
		} else {
			$scope.isLogin = false;
			alert('Account information is invalid');
		}
	};
	$scope.log_out = function(out){
		if(confirm('Logout???')){
			// localStorage.clear();
			sessionStorage.removeItem('user-list');
			localStorage.removeItem('user-list');
			$scope.inforUser = false;
			alert('success');
		}
	}
	function check_login(email, password) {
		for (var key in $scope.datas) {
			if ($scope.datas[key].email == email && $scope.datas[key].password == password){
				return $scope.datas[key];
			}
		}
		return false;
	};
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
