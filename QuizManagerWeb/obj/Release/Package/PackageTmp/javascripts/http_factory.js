

(function (angular) {
    var quizManger = angular.module("QM");

    var requestURL = "http://54.235.20.141:8080/quizmanager/getResponse";
    quizManger.factory("http_dao", ["$http",function($http){


        //function(http) {
        //	var httpConfig = function(method, url, data) {
        //		return http({
        //			method: method,
        //			url: url,
        //			data: data
        //		})
        //	};

        return {
            sessionCodeValidation: function (sessionCode,$http) {
                var bodyObj = {
                    "msgType": 2,
                    "properties": {
                        "targetItem": "{\"sessionCode\":\"" + sessionCode + "\"}"
                    }
                };
                $http.post(requestURL, bodyObj, { headers: { 'Content-Type': 'application/json' } }).then(function (response) {
                    response.data;
                }, function (error) {
                    $scope.loading = false;
                    console.log(error);
                });
            }
        }

        return {
        	sessionCodeValidation: function(sessionCode) {
        		var bodyObj = {
        			"msgType": 2,
        			"properties": {
        				"targetItem": "{\"sessionCode\":\"" + sessionCode + "\"}"
        			}
        		};
        		return httpConfig("post", requestURL + "/quizMangerService", bodyObj);
        	},
        	checkUserNameExistOrNot: function(userName, sessionCode) {
        		var bodyObj = {
        			"msgType": 3,
        			"properties": {
        				"targetItem": "{\"userName\":\"" + userName + "\",\"password\":\"\",\"userType\":\"guest\",\"sessionCode\":\"" + sessionCode + "\"}"
        			}
        		};
        		return httpConfig("post", "quizMangerService", bodyObj);
        	},
        	checkLoginCredentials: function(userName, password, sessionCode) {
        		var bodyObj = {
        			"msgType": 3,
        			"properties": {
        				"targetItem": "{\"userName\":\"" + userName + "\",\"password\":\""+password+"\",\"userType\":\"user\",\"sessionCode\":\"" + sessionCode + "\"}"
        			}
        		};
        		return httpConfig("post", "quizMangerService", bodyObj);
        	},
        	getAspects: function(sessionCode) {
        		alert(sessionCode);
        		var bodyObj = {
        			"msgType": 4,
        			"properties": {
        				"targetItem": "{\"sessionCode\":\""+sessionCode+"\"}"
        			}
        		}
        		return httpConfig("post", "quizMangerService", bodyObj);
        	},
        	getQuestion: function() {
        		return httpConfig("get", "getQuestion");
        	}
        }
    }]);
}(angular));