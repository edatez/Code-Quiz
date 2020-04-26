// var startBtn = document.getElementById ('start');
// var quizContainer = document.getElementById('questions');
// var submitButton = document.getElementById('submit');
// var resultsContainer = document.getElementById('results');

// when the user clicks the start button we need to start the timer and prompt the first question
// click the start button to run  startGame()


var timerEl = document.getElementById("countdown");
var i = 0;

function timer() {
  var timeLeft = 50;

  var timeInterval = setInterval(function() {
    timerEl.textContent = timeLeft + " seconds remaining";
    timeLeft--;

    if (timeLeft === 0) {
      timerEl.textContent = "";
      clearInterval(timeInterval);
    }
    // console.log(timeLeft)
  }, 1000);
}
timer();


document.getElementById("startQuiz-btn").addEventListener("click", function(event) {
  event.preventDefault();
  console.log("button");
  var btn = document.getElementById("startQuiz-btn")
  btn.style.display = "none";
  h1.style.display="none";
  
 });




var score=0;
var questions = [
  {
    question: "Commonly used data types DO NOT include: ",
    choices: ["string", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    question: "The condition in an if else statement is enclosed within _____.",
    choices: ["quotes", "curly brackets", "paranthesis", "square brackets"],
    answer: "paranthesis"
  },
  {
    question: "Arrays in Javascript can be used to store _____:",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above"
  },
  {
    question: "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "paranthesis"],
    answer: "quotes"
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "Terminal/Bash", "for loops ", "console.log"],
    answer: "console.log"
  },
]
// console.log(questions[4].choices[3] == questions[4].answer);


  document.querySelector(".questions").textContent = questions[0].question;


questions[0].choices.forEach(function(choice, index) { 
  // document.querySelector(".choice").textContent = index + choice;
  var btn = document.createElement("button"); 
});



questions[0].choices.forEach(function(choice, index) {
  console.log("Your current index is " + index + " and your current choice is " + choice);
})


