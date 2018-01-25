var quizManger = angular.module("QM");

quizManger.controller("AspectController", ["$scope", "$rootScope", "$location", "$timeout", "$http",
	function (scope, rootScope, location, timeout, $http) {
	    $("body").removeClass("login-bg");
		//http_dao.getAspects("AF*8@1").then(function(response){
		//	alert(JSON.stringify(response));
		//	scope.aspects = response.data.results.groupChallenge;
	    //});

	    //commented by praveen

		//alert(rootScope.sessionObject.sessionCode);
		//var bodyObj = {
		//    "msgType": 4,
		//    "properties": {
		//        "targetItem": "{\"sessionCode\":\"" + rootScope.sessionObject.sessionCode + "\"}"
		//    }
		//}

		//$http.post(requestURL, bodyObj, { headers: { 'Content-Type': 'application/json' } }).then(function (response) {
		//    console.log(response.data.results);
		//    alert(JSON.stringify(response.data.results));
		//    scope.aspects = response.data.results.groupChallenge;
	    //});

	    scope.ascpectColor = function (index) {
	       // alert(index);
	        if (index == 0) return "#F68B1F";
	        if (index == 1) return "#2FBCD0";
	        if (index == 2) return "#EC74A9";
	        if (index == 3) return "#F15A6B";

	    }
	    scope.loga = function () {
	        //alert("inside goto question 10");
	        location.path("qm_question");
	    };


	
	    scope.aspects = aspectObj.AspectLists;
	

	    var aspectClick = false;
	    scope.goToQuestionsPage = function (aspect) {
	        if (!aspectClick) aspectClick = true;
	        else return;
	       // alert("select aspect");

		    rootScope.sessionObject.aspect = aspect;
		    console.log(JSON.stringify(aspect));
		    console.log(rootScope.roundId);
		    var bodyObj = {
		        "msgType": 5,
		        "properties": {
		            "targetItem": "{\"userId\":\"" + rootScope.sessionObject.userId + "\",\"roundId\":\"" + rootScope.sessionObject.roundId++ + "\",\"challengeId\":\"" + rootScope.sessionObject.challengeId + "\",\"aspectId\":\"" + aspect.aspectID + "\"}"
		        }
		    }

		    console.log((JSON.stringify(bodyObj)));
		    //alert(JSON.stringify(bodyObj));
		    $http.post(requestURL, bodyObj, { headers: { 'Content-Type': 'application/json' } }).then(function (response) {
		        //location.path("qm_question");
		    });
		}
	}
]);