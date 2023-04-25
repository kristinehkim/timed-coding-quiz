// variables
var startButton = document.querySelector(".start-button");
var timeEl = document.querySelector(".time");
var secondsLeft = 75;
var startSectionEl = document.querySelector("#start-section");
var firstQuestionSectionEl = document.querySelector("#first-question-section");
var secondQuestionSectionEl = document.querySelector("#second-question-section");
var thirdQuestionSectionEl = document.querySelector("#third-question-section");
var endSectionEl = document.querySelector("#end-section");
// var questionButtons = document.querySelector(".question-buttons");
var dataButtons = document.querySelector("#data");
var ifElseButtons = document.querySelector("#if-else");
var arraysButtons = document.querySelector("#arrays");
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
function startGame() {
    startSectionEl.setAttribute("class", "hidden");
    firstQuestionSectionEl.classList.remove("hidden");
    setTime()
    // dataButtons.addEventListener("click", function(event) {
    //     var element = event.target;
    //     if (element.matches("button")) {
    //         var state = element.getAttribute("data-state");
    //         if (state === "correct") {
    //             dataButtons.addEventListener("click", secondQuestion); 
    //         }
    //     }
    // });
}

function secondQuestion() {
    firstQuestionSectionEl.setAttribute("class", "hidden");
    secondQuestionSectionEl.classList.remove("hidden");
}

function thirdQuestion() {
    secondQuestionSectionEl.setAttribute("class", "hidden");
    thirdQuestionSectionEl.classList.remove("hidden");
}

function endGame() {
    thirdQuestionSectionEl.setAttribute("class", "hidden");
    endSectionEl.classList.remove("hidden");
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
startButton.addEventListener("click", startGame);
// dataButtons.addEventListener("click", secondQuestion); 
ifElseButtons.addEventListener("click", thirdQuestion); 
arraysButtons.addEventListener("click", endGame);