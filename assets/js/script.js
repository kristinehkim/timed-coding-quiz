// variables
var startButton = document.querySelector(".start-button");
var timeEl = document.querySelector(".time");
var timerInterval;
var secondsLeft = 75;
var startSectionEl = document.querySelector("#start-section");
var firstQuestionSectionEl = document.querySelector("#first-question-section");
var secondQuestionSectionEl = document.querySelector("#second-question-section");
var thirdQuestionSectionEl = document.querySelector("#third-question-section");
var endSectionEl = document.querySelector("#end-section");
var answerContainer = document.getElementById("answer-container")
var answerContainerTwo = document.getElementById("answer-container-two")
var answerContainerThree = document.getElementById("answer-container-three")
var btncounter = document.querySelector("#btncounter")
var btncountertwo = document.querySelector("#btncountertwo")
var btncounterthree = document.querySelector("#btncounterthree")
var userInitialsSpan = document.querySelector("#user-initials");

// This is to hide the questions
firstQuestionSectionEl.setAttribute("class", "hidden");
secondQuestionSectionEl.setAttribute("class", "hidden");
thirdQuestionSectionEl.setAttribute("class", "hidden");
endSectionEl.setAttribute("class", "hidden");

// declaring a startGame function
function startGame() {
    startSectionEl.setAttribute("class", "hidden");
    // This is to reveal the question
    firstQuestionSectionEl.classList.remove("hidden");
    setTime()
}

function secondQuestion() {
    firstQuestionSectionEl.setAttribute("class", "hidden");
    // This is to reveal the question
    secondQuestionSectionEl.classList.remove("hidden");
}

function thirdQuestion() {
    secondQuestionSectionEl.setAttribute("class", "hidden");
    // This is to reveal the question
    thirdQuestionSectionEl.classList.remove("hidden");
}

function endGame() {
    thirdQuestionSectionEl.setAttribute("class", "hidden");
    // This is to reveal the last section displaying the remaining seconds
    endSectionEl.classList.remove("hidden");
    clearInterval(timerInterval);
}


// declaring a startTimer function
var timeEl = document.querySelector(".time");

function setTime() {
    // Sets interval in variable
    timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left";
    //    To stop timer at the end of the game
        if (secondsLeft <= 0) {
            endGame();
        }

    }, 1000);
}
function checkAnswerOne(e) {
    var btn = e.target
    if (!btn.matches(".correct")) {
        // decrement by 15 seconds if incorrect or move on if it is correct
        secondsLeft -= 15;
    }
    secondQuestion();
}

function checkAnswerTwo(e) {
    var btn = e.target
    if (!btn.matches(".correct")) {
        // decrement by 15 seconds if incorrect or move on if it is correct
        secondsLeft -= 15;
    }
    thirdQuestion();
}


function checkAnswerThree(e) {
    var btn = e.target
    if (!btn.matches(".correct")) {
        // decrement by 15 seconds if incorrect or move on if it is correct
        secondsLeft -= 15;
    }
    endGame();
}
function renderLastRegistered() {
userInitialsSpan.textContent = localStorage.getItem("initials");
secondsLeft.textContent = localStorage.getItem("score");
}
// Store initials and remaining time in localStorage
var submitBtn = document.querySelector("#submit")

submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    var initials = document.querySelector("#initials").value;
    
    localStorage.setItem("initials", initials);
    initials.textContent = localStorage.getItem("initials");
    localStorage.setItem("score", secondsLeft);
    finalScore.textContent = localStorage.getItem("score");
    renderLastRegistered();
}
);


// Event listeners
startButton.addEventListener("click", startGame);
answerContainer.addEventListener("click", checkAnswerOne);
answerContainerTwo.addEventListener("click", checkAnswerTwo);
answerContainerThree.addEventListener("click", checkAnswerThree);