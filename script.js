var quizContainer = document.getElementById('questions');
var submitButton = document.getElementById('submit');
var resultsContainer = document.getElementById('results');

var timerEl = document.getElementById("countdown");
var i = 0;

function timer() {
  var timeLeft = 20;

  var timeInterval = setInterval(function() {
    timerEl.textContent = timeLeft + " seconds remaining";
    timeLeft--;

    if (timeLeft === 0) {
      timerEl.textContent = "";
      clearInterval(timeInterval);
    }

  }, 1000);
}
timer();


function generateQuiz(questions, quizContainer, resultsContainer, submitButton,){}

function showQuestions (questions, quizContainer){

var output =[];
var answers =[];

for (var i=0; i<questions.length; i++){
    answers=[];
}
}
function showResults(questions, quizContainer, resultsContainer){}


// calling show the questions function to run
showQuestions(questions, quizContainer);

// when submit button is clicked, show the results
submitButton.onclick = function(){
    showResults();
}

var myQuestions = []
{
question: "Commonly used data types DO NOT include:",
choiceA : "strings"
choiceB : "booleans"
choiceC: "alerts"
choiceD: "numbers"

quizContainer.innerHTML = output.join('');
},

question : "The condition in an if else statement is enclosed within _____."



// on submit, show results
submitButton.addEventListener('click', showResults);
