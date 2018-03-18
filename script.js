var questions = [{
    question: "Are you sleeping enough?",
}, {
    question: "Are you feeling cold?",
}];
var currentQuestion = 0;
var ansr = [0, 0, 0, 0];
var quizOver = 0;
var response = 1;
$(document).ready(function () {
    console.log('ready');
    if(response===1)
    {
        questions = [{
            question: "Hey, are you feeling good today?",
        }, {
            question: "Are you having proper food?",
        }];        
        $(this).find("#yes").on("click", function () {
        if (!quizOver) {
                ansr[0]++;
                console.log('1');
                currentQuestion++;
            if (currentQuestion < 2) {
                displayCurrentQuestion();
            } else {
                displayScore();
                quizOver = true;
            }
        }
    });
    $(this).find("#no").on("click", function () {
        if (!quizOver) {
                ansr[1]++;
                console.log('2');
                currentQuestion++;
            if (currentQuestion < 2) {
                displayCurrentQuestion();
            } else {
                displayScore();
                quizOver = true;
            }
        }
    });
}
else if(response===2){
    questions = [{
        question: "Are you feeling good today?",
    }, {
        question: "Does your temprature seem normal to you?",
    }];
    $(this).find("#yes").on("click", function () {
        if (!quizOver) {
                ansr[0]++;
                console.log('1');
                currentQuestion++;
            if (currentQuestion < 2) {
                displayCurrentQuestion();
            } else {
                displayScore();
                quizOver = true;
            }
        }
    });
    $(this).find("#no").on("click", function () {
        if (!quizOver) {
                ansr[1]++;
                console.log('2');
                currentQuestion++;
            if (currentQuestion < 2) {
                displayCurrentQuestion();
            } else {
                displayScore();
                quizOver = true;
            }
        }
    });
}
else if(response===3){
    questions = [{
        question: "Have you been taking time off you duties?",
    }, {
        question: "Have you been demotivated?",
    }];
    $(this).find("#yes").on("click", function () {
        if (!quizOver) {
                ansr[0]++;
                console.log('1');
                currentQuestion++;
            if (currentQuestion < 2) {
                displayCurrentQuestion();
            } else {
                displayScore();
                quizOver = true;
            }
        }
    });
    $(this).find("#no").on("click", function () {
        if (!quizOver) {
                ansr[1]++;
                console.log('2');
                currentQuestion++;
            if (currentQuestion < 2) {
                displayCurrentQuestion();
            } else {
                displayScore();
                quizOver = true;
            }
        }
    });
}
displayCurrentQuestion();
});
function displayCurrentQuestion() {
    console.log("In display current Question");
    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .p50");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    $(questionClass).fadeOut(0);
    $(questionClass).text(question);
    $(questionClass).fadeIn(500);
}
function displayScore() {
    var winner = '';
    if (ansr[0]===0 && response===1) {
        winner = 'You should really get a good meal, as your vitals are suffering.';
    }
    else if (ansr[0]===1 && response===1) {
        winner = 'Your vitals are taking a hit, maybe try getting a nutritious meal.';
    }
    else if (ansr[0]===2 && response===1) {
        winner = "Okay, that's great. Your vitals seem a bit off, rest more.";
    }
    else if (ansr[0]===0 && response===2) {
        winner = 'Your vitals are a little low, maybe consult a doctor if you feel unwell.';
    }
    else if (ansr[0]===1 && response===2) {
        winner = 'Your conditions point to an illness, try to visit a doctor soon.';
    }
    else if (ansr[0]===2 && response===2) {
        winner = 'You should go visit a doctor soon.';
    }
    else if (ansr[0]===0 && response===3) {
        winner = "Okay, that's great. Try exercising more.";
    }
    else if (ansr[0]===1 && response===3) {
        winner = 'I really hope you feel better soon.';
    }
    else if (ansr[0]===2 && response===3) {
        winner = "That's not unheard of, you should try to talk to other people about this.";
    }
    $(document).find(".quizContainer > .p50").fadeOut(0);
    $(document).find(".quizContainer > .p50").text(winner);
    $(document).find(".quizContainer > .p50").fadeIn(500);
    $(document).find(".txt").hide();
    $(document).find(".newhr").hide();
}