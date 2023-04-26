// variables
var startButton = document.querySelector(".start-button");
var timeEl = document.querySelector(".time");
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
var subtractedSeconds = 60;


var counter = 0;
var count = localStorage.getItem("count");


// var questionButtons = document.querySelector(".question-buttons");
// var dataButtons = document.querySelector("#data");
// var ifElseButtons = document.querySelector("#if-else");
// var arraysButtons = document.querySelector("#arrays");
// var questions = [
// {
//     title: "Commonly used data types DO NOT include:",
//     choices: ["strings", "booleans", "alerts", "numbers"],
//     correctAnswer: "alerts"
// },
// {
//     title: "The condition in an if / else statement is enclosed with in ___.",
//     choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
//     correctAnswer: "curly brackets"
// },
// {
//     title: "Arrays in JavaScript can be used to store ___.",
//     choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
//     correctAnswer: "all of the above"
// },
// ]

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
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left";
        // Subtract time when question is answered incorrectly
        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and append image
            // sendMessage();
        }

    }, 1000);
}
function checkAnswerOne(e) {
    var btn = e.target
    if (!btn.matches(".correct")) {
        // decrement by 15? seconds and update the content of the time element
        subtractedSeconds--;
        timeEl.textContent = subtractedSeconds + " seconds left";
        setTime()
        // timerInterval = setInterval(function() {
        //     subtractedSecondsLeft--;
        //     timeEl.textContent = subtractedSecondsLeft + " seconds left";
        // })
        return
    }
    console.log("correct");
    secondQuestion();
}

function checkAnswerTwo(e) {
    var btn = e.target
    if (!btn.matches(".correct")) {
        // decrement by 15 seconds and update the content of the time element
        return
    }
    console.log("correct");
    thirdQuestion();
}

function checkAnswerThree(e) {
    var btn = e.target
    if (!btn.matches(".correct")) {
        // decrement by 15 seconds and update the content of the time element
        return
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
// btncounter.addEventListener("click", function() {
    
//     counter++;
//     console.log(counter);
//     counter.textContent = count;
//     localStorage.setItem("count", counter);
    
// })

// btncountertwo.addEventListener("click", function() {
  
//     counter++;
//     console.log(counter);
//     counter.textContent = count;
//     localStorage.setItem("count", counter);
// })
// btncounterthree.addEventListener("click", function() {

//     counter++;
//     console.log(counter);
//     counter.textContent = count;
//     localStorage.setItem("count", counter);
// })




// gameDone function called when all questions are answered



// The gameOver function is called when timer reaches 0


// answerContainer.addEventListener("click", checkAnswerOne)

// save initials (localStorage)

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);
answerContainer.addEventListener("click", checkAnswerOne)
answerContainerTwo.addEventListener("click", checkAnswerTwo)
answerContainerThree.addEventListener("click", checkAnswerThree)
// arraysButtons.addEventListener("click", endGame);