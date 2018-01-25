var quizManger = angular.module("QM");



quizManger.controller("LoginController", ["$scope", "$rootScope", "$location", "$timeout", "$http",
	function (scope, rootScope, loaction, timeout, $http) {
	    rootScope.Score = 0;
	    totalScore = 0;
        $("body").addClass("login-bg");
		scope.sessionFound = false;
		scope.invalidSessionCode = false;

		scope.alertingInvalidSessionCode = function(){
			scope.invalidSessionCode = true;
			timeout(function(){
				scope.invalidSessionCode = false;
			},1000);
		}
		
		scope.sessionCodeValidation = function () {
		    scope.login.sessionCode = scope.login.sessionCode.toUpperCase();
		   // console.log(scope.login.sessionCode);
		   // alert(scope.login.sessionCode);
		    var bodyObj = {
		        "msgType": 2,
		        "properties": {
		            "targetItem": "{\"sessionCode\":\"" + scope.login.sessionCode + "\"}"
		        }
		    };

		    $http.post(requestURL, bodyObj, { headers: { 'Content-Type': 'application/json' } }).then(function (response) {
		        scope.sessionFound = response.data.results.sessionCode ? true : scope.alertingInvalidSessionCode();
		    });

			//http_dao.sessionCodeValidation(scope.login.sessionCode).then(function(response) {
			//	scope.sessionFound = response.data.results.sessionCode ? true : scope.alertingInvalidSessionCode();
			//})
		};

		scope.checkLogin = function () {
		    scope.userNameExistErr = false;
		    scope.credentialsMismatch = false;
		  
		    if (!scope.guestLogin) {

		        var bodyObj = {
		            "msgType": 3,
		            "properties": {
		                "targetItem": "{\"userName\":\"" + scope.login.userName + "\",\"password\":\"" + scope.login.password + "\",\"userType\":\"3\",\"sessionCode\":\"" + scope.login.sessionCode + "\"}"
		            }
		        };
		      
		        $http.post(requestURL, bodyObj, { headers: { 'Content-Type': 'application/json' } }).then(function (response) {
		            console.log(response.data.results);
		            if (_.isEmpty(response.data.results)) { scope.alertingInvalidSessionCode(); return; }
		            if (response.data.results.error) {
		                scope.credentialsMismatch = true;

		                $("#userloginErr").show();
		            } else {
		                rootScope.sessionObject = response.data.results.login;
		                rootScope.sessionObject.roundId = 1;
		                //$("#logindetails").text(rootScope.sessionObject);
		                console.log("userdetails");
		                console.log(rootScope.sessionObject);
		               // scope.absoluteUrl = loaction.absUrl();
		                //loaction.path("qm_main");
		            }
		        });
		      
		    }
		    else
		    {
		        var bodyObj = {
		            "msgType": 3,
		            "properties": {
		                "targetItem": "{\"userName\":\"" + scope.login.userName + "\",\"userType\":\"7\",\"sessionCode\":\"" + scope.login.sessionCode + "\"}"
		            }
		        };

		        $http.post(requestURL, bodyObj, { headers: { 'Content-Type': 'application/json' } }).then(function (response) {
		            if (_.isEmpty(response.data.results)) { scope.alertingInvalidSessionCode(); return; }
		            if (response.data.results.error) {
		               alert("Inside function");
		                $("#userNameErr").show();
		            } else {
		               // response.data.results.login.roundID = parseInt(1);
		                rootScope.sessionObject = response.data.results.login;
		                rootScope.sessionObject.roundId = 1;
                         console.log(rootScope.sessionObject);
		                //loaction.path("qm_main");
		            }


		        });
		    }

		};
		scope.goToMainPage = function () {
		    loaction.path("qm_main");
		};
		//scope.checkLogin = function() {
		//	scope.userNameExistErr =  false;
		//	scope.credentialsMismatch = false;
		//	if (!scope.guestLogin) {
		//		http_dao.checkLoginCredentials(scope.login.userName,scope.login.password,scope.login.sessionCode).then(function(response) {
		//			alert(JSON.stringify(response.data));
		//			if(_.isEmpty(response.data.results)) {scope.alertingInvalidSessionCode(); return;}
		//			if(response.data.results.error){
		//				scope.credentialsMismatch = true;
		//			}else{
		//				rootScope.sessionObject = response.data.results.login;
		//				loaction.path("qm_main");
		//			}
		//		});
		//	}else{
		//		http_dao.checkUserNameExistOrNot(scope.login.userName,scope.login.sessionCode).then(function(response) {
		//			console.log(JSON.stringify(response.data.results));
		//			if(_.isEmpty(response.data.results)) {scope.alertingInvalidSessionCode(); return;}
		//			if(response.data.results.error){
		//				scope.userNameExistErr = true;
		//			}else{
		//				rootScope.sessionObject = response.data.results.login;
		//				loaction.path("qm_main");
		//			}
		//		});
		//	}
		//};
	}
]);