// variables
var startButton = document.querySelector(".start-button");
var timeEl = document.querySelector(".time");
var secondsLeft = 75;
var startSectionEl = document.querySelector("#start-section");
var firstQuestionSectionEl = document.querySelector("#first-question-section");
var secondQuestionSectionEl = document.querySelector("#second-question-section");
var thirdQuestionSectionEl = document.querySelector("#third-question-section");
var endSectionEl = document.querySelector("#end-section");
var questionButtons = document.querySelector(".question-buttons");
var questions = [
{
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: "alerts"
},
{
    title: "The condition in an if / else statement is enclosed with in ___.",
    choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    correctAnswer: "curly brackets"
},
{
    title: "Arrays in JavaScript can be used to store ___.",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    correctAnswer: "all of the above"
},
]

firstQuestionSectionEl.setAttribute("class", "hidden");
secondQuestionSectionEl.setAttribute("class", "hidden");
thirdQuestionSectionEl.setAttribute("class", "hidden");
endSectionEl.setAttribute("class", "hidden");
// The init function is called when the page loads?

// declare a startGame function
function firstQuestion() {
    startSectionEl.setAttribute("class", "hidden");
    firstQuestionSectionEl.classList.remove("hidden");
    setTime()
}

function secondQuestion() {
    firstQuestionSectionEl.setAttribute("class", "hidden");
    secondQuestionSectionEl.classList.remove("hidden");
}

function thirdQuestion() {
    secondQuestionSectionEl.setAttribute("class", "hidden");
    thirdQuestionSectionEl.classList.remove("hidden");
}

// declare a startTimer function
var timeEl = document.querySelector(".time");

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left";
// Subtract time when question is answered incorrectly
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        // sendMessage();
      }
  
    }, 1000);
  }
  
  

// gameDone function called when all questions are answered



// The gameOver function is called when timer reaches 0



// save initials (localStorage)

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", firstQuestion);
questionButtons.addEventListener("click", secondQuestion); 
questionButtons.addEventListener("click", thirdQuestion); 