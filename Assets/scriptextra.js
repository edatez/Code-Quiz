


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




// function generateQuiz(questions, quizContainer, resultsContainer, submitButton,){}

// function showQuestions (questions, quizContainer){

// var output =[];
// var answers =[];

// for (var i=0; i<questions.length; i++){
//     answers=[];
// }
// }
// function showResults(questions, quizContainer, resultsContainer){}


// // calling show the questions function to run
// showQuestions(questions, quizContainer);

// // when submit button is clicked, show the results
// submitButton.onclick = function(){
//     showResults();
// }






// if(event.target.matches("button")) {
  //   var item = document.createElement("div");
  //   item.textContent = groceries[event.target.parentElement.id];
  //   shoppingCartEl.append(item);
  // }



// var fruits = ["apple", "orange", "cherry"];
// fruits.forEach(myFunction);

// function myFunction(item, index) {
//   document.getElementById("demo").innerHTML += index + ":" + item + "<br>";
// }


// document.querySelector(".questions").textContent = "Commonly used data types DO NOT include:"
// var score= 0
// for (var i=0; i<questions.length; i++){
//   var response=window.prompt (questions[i]);
//   if (response ==questions[i].answer){
//     score++;
//     alert("correct!");
//   }
//   else {
//     alert ("WRONG!");
//   }
// }
// alert ("You got" + score + " !");

// function endGame(){
// document.getElementById("initials-form").addEventListener("submit", function (event)
// event.preventDefault();
// localStorage.setItem("initials", userInitials.value);
// localStorage.setItem("Score"),score,value)
// };

// document.querySelector(".questions").textContent = questions[0].Q1;


//  when the user clicks and answer buttoon we need 
// function validateAnswer() {
//   if (notValue)
//   removeAdditionaltime();
// }



// quizContainer.innerHTML = output.join('');

// use array for questions and use .push. get my third item

// Form/Input to allow us to add our initials
// * When the user submits their initials
//     * Add their high score to local storage

// submitButton.addEventListener('click', showResults);
// $(document).ready(function() {

// /*listEl.addEventListener("click", function(event) {
//   event.preventDefault();
//   if(event.target.matches("button")) {
//     var item = document.createElement("div");
//     item.textContent = groceries[event.target.parentElement.id];
//     shoppingCartEl.append(item);
//   }
// });*/





// [{name:name,score:score},{name:"IT",score:34}]
// localStorage.getItem   //JSON.parse
// localStorage.setItem  // stringify



//  // Run QUIZ
//  reset();