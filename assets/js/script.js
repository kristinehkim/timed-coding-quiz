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
var finalScore = document.querySelector("#finalScore")
var btnStop = document.querySelector("#stop")


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
    timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left";
        if (secondsLeft <= 0) {
            clearInterval(timerInterval);


        //     if (isWin && secondsLeft > 0) {
        //         clearInterval(timerInterval);
        //         // winGame();
        // }
    
        // }

        // if (secondsLeft === 0) {
        //     // Stops execution of action at set interval
        //     clearInterval(timerInterval);
        //     endGame();
        }

    }, 1000);
}
function checkAnswerOne(e) {
    var btn = e.target
    if (!btn.matches(".correct")) {
        // decrement by 15 seconds 
        secondsLeft-= 15;
    } else {

    }
    console.log("correct");
    secondQuestion();
}

function checkAnswerTwo(e) {
    var btn = e.target
    if (!btn.matches(".correct")) {
        // decrement by 15 seconds
        secondsLeft-= 15;
    } else {
        
    }
    console.log("correct");
    thirdQuestion();
}


function checkAnswerThree(e) {
    var btn = e.target
    if (!btn.matches(".correct")) {
        // decrement by 15
        secondsLeft-= 15;
    } else {
     
    }
    console.log("correct");
    endGame();
}


// create an array for players scores and initials declare a variable for high scores set this variable to either the high scores arrays that we get from local storage || empty array []
// every time a player finishes and enters their initials and submit then push to the high score array in local storage
// Below is from the mini project
// function getWins() {
//     // Get stored value from client storage, if it exists
//     var storedWins = localStorage.getItem("winCount");
//     // If stored value doesn't exist, set counter to 0
//     if (storedWins === null) {
//       winCounter = 0;
//     } else {
//       // If a value is retrieved from client storage set the winCounter to that value
//       winCounter = storedWins;
//     }
//     //Render win count to page
//     win.textContent = winCounter;
//   }



// gameDone function called when all questions are answered



// The gameOver function is called when timer reaches 0


// save initials (localStorage)

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);
answerContainer.addEventListener("click", checkAnswerOne);
answerContainerTwo.addEventListener("click", checkAnswerTwo);
answerContainerThree.addEventListener("click", checkAnswerThree);
// arraysButtons.addEventListener("click", endGame);