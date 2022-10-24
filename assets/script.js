const startBtn = document.getElementById('start-btn');
const viewHighScores = document.getElementById('header');
const body = document.body;
const timer = document.getElementById('timer');
const header = document.getElementById('title');
const questionTitle = document.getElementById('question-title');
const questionList = document.querySelectorAll('.question-list');
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');

// declare variables
let currentShowingQuestion = 0;

startBtn.addEventListener('click', startGame);
viewHighScores.addEventListener('click', viewScores);

quizContainer.addEventListener('click', event => {
    if (event.target.className == `answers-${currentShowingQuestion}`) {
        if (
            event.target.value ==
            questions[currentShowingQuestion].answers[
            questions[currentShowingQuestion].correctAnswer
            ]
        ) {
            checkGameOver();
        } else {
            // HERE IS WHERE YOU WOULD REMOVE TIME
            // YOUR WRONG
            checkGameOver();
        }
    }
});

function checkGameOver() {
    currentShowingQuestion++;
    if (currentShowingQuestion > 3) {
        // IN HERE IS WHEN GAME IS OVER
        quizContainer.innerHTML = '';
        quizOver();
    } else {
        // GOES TO NEXT QUESTION
        buildQuiz();
    }
}

// this is all of the questions for the quiz
let questions = [
    {
        question: 'Commonly used data types DO NOT include:',
        answers: ['strings', 'booleans', 'alerts', 'numbers'],
        correctAnswer: 2,
    },
    {
        question: 'The condition in an if/else statement is enclosed within _____.',
        answers: ['quotes', 'curly brackets', 'parenthesis', 'square brackets'],
        correctAnswer: 1,
    },
    {
        question: 'Arrays in Javascript can be used to store ______.',
        answers: [
            'numbers and strings', 'other arrays', 'booleans', 'all of the above',
        ],
        correctAnswer: 3,
    },
    {
        question:
            'string values must be enclosed within _____ when being assignes to variables.',
        answers: ['commas', 'curly brackets', 'quotes', 'parenthesis'],
        correctAnswer: 2,
    },
];

function countdown() {
    var timeLeft = 30;

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
            quizOver();
        }
    }, 1000);
}

function buildQuiz() {
    let question = questions[currentShowingQuestion].question;
    let answers = questions[currentShowingQuestion].answers;

    let output = [];
    let answerArr = [];

    answers.forEach((answer, i) => {
        answerArr.push(
            `<button class="answers-${currentShowingQuestion}" value="${answer}">${answer}</button>`
        );
    });

    output.push(`<div class="question"> ${question} </div>
                 <div class="answers"> ${answerArr.join('')} </div>`);

    quizContainer.innerHTML = output.join('');
}

function startGame() {
    title.textContent = '';
    questionTitle.textContent = '';
    startBtn.textContent = '';
    countdown();
    buildQuiz();
}

function quizOver() {
    title.textContent = 'Game Over!!';
    questionTitle.textContent = 'Your score is ____';
}

function viewScores() {
    questionTitle.textContent = 'Score = 42069';
    console.log('sharted');
}
