const startBtn = document.getElementById('start-btn');
const viewHighScores = document.getElementById('header');
let div = document.createElement("div")
const body = document.body;
const timer = document.getElementById("timer")
const awnserOne = document.createElement("button")
const awnserTwo = document.createElement("button")
const awnserThree = document.createElement("button")
const awnserFour = document.createElement("button")
const header = document.getElementById("title")
const questionTitle = document.getElementById("question-title")

startBtn.addEventListener('click', startGame);
viewHighScores.addEventListener('click', viewScores);
// awnserOne.addEventListener('click', nextQuestion);
// awnserTwo.addEventListener('click', nextQuestion);
// awnserThree.addEventListener('click', nextQuestion);
// awnserFour.addEventListener('click', nextQuestion);



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
            window.alert("TIMES UP NERD!!!")
        }
    }, 1000);
}

function startGame() {
    awnserOne.textContent = "strings"
    awnserTwo.textContent = "booleans"
    awnserThree.textContent = "alerts"
    awnserFour.textContent = "numbers"
    title.textContent = ""
    questionTitle.textContent = "Commonly used data types DO NOT include:"
    startBtn.textContent = ""
    awnserOne.addEventListener('click', nextQuestion)
    awnserTwo.addEventListener('click', nextQuestion)
    awnserThree.addEventListener('click', nextQuestion)
    awnserFour.addEventListener('click', nextQuestion)
    countdown()

    body.appendChild(awnserOne,);
    body.appendChild(awnserTwo,);
    body.appendChild(awnserThree,);
    body.appendChild(awnserFour,);

}



const questions = {
    title: 'Commonly used data types DO NOT include:',
    alternatives: ['stings', 'booleans', 'alerts', 'numbers'],
    correctAwnser: 2,
}

function nextQuestion() {
    questionTitle.textContent = "The condition in an if/else statement is enclosed within _____."
    awnserOne.textContent = "quotes"
    awnserTwo.textContent = "curly brackets"
    awnserThree.textContent = "parenthesis"
    awnserFour.textContent = "square brackets"
    awnserOne.addEventListener('click', questionThree)
    awnserTwo.addEventListener('click', questionThree)
    awnserThree.addEventListener('click', questionThree)
    awnserFour.addEventListener('click', questionThree)
    console.log("did this work i hope so")
}

function questionThree() {
    questionTitle.textContent = 'Arrays in Javascript can be used to store ______.'
    awnserOne.textContent = "numbers and strings"
    awnserTwo.textContent = "other arrays"
    awnserThree.textContent = "booleans"
    awnserFour.textContent = "all of the above"
    awnserOne.addEventListener('click', questionFour)
    awnserTwo.addEventListener('click', questionFour)
    awnserThree.addEventListener('click', questionFour)
    awnserFour.addEventListener('click', questionFour)
}

function questionFour() {
    questionTitle.textContent = 'string values must be enclosed within _____ when being assignes to variables.'
    awnserOne.textContent = "commas"
    awnserTwo.textContent = "curly brackets"
    awnserThree.textContent = "quotes"
    awnserFour.textContent = "parenthesis"
}

function viewScores() {
    questionTitle.textContent = "Score = 42069"
    awnserOne.addEventListener('click', viewScores)
    console.log("sharted")
}
// {
//     title; 'The condition in an if/else statement is enclosed within _____.',
//         alternatives;['quotes', 'curly brackets', 'parenthesis', 'square brackets'],
//             correctAwnser; 1,
// }

// {
//     title; 'Arrays in Javascript can be used to store ______.',
//         alternatives;['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
//             correctAwnser; 3,
// }

// {
//     title; 'string values must be enclosed within _____ when being assignes to variables.',
//         alternatives;['commas', 'curly brackets', 'quotes', 'parenthesis'],
//             correctAwnser; 2;
// }



