const startBtn = document.getElementById('start-btn');
const viewHighScores = document.getElementById('header');
let div = document.createElement("div")
const body = document.body;
const timer = document.getElementById("timer")
const questionOne = document.createElement("div")
const questionTwo = document.createElement("div")
const questionThree = document.createElement("div")
const questionFour = document.createElement("div")

startBtn.addEventListener('click', startGame);
viewHighScores.addEventListener('click', viewScores);


// div.textContent = "Did this work?"

body.appendChild(div);

function countdown() {
    var timeLeft = 60;

    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
            // Set the `textContent` of `timerEl` to show the remaining seconds
            timer.textContent = timeLeft + ' seconds remaining';
            // Decrement `timeLeft` by 1
            timeLeft--;
        } else if (timeLeft === 1) {
            // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
            timer.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            timer.textContent = '';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
        }
    }, 1000);
}










function startGame() {
    questionOne.textContent = "Did this work"
    questionTwo.textContent = "Did this work"
    questionThree.textContent = "Did this work"
    questionFour.textContent = "Did this work"
    countdown()

    body.appendChild(questionOne, questionTwo, questionThree, questionFour);

}

function viewScores() {
    console.log("sharted")
}

const question = {

}

