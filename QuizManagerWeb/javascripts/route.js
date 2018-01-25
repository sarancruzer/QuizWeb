var quizManger = angular.module("QM");

quizManger.config(function($routeProvider,$locationProvider) {
	$routeProvider.when('/qm_login', {
	    templateUrl: './LoadPage/login',
	    controller: 'LoginController'
	}).when('/qm_main', {
	    templateUrl: './LoadPage/mainpage',
		controller : 'MainPageController'
	}).when('/qm_aspect', {
	    templateUrl: './LoadPage/aspect',
		controller : 'AspectController'
	}).when('/qm_question', {
	    templateUrl: './LoadPage/questions',
		controller : 'QuestionController'
	}).otherwise({
	    templateUrl: './LoadPage/login',
	    controller: 'LoginController'
	})
});