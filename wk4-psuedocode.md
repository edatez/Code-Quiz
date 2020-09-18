* Timed Quiz Application:
* What kind of things or information does the code need to use or keep track of? This information will translate into the variables that needs to be defined.
* What kind of actions does my code need to perform? This will give me the functions.
* How is each action supposed to be triggered or run? This will let me know what kind of event listeners I need to add to allow my code to run at the correct times.

# Things In Code:

* Start Time / Total Seconds
* var totalTime =75;

* Elapsed time
* var elapsedTime = 0;

* Current time left

* Questions -list/array 
    * Question text- object
    * List of possible answers-object
    * Correct answers-object

# Potential HTML Elements:
* Start Button
* var startButton = document.getElementId ('start-button');

* Form/Input to allow us to add our initials

* Buttons for each answer

* current time html element

# What kind of actions does my code need to perform

* when the user clicks the start button I need to start the timer and prompt the first question
startGame() {
     // code here
}

* when the user clicks and answer button I need 
function validateAnswer() {
    if (notValue)
    removeAdditionaltime();
}

    * Validate if their answer is correct
        * if not correct I need to remove additional time from the clock
    * then I need to move to the next question

* I need to use an interval to create a countdown -setInterval (callback, 1000);
    * Increment elapsed time
    * Calc current time left by doing (totalTime - elapsedTime )
    * check if the timer has reached zero
        * I need to end the game
    * update the time left number in the html (textContent)

* Game End functionality 
    * displays the final score
    * provide an input to enter our initials

* When the user submits their initials
    * Add their high score to local storage

# How are the different actions going to run
 * click the start button to run  startGame()
 * click and answer button to run 

Start Quiz

 -Questions:

 1. Commonly used data types DO NOT include:
 -strings
 -booleans x
 -alerts
 -numbers
 2. The condition in an if else statement is enclosed within _____.
 -quotes
 -curly brackets
 -parenthesis x
-square brackets
3. Arrays in Javascript can be used to store _____:
 -numbers and strings
 -other arrays
 -booleans 
 -all of the above x
 4. String values must be enclosed within ____ when being assigned to variables. 
 -commas
 -curly brackets
 -quotes x
-parenthesis
  5. A very useful tool used during development and debugging for printing content to the debugger is:
 -JavaScript x
 -Terminal/Bash
 -for loops 
-console.log
 

    
All done!
Your final score is = ...
Enter initials (Submit button)
Go back Clear High Scores



