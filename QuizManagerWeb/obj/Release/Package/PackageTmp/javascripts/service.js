var request = require("request");
//var requestURL = "http://54.235.20.141:8080/quizmanager/getResponse"
var request_factory = function(req, res) {
	console.log(req.body);
	request({
		method: "post",
		url: requestURL,
		json: req.body
	}, function(err, response, body) {
		console.log(response.body);
		res.send(response.body);
	});
};

exports.quizMangerService = function(req, res) {
	request_factory(req,res);
};

var response = {
	sessionCodeValidation: "AF*8@1",
	userNameValidataion: "kishore",
	checkLoginCredentials: {
		userName: "kishore",
		password: "*123"
	},
	authenticationSuccess: {
		sessionCode: "AF*8@1",
		course: "English"
	},
	aspects: [{
		aspectName: "People",
		color: "#5ABB5E"
	}, {
		aspectName: "Selection",
		color: "#8863A9"
	}, {
		aspectName: "Election",
		color: "#2FBCD0"
	}, {
		aspectName: "Royality",
		color: "#F15A6B"
	}],
	questionList: {
		QuestionLists: [{
			"questionId": 1,
			"courseId": 2,
			"aspectId": 2,
			"questionTitle": "Origin of Planets",
			"questionContent": "How many planets are in the solar system 1",
			"firstAnswer": 10,
			"secondAnswer": 9,
			"thirdAnswer": 11,
			"fourthAnswer": 8,
			"authorName": "Kishore",
			"correctAnswer": 9,
			"questionTime": 45
		}, {
			"questionId": 2,
			"courseId": 2,
			"aspectId": 2,
			"questionTitle": "Origin of Planets",
			"questionContent": "How many planets are in the solar system 2 ",
			"firstAnswer": 10,
			"secondAnswer": 9,
			"thirdAnswer": 11,
			"fourthAnswer": 8,
			"authorName": "Kishore",
			"correctAnswer": 9,
			"questionTime": 45
		}, {
			"questionId": 3,
			"courseId": 2,
			"aspectId": 2,
			"questionTitle": "Origin of Planets",
			"questionContent": "How many planets are in the solar system 3",
			"firstAnswer": 10,
			"secondAnswer": 9,
			"thirdAnswer": 11,
			"fourthAnswer": 8,
			"authorName": "Kishore",
			"correctAnswer": 9,
			"questionTime": 45
		}],
		questionTime: 45
	}
}
/*exports.sessionCodeValidation = function(req, res) {
	if (req.query.sessionCode == response.sessionCodeValidation) {
		res.send({
			Exists: true
		});
	} else {
		res.send({
			Exists: false
		});
	}
};*/
exports.userNameValidataion = function(req, res) {
	if (req.body.userName == response.userNameValidataion) {
		res.send({
			Exists: true
		});
	} else {
		res.send({
			Exists: false
		});
	}
}
exports.checkLoginCredentials = function(req, res) {
	console.log("req.body.userName " + req.body.userName);
	console.log("response.checkLoginCredentials.userName " + response.checkLoginCredentials.userName);
	console.log("req.body.password " + req.body.password);
	console.log("response.checkLoginCredentials.password " + response.checkLoginCredentials.password);
	if (req.body.userName == response.checkLoginCredentials.userName && req.body.password == response.checkLoginCredentials.password) {
		res.send(response.authenticationSuccess);
	} else {
		res.send({
			Exists: false
		});
	}
}
exports.getAspects = function(req, res) {
	res.send(response.aspects);
}
exports.getQuestions = function(req, res) {
	res.send(response.questionList);
}