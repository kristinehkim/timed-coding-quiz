// variables
var startButton = document.querySelector(".start-button");
var timeEl = document.querySelector(".time");
var secondsLeft;
var isWin = false;

// declare a startGame function


function startGame() {
    isWin = false;
    secondsLeft = 75;
    startButton.disabled = true;
    startTimer()
}
  

    //   start timer

// declare a startTimer function
var timeEl = document.querySelector(".time");

function setTime() {
    // var secondsLeft = 75;
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
  
  // Function to create and append colorsplosion image
//   function sendMessage() {
//     timeEl.textContent = " ";
//     var imgEl = document.createElement("img");
//     imgEl.setAttribute("src", "images/image_1.jpg");
//     mainEl.appendChild(imgEl);
  
//   }
  
  setTime();

//   Goes to new screen for new question(DOM manipulation)



// gameDone function called when all questions are answered



// The gameOver function is called when timer reaches 0



// save initials (localStorage)

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);