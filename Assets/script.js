var startBtn = document.getElementById ('start');
var quizContainer = document.getElementById('questions');
var submitButton = document.getElementById('submit');
var resultselement = document.getElementById('results');

var timerelement = document.getElementById("timer")
var timeLeft = 75;
var score = 0;
var timeInterval;
var highscores =[];
var questionNumber = 0;



function starttimer() {


timeInterval = setInterval(function() {
  timerelement.textContent = "Time:" + timeLeft;
  timeLeft--;   

  if (timeLeft <= 0) {
    timerelement.textContent = "";
    clearInterval(timeInterval);
    
    score = timeLeft;
    timerelement.textContent = "";
    clearInterval(timeInterval);

    choiceselement.innerHTML = "";
    form.style.display="block";
  }

}, 1000);
}




// when the user clicks the start button we need to start the timer and prompt the first question
// click the start button to run  startGame()

document.getElementById("startQuiz-btn").addEventListener("click", function (event) {
  event.preventDefault(); 

  console.log("button", event.target);

  var btn = document.getElementById("startQuiz-btn")
  btn.style.display = "none";

  // document.getElementById('context'), function (event)
  // #context.style.display = "none"
  starttimer();
  displayQuestion(0);
  
});

document.getElementById('initial-form').style.display = 'none';



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

    document.getElementById('question-box').style.display = "none"
    document.getElementById('initial-form').style.display = 'block' 

    timerelement.textContent = "";
    clearInterval(timeInterval);
    score = timeLeft;
    timerelement.textContent = "";
    clearInterval(timeInterval);
    console.log("score: ", score)
   resultselement.textContent = "Your Final Score: " + score;
   // document.getElementById("resultScore").textContent =  "Your Final Score: " + score;
    optionselement.innerHTML = "";
    form.style.display="block";
    // create a function for this and cALL HERE
  } else {

    document.querySelector("#question").textContent = questions[questionNumber].question;
    console.log("test")


    // for (var i=0; i< questions[questionNumber].choices.length; i++){
    //   var btn = document.createElement("button");
    //   btn.innerText = questions[questionNumber].choices[i]

    // }
// to create answers buttons 

    questions[questionNumber].choices.forEach(function (choice, index) {
      var btn = document.createElement("button");
      btn.innerText = choice

      if (choice == questions[questionNumber].answer) {
        btn.addEventListener('click', function () {
          console.log("right")
        document.getElementById("answer").innerHTML = ""
        displayQuestion(questionNumber + 1)
        })

      } else {
        btn.addEventListener('click', function () {
          console.log("wrong")
          document.getElementById("answer").innerHTML = ""
          // cleaning the question area for next question
          // timer drops
          timeLeft = timeLeft - 10
          displayQuestion(questionNumber + 1)
        })
      }

//Scoring and initials.
//WHEN the game is over I can save my initials and score 

document.getElementById("submit-button").addEventListener("click", saveScore);
if (localStorage.getItem("score")) {
  highscores = JSON.parse(localStorage.getItem("score"));
}
else {
  highscores =[];
}
function saveScore(event) {
  event.preventDefault();

  var yourData = {
      score: score,
      initials: document.getElementById("initials-form").value
  }
  scoreArray.push(yourData);
  localStorage.setItem("result", JSON.stringify(scoreArray));
  
}



document.getElementById('answer').appendChild(btn);

    });
  }
}

// submit eventlistener for the initials-form, take the value of the input -
// local storage-save
// list of scores.
// push new list to the...save the data...
// JSON.stringify () convert an array into string to save into local stoarge

// JSON.parse() string  back into an array -out from local storage






//  none dan block a cevir son soruda question-box i cevir 
// basi kapat, 
// submit e event listener ekle
// timer ekle
// initialsdan sonra sonucu kapat high score ac  onu listele
// high score gizlemece
// 
