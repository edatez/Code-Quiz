// var startBtn = document.getElementById ('start');
// var quizContainer = document.getElementById('questions');
// var submitButton = document.getElementById('submit');
// var resultsContainer = document.getElementById('results');

// when the user clicks the start button we need to start the timer and prompt the first question
// click the start button to run  startGame()


// var timerEl = document.getElementById("countdown");
// var i = 0;

// function timer() {
//   var timeLeft = 50;

//   var timeInterval = setInterval(function() {
//     timerEl.textContent = timeLeft + " seconds remaining";
//     timeLeft--;

//     if (timeLeft === 0) {
//       timerEl.textContent = "";
//       clearInterval(timeInterval);
//     }
//     // console.log(timeLeft)
//   }, 1000);
// }
// timer();


document.getElementById("startQuiz-btn").addEventListener("click", function(event) {
  event.preventDefault();
  console.log("button");
  var btn = document.getElementById("startQuiz-btn")
  btn.style.display = "none";
  
// document.getElementById(h1), function(event)
// #h1.style.display = "none"
 });

document.getElementById('initial-form').style.display='none'





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

function displayQuestion(questionNumber){
// soru sonunda ki 
  if (questionNumber>=questions.length){
    document.getElementById('initial-form').style.display='block'
    document.getElementById('question-box').style.display="none"
  } else {
  
document.querySelector("#question").textContent = questions[questionNumber].question;
console.log ("test")


questions[questionNumber].choices.forEach(function(choice, index) { 
  // document.querySelector(".choice").textContent = index + choice;
  var btn = document.createElement("button"); 
  btn.innerText = choice

  if (choice==questions[questionNumber].answer){

    btn.addEventListener('click', function(){
      document.getElementById("answer").innerHTML=""
      displayQuestion(questionNumber+1)
    })

  } else {
    btn.addEventListener('click', function(){
      document.getElementById("answer").innerHTML=""
      // timer i azalticak
      displayQuestion(questionNumber+1)
    })
  }

  document.getElementById('answer').appendChild(btn);


});
  }
}
displayQuestion(0);





//  none dan block a cevir son soruda question-box i cevir 


// function showQuestion(j) {

//   var questionelement = document.getElementById("question-text");
//   questionelement.textContent = question[j];
  
//   var optionselement = document.getElementById("options");
//   optionselement.innerHTML = "";
  
//   var resultelement = document.getElementById("results")


// basi kapat, 
// submit e event listener ekle
// timer ekle
// initialsdan sonra sonucu kapat high score ac  onu listele
// high score gizlemece
// 
