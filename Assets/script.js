var startBtn = document.getElementById ('start');
var quizContainer = document.getElementById('questions');
var submitButton = document.getElementById('submit');
var resultsContainer = document.getElementById('results');

// when the user clicks the start button we need to start the timer and prompt the first question
// click the start button to run  startGame()

document.getElementById("startQuiz-btn").addEventListener("click", function (event) {
  event.preventDefault();
  console.log("button");
  var btn = document.getElementById("startQuiz-btn")
  btn.style.display = "none";

  // document.getElementById('context'), function (event)
  // #context.style.display = "none"
  displayQuestion(0);
});

document.getElementById('initial-form').style.display = 'none'


var score = 0;
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

function displayQuestion(questionNumber) {
  // soru sonunda boxi kapatmak lazim
  if (questionNumber >= questions.length) {
    document.getElementById('initial-form').style.display = 'block'
    document.getElementById('question-box').style.display = "none"
  } else {

    document.querySelector("#question").textContent = questions[questionNumber].question;
    console.log("test")


    questions[questionNumber].choices.forEach(function (choice, index) {
      var btn = document.createElement("button");
      btn.innerText = choice

      if (choice == questions[questionNumber].answer) {

        btn.addEventListener('click', function () {
        document.getElementById("answer").innerHTML = ""
        displayQuestion(questionNumber + 1)
        })

      } else {
        btn.addEventListener('click', function () {
          document.getElementById("answer").innerHTML = ""
          // timer i azalticak
          displayQuestion(questionNumber + 1)
        })
      }

      document.getElementById('answer').appendChild(btn);

    });
  }
}






//  none dan block a cevir son soruda question-box i cevir 
// basi kapat, 
// submit e event listener ekle
// timer ekle
// initialsdan sonra sonucu kapat high score ac  onu listele
// high score gizlemece
// 
