var quizManger = angular.module("QM", ["ngRoute", "ngSanitize"]);
var aspectObj = "";
var questionObj = "";
var totalScore = 0;
var answerclicked = "";
var roundId = 1;
//var requestURL = "http://54.235.20.141:8080/quizmanager/getResponse";
//var requestURL = "http://52.44.89.185:8080/quizmanager/getResponse";
var requestURL = "http://217.198.66.49:8080/quizmanager/getResponse";
//var requestURL = "http://172.16.19.57:8080/quizmanager/getResponse";
//var requestURL = "http://172.16.19.57:8097/quizmanager/getResponse";
                                                                                                                                