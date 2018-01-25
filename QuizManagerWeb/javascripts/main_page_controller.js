var quizManger = angular.module("QM");



quizManger.controller("MainPageController", ["$scope", "$rootScope", "$location", "$timeout", "$http",
	function (scope, rootScope, location, timeout, $http) {
	    $("body").removeClass("login-bg");
	    //alert(JSON.stringify(rootScope.sessionObject));
	    if (rootScope.Score == null)
	        rootScope.Score = 0;
	    scope.goToAspects =  function(){
	        location.path("qm_aspect");
	    };
	    scope.goToQuestions1 = function () {
	        //alert("insde goToQuestions function fired");
	        location.path("qm_question");
	    };
	   
	}]);