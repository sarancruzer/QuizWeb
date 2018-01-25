var quizManger = angular.module("QM");
//var requestURL = "http://54.235.20.141:8080/quizmanager/getResponse";
quizManger.controller("QuestionController", ["$scope", "$rootScope", "$location", "$timeout", "$http","$sce",
	function (scope, rootScope, loaction, timeout, $http,sce) {
	    $("body").removeClass("login-bg");
	    scope.goToMain = function () {
	        // alert("inside gotoMain");
	        loaction.path("qm_main");
	    };
	    //console.log("Test CleAR INTERVAL");
	    //for (i = 0; i < 100; i++) {
	    //    window.clearInterval(i);
	    //}
	    scope.largeanswers = false;
	    $(".progress-bar").width(0 * 100 + "%")
	    scope.flag = 0;
	    scope.contentimagefound = false;
	    scope.contentfirstansimagefound = false;
	    scope.contentsecondansimagefound = false;
	    scope.contentthirdansimagefound = false;
	    scope.contentfourthansimagefound = false;
	    scope.firstansimagesource = "";
	    scope.secondansimagesource = "";
	    scope.thirdansimagesource = "";
	    scope.fourthansimagesource = "";
	    scope.firstquestionclicked = false;
	    //rootScope.sessionObject.score = 0;

	    //commented by praveen

	    //var bodyObj = {

	    //    "msgType": 6,
	    //    "properties": {

	    //        "targetItem": "{\"roundId\":\"1\",\"challengeId\":\"1\"}"

	    //    }

	    //}
	    //$http.post(requestURL, bodyObj, { headers: { 'Content-Type': 'application/json' } }).then(function (response) {
	    //    var secondsCounter = 0;
	    //    scope.questions = response.data.results.aspectselection;
	    //    scope.sessionTime = response.data.results.aspectselection[0].time;
	    //    scope.questionIndex = 0;
	    //    scope.displayingQuestionID = scope.questions[scope.questionIndex].questionId;
	    //    //setInterval
	    //    var secondCounterInterval = setInterval(function () {
	    //        secondsCounter++;
	    //        if (secondsCounter == response.data.results.aspectselection[0].time) {
	    //            clearInterval(secondCounterInterval)
	    //        };
	    //        $("#secondsDom").text(scope.sessionTime-- + " secs");
	    //        $(".progress-bar").width((secondsCounter / response.data.results.aspectselection[0].time) * 100 + "%")
	    //    }, 1000)
	    //});



	    scope.goTosecondQuestions = function () {
	        $(".progress-bar").width(0 * 100 + "%")
	        answerclicked = false;
	        //answerinserted = "false";
	        var secquestsecondsCounter = 0;
	        var remainingTime = 5;
	        var lastFiveSeconds = 0;
	        scope.secondquestionclicked = false;
	        scope.secondtimerSeconds = 0;
	        scope.flag = 0;
	        var test = [];

	        //Hiding the content source 
	        scope.contentimagefound = false;
	        scope.contentvideofound = false;
	        scope.contentaudiofound = false;
	        $('video').removeAttr("autoplay");
	        $('audio').removeAttr("autoplay");
	        jQuery("#audio_content").trigger('pause');
	        jQuery("#video_content").trigger('pause');

	        //Hiding the answer source
	        scope.contentfirstansimagefound = false;
	        scope.contentsecondansimagefound = false;
	        scope.contentthirdansimagefound = false;
	        scope.contentfourthansimagefound = false;

	        if (questionObj.contentImg[0] != null && questionObj.contentImg[0] != "") {
	            scope.contentimagefound = true;
	            scope.contentvideofound = false;
	            scope.contentaudiofound = false;
	            scope.contentsource = questionObj.contentImg[0];

	        }
	        else if (questionObj.contentAudio[0] != null && questionObj.contentAudio[0] != "") {
	            $('audio').attr("autoplay");
	            scope.contentimagefound = false;
	            scope.contentvideofound = false;
	            scope.contentaudiofound = true;
	            scope.contentsource = questionObj.contentAudio[0];
	        }
	        else if (questionObj.contentVideo[0] != null && questionObj.contentVideo[0] != "") {
	            $('video').attr("autoplay");
	            scope.contentimagefound = false;
	            scope.contentvideofound = true;
	            scope.contentaudiofound = false;
	            scope.contentsource = questionObj.contentVideo[0];
	        }
	        if (questionObj.contentImg[0] != null && questionObj.contentImg[0] != "") {
	            scope.contentimagefound = true;
	            scope.contentvideofound = false;
	            scope.contentaudiofound = false;
	            scope.contentsource = questionObj.contentImg[0];

	        }
	        else if (questionObj.contentAudio[0] != null && questionObj.contentAudio[0] != "") {
	            $('audio').attr("autoplay");
	            scope.contentimagefound = false;
	            scope.contentvideofound = false;
	            scope.contentaudiofound = true;
	            scope.contentsource = questionObj.contentAudio[0];
	        }
	        else if (questionObj.contentVideo[0] != null && questionObj.contentVideo[0] != "") {
	            $('video').attr("autoplay");
	            scope.contentimagefound = false;
	            scope.contentvideofound = true;
	            scope.contentaudiofound = false;
	            scope.contentsource = questionObj.contentVideo[0];
	        }

	        if ((questionObj.ans1Image != null && questionObj.ans1Image != "")
              && (questionObj.ans2Image != null && questionObj.ans2Image != "")
              && (questionObj.ans3Image != null && questionObj.ans3Image != "")
              && (questionObj.ans4Image != null && questionObj.ans4Image != "")) {
	            scope.contentfirstansimagefound = true;
	            scope.contentsecondansimagefound = true;
	            scope.contentthirdansimagefound = true;
	            scope.contentfourthansimagefound = true;

	            scope.firstansimagesource = questionObj.ans1Image;
	            scope.secondansimagesource = questionObj.ans2Image;
	            scope.thirdansimagesource = questionObj.ans3Image;
	            scope.fourthansimagesource = questionObj.ans4Image;
	        }
	        else {

	            if (questionObj.ans1Image != null && questionObj.ans1Image != "") {
	                scope.contentfirstansimagefound = true;
	                if (questionObj.ans2Image == "") {
	                    scope.contentsecondansimagefound = true;
	                    scope.secondclass = "imghid";
	                }
	                if (questionObj.ans3Image == "") {
	                    scope.contentthirdansimagefound = true;
	                    scope.thirdclass = "imghid";
	                }
	                if (questionObj.ans3Image == "") {
	                    scope.contentfourthansimagefound = true;
	                    scope.fourthclass = "imghid";
	                }
	                //$("#img_secondans").addClass("imghid")
	                //$("#img_thirdans").addClass("imghid")
	                //$("#img_fourthans").addClass("imghid")
	                console.log("ans1Image");
	                console.log(questionObj.ans1Image);
	                scope.firstansimagesource = questionObj.ans1Image;
	            }
	            if (questionObj.ans2Image != null && questionObj.ans2Image != "") {

	                scope.contentsecondansimagefound = true;
	                if (questionObj.ans1Image == "") {
	                    scope.contentfirstansimagefound = true;
	                    scope.firstclass = "imghid";
	                }
	                if (questionObj.ans3Image == "") {
	                    scope.contentthirdansimagefound = true;
	                    scope.thirdclass = "imghid";
	                }
	                if (questionObj.ans4Image == "") {
	                    scope.contentfourthansimagefound = true;
	                    scope.fourthclass = "imghid";
	                }
	                //$("#img_firstans").addClass("imghid")
	                //$("#img_thirdans").addClass("imghid")
	                //$("#img_fourthans").addClass("imghid")
	                scope.secondansimagesource = questionObj.ans2Image;
	            }
	            if (questionObj.ans3Image != null && questionObj.ans3Image != "") {

	                scope.contentthirdansimagefound = true;

	                if (questionObj.ans1Image == "") {
	                    scope.contentfirstansimagefound = true;
	                    scope.firstclass = "imghid";
	                }
	                if (questionObj.ans2Image == "") {
	                    scope.contentsecondansimagefound = true;
	                    scope.secondclass = "imghid";
	                }
	                if (questionObj.ans4Image == "") {
	                    scope.contentfourthansimagefound = true;
	                    scope.fourthclass = "imghid";
	                }

	                //$("#img_firstans").addClass("imghid")
	                //$("#img_secondans").addClass("imghid")
	                //$("#img_fourthans").addClass("imghid")
	                scope.thirdansimagesource = questionObj.ans3Image;
	            }
	            if (questionObj.ans4Image != null && questionObj.ans4Image != "") {

	                scope.contentfourthansimagefound = true;
	                if (questionObj.ans1Image == "") {
	                    scope.contentfirstansimagefound = true;
	                    scope.firstclass = "imghid";
	                }
	                if (questionObj.ans2Image == "") {
	                    scope.contentsecondansimagefound = true;
	                    scope.secondclass = "imghid";
	                }
	                if (questionObj.ans3Image == "") {
	                    scope.contentthirdansimagefound = true;
	                    scope.thirdclass = "imghid";
	                }
	                scope.fourthansimagesource = questionObj.ans4Image;
	            }
	        }
	        test.push(questionObj);
	        scope.questions = test;
	        scope.sessionTime = scope.questions[0].duration;
	        lastFiveSeconds = scope.sessionTime - 5;
	        scope.displayingQuestionID = scope.questions[0].questionID;
	        scope.aspectID = scope.questions[0].aspectID;
	        
	        var secCounterInterval = setInterval(function () {
	            console.log("In First Timer interval");
	            var tempFlag = true;//to avoid duplicate insertion
	            secquestsecondsCounter++;
	            if (secquestsecondsCounter > lastFiveSeconds) {
	                $("#secondsDom").text("");
	                $("#secondsDom").text("Next question in " + remainingTime);
	                remainingTime--;
	            }
	            else {
	                if (scope.sessionTime != scope.secondtimerSeconds) {

	                    scope.secondtimerSeconds++;
	                    $("#secondsDom").text(scope.sessionTime - scope.secondtimerSeconds + " secs");
	                }
	            }

	            if (secquestsecondsCounter == scope.questions[0].duration) {
	                if (!tempFlag) return;
	                tempFlag = false;
	                if (!answerclicked) {
	                    console.log("Answer not clicked in Question 2(Seconds Question COunter");
                        //alert("Inside ond counter if answer not clicked 1");
	                    scope.selectedAnswer = "";
	                    var bodyObj = {
	                        "msgType": 7,
	                        "properties": {
	                            "targetItem": "{\"sessionCode\":\"" + rootScope.sessionObject.sessionCode + "\",\"aspectId\":\"" + scope.aspectID + "\",\"questionId\":\"" + scope.displayingQuestionID + "\",\"selectedAnswer\":\"" + scope.selectedAnswer + "\",\"userId\":\"" + rootScope.sessionObject.userId + "\",\"userType\":\"" + rootScope.sessionObject.userType + "\"}"
	                        }
	                    };


	                    $http.post(requestURL, bodyObj, { headers: { 'Content-Type': 'application/json' } }).then(function (response) {
	                        scope.answerResult = response.data.results;
	                        //answerinserted = "true";
	                    });
	                    //secCounterInterval = 0;
	                }
	                clearInterval(secCounterInterval);
	                $("#answer_div").addClass("disabledbutton")
	            }
	            $(".progress-bar").width((secquestsecondsCounter / scope.sessionTime) * 100 + "%")
	        }, 1000)
	        var answerKeys = ["firstAnswer", "secondAnswer", "thirdAnswer", "fourthAnswer"];
	        setTimeout(function () {
	            for (var i = 0; i <= 3; i++) {
	                $("#" + answerKeys[i]+" div").css('visibility', 'visible');
	            }
	        }, 1000);
	    };

	    scope.goTothirdQuestions = function () {
	        //alert("inside third question");
	        scope.flag = 0;
	        $(".progress-bar").width(0 * 100 + "%")
	        answerclicked = false;
	        // answerinserted = "false"
	        var thirdquestsecondsCounter = 0;
	        var remainingTime = 5;
	        var lastFiveSeconds = 0;
	        scope.thirdquestionclicked = false;
	        scope.thirdtimerSeconds = 0;

            //Hiding the content source 
	        scope.contentimagefound = false;
	        scope.contentvideofound = false;
	        scope.contentaudiofound = false;
	        $('video').removeAttr("autoplay");
	        $('audio').removeAttr("autoplay");
	        jQuery("#audio_content").trigger('pause');
	        jQuery("#video_content").trigger('pause');
	        //Hiding the answer source
	        scope.contentfirstansimagefound = false;
	        scope.contentsecondansimagefound = false;
	        scope.contentthirdansimagefound = false;
	        scope.contentfourthansimagefound = false;

	        //if (questionObj.contentImg != null && questionObj.contentImg != "") {
	        //    scope.contentimagefound = true;

	        //    if (questionObj.contentImg == "hat_image.png") {
	        //        scope.contentsource = "img/portfolio/hat_image.png";
	        //        //$("#img_content").attr("src", "img/portfolio/hat_image.png");
	        //    }

	        //    if (questionObj.contentImg == "LandOnMoon.jpg") {
	        //        scope.contentfirstansimagefound = true;
	        //        scope.contentsecondansimagefound = true;
	        //        scope.contentthirdansimagefound = true;
	        //        scope.contentfourthansimagefound = true;
	        //        scope.contentsource = "img/portfolio/LandOnMoon.jpg";
	        //        //$("#img_content").attr("src", "img/portfolio/LandOnMoon.jpg");
	        //        scope.firstansimagesource = "img/portfolio/China.png";
	        //        scope.secondansimagesource = "img/portfolio/Russia.gif";
	        //        scope.thirdansimagesource = "img/portfolio/Sweden.png";
	        //        scope.fourthansimagesource = "img/portfolio/usa.gif";
	        //    }
	        //}
	        //if (questionObj.ans1Image == "Earth.png") {
	        //    //alert(questionObj.ans1Image);
	        //    scope.contentfirstansimagefound = true;
	        //    scope.contentsecondansimagefound = true;
	        //    scope.contentthirdansimagefound = true;
	        //    scope.contentfourthansimagefound = true;
	        //    scope.firstansimagesource = "img/portfolio/Earth.png";
	        //    scope.secondansimagesource = "img/portfolio/Jupiter.jpg";
	        //    scope.thirdansimagesource = "img/portfolio/mercury.jpg";
	        //    scope.fourthansimagesource = "img/portfolio/venus.jpg";

	        //    //$("#img_firstans").attr("src", "img/portfolio/Earth.png");
	        //    //$("#img_secondans").attr("src", "img/portfolio/Jupiter.jpg");
	        //    //$("#img_thirdans").attr("src", "img/portfolio/mercury.jpg");
	        //    //$("#img_fourthans").attr("src", "img/portfolio/venus.jpg");
	        //}

	        if (questionObj.contentImg[0] != null && questionObj.contentImg[0] != "") {
	            scope.contentimagefound = true;
	            scope.contentvideofound = false;
	            scope.contentaudiofound = false;
	            scope.contentsource = questionObj.contentImg[0];

	        }
	        else if (questionObj.contentAudio[0] != null && questionObj.contentAudio[0] != "") {
	            $('audio').attr("autoplay");
	            scope.contentimagefound = false;
	            scope.contentvideofound = false;
	            scope.contentaudiofound = true;
	            scope.contentsource = questionObj.contentAudio[0];
	        }
	        else if (questionObj.contentVideo[0] != null && questionObj.contentVideo[0] != "") {
	            $('video').attr("autoplay");
	            scope.contentimagefound = false;
	            scope.contentvideofound = true;
	            scope.contentaudiofound = false;
	            scope.contentsource = questionObj.contentVideo[0];
	        }
	        //if ((questionObj.ans1Image[0] != null && questionObj.ans1Image[0] != "")
            //     && (questionObj.ans2Image[0] != null && questionObj.ans2Image[0] != "")
            //     && (questionObj.ans3Image[0] != null && questionObj.ans3Image[0] != "")
            //     && (questionObj.ans4Image[0] != null && questionObj.ans4Image[0] != "")) {
	        //    scope.contentfirstansimagefound = true;
	        //    scope.contentsecondansimagefound = true;
	        //    scope.contentthirdansimagefound = true;
	        //    scope.contentfourthansimagefound = true;
	        //    scope.firstansimagesource = questionObj.ans1Image[0];
	        //    scope.secondansimagesource = questionObj.ans2Image[0];
	        //    scope.thirdansimagesource = questionObj.ans3Image[0];
	        //    scope.fourthansimagesource = questionObj.ans4Image[0];
	        //}
	        if (questionObj.contentImg[0] != null && questionObj.contentImg[0] != "") {
	            scope.contentimagefound = true;
	            scope.contentvideofound = false;
	            scope.contentaudiofound = false;
	            scope.contentsource = questionObj.contentImg[0];

	        }
	        else if (questionObj.contentAudio[0] != null && questionObj.contentAudio[0] != "") {
	            $('audio').attr("autoplay");
	            scope.contentimagefound = false;
	            scope.contentvideofound = false;
	            scope.contentaudiofound = true;
	            scope.contentsource = questionObj.contentAudio[0];
	        }
	        else if (questionObj.contentVideo[0] != null && questionObj.contentVideo[0] != "") {
	            $('video').attr("autoplay");
	            scope.contentimagefound = false;
	            scope.contentvideofound = true;
	            scope.contentaudiofound = false;
	            scope.contentsource = questionObj.contentVideo[0];
	        }

	        if ((questionObj.ans1Image != null && questionObj.ans1Image != "")
                && (questionObj.ans2Image != null && questionObj.ans2Image != "")
                && (questionObj.ans3Image != null && questionObj.ans3Image != "")
                && (questionObj.ans4Image != null && questionObj.ans4Image != "")) {
	            scope.contentfirstansimagefound = true;
	            scope.contentsecondansimagefound = true;
	            scope.contentthirdansimagefound = true;
	            scope.contentfourthansimagefound = true;

	            scope.firstansimagesource = questionObj.ans1Image;
	            scope.secondansimagesource = questionObj.ans2Image;
	            scope.thirdansimagesource = questionObj.ans3Image;
	            scope.fourthansimagesource = questionObj.ans4Image;
	        }
	        else {

	            if (questionObj.ans1Image != null && questionObj.ans1Image != "") {
	                scope.contentfirstansimagefound = true;
	                if (questionObj.ans2Image == "") {
	                    scope.contentsecondansimagefound = true;
	                    scope.secondclass = "imghid";
	                }
	                if (questionObj.ans3Image == "") {
	                    scope.contentthirdansimagefound = true;
	                    scope.thirdclass = "imghid";
	                }
	                if (questionObj.ans3Image == "") {
	                    scope.contentfourthansimagefound = true;
	                    scope.fourthclass = "imghid";
	                }
	                //$("#img_secondans").addClass("imghid")
	                //$("#img_thirdans").addClass("imghid")
	                //$("#img_fourthans").addClass("imghid")
	                console.log("ans1Image");
	                console.log(questionObj.ans1Image);
	                scope.firstansimagesource = questionObj.ans1Image;
	            }
	            if (questionObj.ans2Image != null && questionObj.ans2Image != "") {

	                scope.contentsecondansimagefound = true;
	                if (questionObj.ans1Image == "") {
	                    scope.contentfirstansimagefound = true;
	                    scope.firstclass = "imghid";
	                }
	                if (questionObj.ans3Image == "") {
	                    scope.contentthirdansimagefound = true;
	                    scope.thirdclass = "imghid";
	                }
	                if (questionObj.ans4Image == "") {
	                    scope.contentfourthansimagefound = true;
	                    scope.fourthclass = "imghid";
	                }
	                //$("#img_firstans").addClass("imghid")
	                //$("#img_thirdans").addClass("imghid")
	                //$("#img_fourthans").addClass("imghid")
	                scope.secondansimagesource = questionObj.ans2Image;
	            }
	            if (questionObj.ans3Image != null && questionObj.ans3Image != "") {

	                scope.contentthirdansimagefound = true;

	                if (questionObj.ans1Image == "") {
	                    scope.contentfirstansimagefound = true;
	                    scope.firstclass = "imghid";
	                }
	                if (questionObj.ans2Image == "") {
	                    scope.contentsecondansimagefound = true;
	                    scope.secondclass = "imghid";
	                }
	                if (questionObj.ans4Image == "") {
	                    scope.contentfourthansimagefound = true;
	                    scope.fourthclass = "imghid";
	                }

	                //$("#img_firstans").addClass("imghid")
	                //$("#img_secondans").addClass("imghid")
	                //$("#img_fourthans").addClass("imghid")
	                scope.thirdansimagesource = questionObj.ans3Image;
	            }
	            if (questionObj.ans4Image != null && questionObj.ans4Image != "") {

	                scope.contentfourthansimagefound = true;
	                if (questionObj.ans1Image == "") {
	                    scope.contentfirstansimagefound = true;
	                    scope.firstclass = "imghid";
	                }
	                if (questionObj.ans2Image == "") {
	                    scope.contentsecondansimagefound = true;
	                    scope.secondclass = "imghid";
	                }
	                if (questionObj.ans3Image == "") {
	                    scope.contentthirdansimagefound = true;
	                    scope.thirdclass = "imghid";
	                }
	                //$("#img_secondans").addClass("imghid")
	                //$("#img_thirdans").addClass("imghid")
	                //$("#img_firstans").addClass("imghid")
	                scope.fourthansimagesource = questionObj.ans4Image;
	            }
	        }

	        scope.flag = 0;
	        var test = [];

	        test.push(questionObj);
	        scope.questions = test;
	        scope.sessionTime = scope.questions[0].duration;
	        lastFiveSeconds = scope.sessionTime - 5;
	        scope.displayingQuestionID = scope.questions[0].questionID;
	        scope.aspectID = scope.questions[0].aspectID;
	        // to avoid duplicate insertion
	        var thirdCounterInterval = setInterval(function () {
	            console.log("In Third Timer interval");
	            var tempFlag = true;
	            //alert("inside setInterval");
	            thirdquestsecondsCounter++;
	            if (thirdquestsecondsCounter > lastFiveSeconds) {
	                $("#secondsDom").text("");
	                $("#secondsDom").text("Next question in " + remainingTime);
	                remainingTime--;
	            }
	            else {
	                if (scope.sessionTime != scope.thirdtimerSeconds) {
	                    scope.thirdtimerSeconds++;
	                    $("#secondsDom").text(scope.sessionTime - scope.thirdtimerSeconds + " secs");
	                }
	            }
	            console.log("thirdquestsecondsCounter " + thirdquestsecondsCounter);
	            console.log("scope.questions[0].time " + scope.questions[0].duration);
	            if (thirdquestsecondsCounter == scope.questions[0].duration) {
	                if (!tempFlag) return;
	                tempFlag = false;
	                //alert(scope.thirdquestionclicked);
	                //setTimeout(function () {
	                //    $(".row answers").attr('disabled', 'disabled');
	                //}, 5000);
	                //$(".row answers").attr('disabled', 'disabled');
	                if (!answerclicked) {
	                    console.log("Answer not clicked in Question 3(Seconds counter");
	                   // alert("inside ans 3 if not clicked");
	                    scope.selectedAnswer = "";
	                    var bodyObj = {
	                        "msgType": 7,
	                        "properties": {
	                            "targetItem": "{\"sessionCode\":\"" + rootScope.sessionObject.sessionCode + "\",\"aspectId\":\"" + scope.aspectID + "\",\"questionId\":\"" + scope.displayingQuestionID + "\",\"selectedAnswer\":\"" + scope.selectedAnswer + "\",\"userId\":\"" + rootScope.sessionObject.userId + "\",\"userType\":\"" + rootScope.sessionObject.userType + "\"}"
	                        }
	                    };

	                    $http.post(requestURL, bodyObj, { headers: { 'Content-Type': 'application/json' } }).then(function (response) {
	                        scope.answerResult = response.data.results;
	                        //answerinserted = true;

	                    });

	                    //thirdCounterInterval = 0;
	                }
	                //$(".row answers").attr('disabled', 'disabled');
	                // alert("in Thrid question counter loop before location path")
	                clearInterval(thirdCounterInterval);
	                $("#answer_div").addClass("disabledbutton")
	                loaction.path("qm_main");
	                //jQuery("#mainpageLoad").click();
	                scope.$apply();
	                //console.log("in Thrid question counter loop after location path")
	                //$(".progress-bar").width(0 + "%");

	            }

	            //if (thirdquestsecondsCounter <= scope.questions[0].time) {
	            //$(".progress-bar").width((thirdquestsecondsCounter / scope.sessionTime) * 100 + "%")


	            //}
	            //if (scope.sessionTime != scope.thirdtimerSeconds) {

	            //    scope.thirdtimerSeconds++;
	            //    $("#secondsDom").text(scope.thirdtimerSeconds + " secs");
	            //}


	            //$(".progress-bar").width(secondsCounter + "%");
	            $(".progress-bar").width((thirdquestsecondsCounter / scope.sessionTime) * 100 + "%")
	        }, 1000)
	        var answerKeys = ["firstAnswer", "secondAnswer", "thirdAnswer", "fourthAnswer"];
	        setTimeout(function () {
	            for (var i = 0; i <= 3; i++) {
	                if (i !== clickedPosition)
	                    $("#" + answerKeys[i] + " div").css('visibility', 'visible');
	            }
	        }, 1000);
	    };

	    //scope.hideContent = function () {
	    //    alert("trig");
	    //    $("#question_content *").addClass("hidediv");
	    //    $(".progress *").addClass("hidediv");
	    //};


	    //For solving Error: [$interpolate:interr] Can't interpolate: - Angular issue
	    scope.trustSrc = function (src) {
	        return sce.trustAsResourceUrl(src);
	    }
	 

	    var secondsCounter = 0;
	    answerclicked = false;
	    scope.timerSeconds = 0;
	    var remainingTime = 5;
	    var lastFiveSeconds = 0;

	    //Hiding the content source 
	    scope.contentimagefound = false;
	    scope.contentvideofound = false;
	    scope.contentaudiofound = false;
	    $('video').removeAttr("autoplay");
	    $('audio').removeAttr("autoplay");
	    jQuery("#audio_content").trigger('pause');
	    jQuery("#video_content").trigger('pause');
	    //Hiding the answer source
	    scope.contentfirstansimagefound = false;
	    scope.contentsecondansimagefound = false;
	    scope.contentthirdansimagefound = false;
	    scope.contentfourthansimagefound = false;

	    //Dynamically changing the question content based on the contents

	    if (questionObj.contentImg[0] != null && questionObj.contentImg[0] != "") {
	        scope.contentimagefound = true;
	        scope.contentvideofound = false;
	        scope.contentaudiofound = false;
	        scope.contentsource = questionObj.contentImg[0];

	    }
	    else if (questionObj.contentAudio[0] != null && questionObj.contentAudio[0] != "") {
	        $('audio').attr("autoplay");
	        scope.contentimagefound = false;
	        scope.contentvideofound = false;
	        scope.contentaudiofound = true;
	        scope.contentsource = questionObj.contentAudio[0];
	    }
	    else if (questionObj.contentVideo[0] != null && questionObj.contentVideo[0] != "") {
	        $('video').attr("autoplay");
	        scope.contentimagefound = false;
	        scope.contentvideofound = true;
	        scope.contentaudiofound = false;
	        scope.contentsource = questionObj.contentVideo[0];
	    }

	    if ((questionObj.ans1Image != null && questionObj.ans1Image != "")
               && (questionObj.ans2Image != null && questionObj.ans2Image != "")
               && (questionObj.ans3Image != null && questionObj.ans3Image != "")
               && (questionObj.ans4Image != null && questionObj.ans4Image != "")) {
	        scope.contentfirstansimagefound = true;
	        scope.contentsecondansimagefound = true;
	        scope.contentthirdansimagefound = true;
	        scope.contentfourthansimagefound = true;

	        scope.firstansimagesource = questionObj.ans1Image;
	        scope.secondansimagesource = questionObj.ans2Image;
	        scope.thirdansimagesource = questionObj.ans3Image;
	        scope.fourthansimagesource = questionObj.ans4Image;
	    }
	    else {

	        if (questionObj.ans1Image != null && questionObj.ans1Image != "") {
	            scope.contentfirstansimagefound = true;
	            if (questionObj.ans2Image == "") {
	                scope.contentsecondansimagefound = true;
	                scope.secondclass = "imghid";
	            }
	            if (questionObj.ans3Image == "") {
	                scope.contentthirdansimagefound = true;
	                scope.thirdclass = "imghid";
	            }
	            if (questionObj.ans3Image == "") {
	                scope.contentfourthansimagefound = true;
	                scope.fourthclass = "imghid";
	            }
	            //$("#img_secondans").addClass("imghid")
	            //$("#img_thirdans").addClass("imghid")
	            //$("#img_fourthans").addClass("imghid")
	            console.log("ans1Image");
	            console.log(questionObj.ans1Image);
	            scope.firstansimagesource = questionObj.ans1Image;
	        }
	        if (questionObj.ans2Image != null && questionObj.ans2Image != "") {

	            scope.contentsecondansimagefound = true;
	            if (questionObj.ans1Image == "") {
	                scope.contentfirstansimagefound = true;
	                scope.firstclass = "imghid";
	            }
	            if (questionObj.ans3Image == "") {
	                scope.contentthirdansimagefound = true;
	                scope.thirdclass = "imghid";
	            }
	            if (questionObj.ans4Image == "") {
	                scope.contentfourthansimagefound = true;
	                scope.fourthclass = "imghid";
	            }
	            //$("#img_firstans").addClass("imghid")
	            //$("#img_thirdans").addClass("imghid")
	            //$("#img_fourthans").addClass("imghid")
	            scope.secondansimagesource = questionObj.ans2Image;
	        }
	        if (questionObj.ans3Image != null && questionObj.ans3Image != "") {

	            scope.contentthirdansimagefound = true;

	            if (questionObj.ans1Image == "") {
	                scope.contentfirstansimagefound = true;
	                scope.firstclass = "imghid";
	            }
	            if (questionObj.ans2Image == "") {
	                scope.contentsecondansimagefound = true;
	                scope.secondclass = "imghid";
	            }
	            if (questionObj.ans4Image == "") {
	                scope.contentfourthansimagefound = true;
	                scope.fourthclass = "imghid";
	            }

	            //$("#img_firstans").addClass("imghid")
	            //$("#img_secondans").addClass("imghid")
	            //$("#img_fourthans").addClass("imghid")
	            scope.thirdansimagesource = questionObj.ans3Image;
	        }
	        if (questionObj.ans4Image != null && questionObj.ans4Image != "") {

	            scope.contentfourthansimagefound = true;
	            if (questionObj.ans1Image == "") {
	                scope.contentfirstansimagefound = true;
	                scope.firstclass = "imghid";
	            }
	            if (questionObj.ans2Image == "") {
	                scope.contentsecondansimagefound = true;
	                scope.secondclass = "imghid";
	            }
	            if (questionObj.ans3Image == "") {
	                scope.contentthirdansimagefound = true;
	                scope.thirdclass = "imghid";
	            }
	            //$("#img_secondans").addClass("imghid")
	            //$("#img_thirdans").addClass("imghid")
	            //$("#img_firstans").addClass("imghid")
	            scope.fourthansimagesource = questionObj.ans4Image;
	        }
	    }

        //if()
        //     || 
        //     || (questionObj.ans3Image[0] != null && questionObj.ans3Image[0] != "")
        //     || (questionObj.ans4Image[0] != null && questionObj.ans4Image[0] != "")) {
	    //    scope.contentfirstansimagefound = true;
	    //    scope.contentsecondansimagefound = true;
	    //    scope.contentthirdansimagefound = true;
	    //    scope.contentfourthansimagefound = true;
	       
	    //    scope.secondansimagesource = questionObj.ans2Image[0];
	    //    scope.thirdansimagesource = questionObj.ans3Image[0];
	    //    scope.fourthansimagesource = questionObj.ans4Image[0];
	    //}


	    var test = [];
	    test.push(questionObj);
	    scope.questions = test;
	    console.log("firstquestiondiv");
	    console.log(scope.questions);

	    if (questionObj.screenSetting == "answers") {
	        scope.hidecontent = true;
	        scope.largeanswers = true;
	    }
	    if (questionObj.screenSetting == "withoutanswers") {
	        scope.hidecontent = true;
	        scope.largeanswers = true;
	        scope.hideanswertext = true;
	    }

	    scope.sessionTime = scope.questions[0].duration;
	    lastFiveSeconds = scope.sessionTime - 5;
	    scope.displayingQuestionID = scope.questions[0].questionID;
	    scope.aspectID = scope.questions[0].aspectID;
	    //setInterval
	    
	        secondCounterInterval = setInterval(function () {
	            secondsCounter++;
	            var tempFlag = true; //to prevent calling answer clicked api two times
	        console.log("In Second Timer interval");
	        if (secondsCounter > lastFiveSeconds) {
	            $("#secondsDom").text("");
	            $("#secondsDom").text("Next question in " + remainingTime);
	            remainingTime--;
	        }
	        else {
	            if (scope.sessionTime != scope.timerSeconds) {

	                scope.timerSeconds++;
	                $("#secondsDom").text(scope.sessionTime - scope.timerSeconds + " secs");
	            }
	        }

	        if (secondsCounter == scope.questions[0].duration) {
	            if (!tempFlag) return;
	            tempFlag = false;
 	            //alert("hj");

	            //setTimeout(function () {
	            //    $(".row answers").attr('disabled', 'disabled');
	            //}, 5000);
	            //$(".row answers").attr('disabled', 'disabled');
	            //alert(answerclicked);
	            if (!answerclicked) {
	                console.log("Answer not clicked in Question 2(Seconds counter");
	               // alert("inside if the answer is not clicked2");
	                scope.selectedAnswer = "";
	                var bodyObj = {
	                    "msgType": 7,
	                    "properties": {
	                        "targetItem": "{\"sessionCode\":\"" + rootScope.sessionObject.sessionCode + "\",\"aspectId\":\"" + scope.aspectID + "\",\"questionId\":\"" + scope.displayingQuestionID + "\",\"selectedAnswer\":\"" + scope.selectedAnswer + "\",\"userId\":\"" + rootScope.sessionObject.userId + "\",\"userType\":\"" + rootScope.sessionObject.userType + "\"}"
	                    }
	                };

	                $http.post(requestURL, bodyObj, { headers: { 'Content-Type': 'application/json' } }).then(function (response) {
	                    scope.answerResult = response.data.results;

	                    //answerinserted = true;
	                    //console.log("result");
	                    //console.log(response.data.results);
	                });
	            }
	            clearInterval(secondCounterInterval)
	            $("#answer_div").addClass("disabledbutton")
	            //$("#answer_div *").attr("disabled", "disabled")
	        };


	        //$(".progress-bar").width(secondsCounter + "%");
	        $(".progress-bar").width((secondsCounter / scope.sessionTime) * 100 + "%")
	    }, 1000)




	    scope.trmingAnswer = function (ans) {
	        return ans.replace(/\s/g, "");
	    }

	    scope.validateAnswer = function (questionObj, clickedAnswer, clickedAnswerImage, clickedPosition, n) {
	        var answerKeys = ["firstAnswer", "secondAnswer", "thirdAnswer", "fourthAnswer"];
	        if (n && n !== scope.flag) {
	            scope.flag = n;
	            answerclicked = true;
	            setTimeout(function () {
	                console.log("clicked answer ");
	                if (clickedAnswer != "") {
	                   // alert("if the user  click answer not null validate answer");
	                    var bodyObj = {
	                        "msgType": 7,
	                        "properties": {
	                            "targetItem": "{\"sessionCode\":\"" + rootScope.sessionObject.sessionCode + "\",\"aspectId\":\"" + scope.aspectID + "\",\"questionId\":\"" + scope.displayingQuestionID + "\",\"selectedAnswer\":\"" + clickedAnswer + "\",\"userId\":\"" + rootScope.sessionObject.userId + "\",\"userType\":\"" + rootScope.sessionObject.userType + "\"}"
	                        }
	                    };
	                }
	                //else
	                //{
	                //    alert("if the user didn't click validate answer");
	                //    var bodyObj = {
	                //        "msgType": 7,
	                //        "properties": {
	                //            "targetItem": "{\"sessionCode\":\"" + rootScope.sessionObject.sessionCode + "\",\"aspectId\":\"" + scope.aspectID + "\",\"questionId\":\"" + scope.displayingQuestionID + "\",\"selectedAnswer\":\"" + clickedAnswerImage + "\",\"userId\":\"" + rootScope.sessionObject.userId + "\",\"userType\":\"" + rootScope.sessionObject.userType + "\"}"
	                //        }
	                //    };
	                //}



	                $http.post(requestURL, bodyObj, { headers: { 'Content-Type': 'application/json' } }).then(function (response) {
	                    scope.answerResult = response.data.results;
	                    scope.iscorrect = scope.answerResult.verifyanswer;
	                    console.log(scope.iscorrect);
	                    console.log(scope.answerResult.verifyanswer);
	                    if (scope.iscorrect == "correct") {
	                        totalScore++;
	                        rootScope.Score = totalScore;
	                    }
	                });
	            }, 1000);

	            var answerFlag = (questionObj.correctAnswer == clickedAnswer) ? true : false;
	            //alert("Correct answer clicked " + clickedPosition);
	            if (answerFlag) {
	                if (clickedPosition == 0) {
	                    $("#firstAnswer div").css("background-color", "#5ABB5E");
	                }

	                if (clickedPosition == 1) {
	                    $("#secondAnswer div").css("background-color", "#5ABB5E");
	                }

	                if (clickedPosition == 2) {
	                    $("#thirdAnswer div").css("background-color", "#5ABB5E");
	                }
	                if (clickedPosition == 3) {
	                    $("#fourthAnswer div").css("background-color", "#5ABB5E");
	                }
	                for (var i = 0; i <= 3; i++) {
	                    if (i === clickedPosition) continue;
                        $("#" + answerKeys[i] + " div").css('visibility', 'hidden');
	                }
	            }
	            else {
	                var correctAns = "";
	                if (questionObj.correctAnswer === questionObj.firstAnswer) correctAns = "firstAnswer";
	                if (questionObj.correctAnswer === questionObj.secondAnswer) correctAns = "secondAnswer";
	                if (questionObj.correctAnswer === questionObj.thirdAnswer) correctAns = "thirdAnswer";
	                if (questionObj.correctAnswer === questionObj.fourthAnswer) correctAns = "fourthAnswer";
	                $("#" + correctAns + " div").css("background-color", "#5ABB5E");
	                for (var i = 0; i <= 3; i++) {
	                    if (correctAns === answerKeys[i]) {
	                    }
	                    else if (i === clickedPosition) {
	                        $("#" + answerKeys[i] + " div").css("background-color", "#F15A6B");
	                    } else {
                            $("#" + answerKeys[i] + " div").css('visibility', 'hidden');
	                    }
	                }
	            }
	        }
	        else {
	            return false;
	        }
	        //if (scope.questionIndex != scope.questions.length - 1)
	        //    scope.questionIndex = scope.questionIndex + 1;
	        //timeout(function () {
	        //    //questionObj = "";
	        //    console.log("nextquestion");
	        //    console.log(questionObj);
	        //    scope.displayingQuestionID = scope.questions[0].questionId;
	        //}, 1000);
	    }
	}

]);