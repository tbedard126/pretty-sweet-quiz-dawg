const startBtn = document.getElementById('start-btn');
const viewHighScores = document.getElementById('header');
// let div = document.createElement("div")
const body = document.body;
const timer = document.getElementById("timer")
const awnserOne = document.createElement("button")
const awnserTwo = document.createElement("button")
const awnserThree = document.createElement("button")
const awnserFour = document.createElement("button")
const header = document.getElementById("title")
const questionTitle = document.getElementById("question-title")
const questionList = document.querySelectorAll(".question-list")
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
let currentQuestion = 0;

startBtn.addEventListener('click', startGame);
viewHighScores.addEventListener('click', viewScores);

// this is all of the questions for the quiz
let questions = [{
    question: 'Commonly used data types DO NOT include:',
    answers: ['strings',
        'booleans',
        'alerts',
        'numbers'],
    correctAnswer: 2,
},
{
    question: "The condition in an if/else statement is enclosed within _____.",
    answers: ['quotes',
        'curly brackets',
        'parenthesis',
        'square brackets'],
    correctAnswer: 1,
},
{
    question: "Arrays in Javascript can be used to store ______.",
    answers: ['numbers and strings',
        'other arrays',
        'booleans',
        'all of the above'],
    correctAnswer: 3,
},
{
    question: 'string values must be enclosed within _____ when being assignes to variables.',
    answers: ['commas',
        'curly brackets',
        'quotes',
        'parenthesis'],

    correctAnswer: 2
}
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
            quizOver()
        }
    }, 1000);
}






function buildQuiz() {
    // variable to store the HTML output
    const output = [];

    // for each question...
    questions.forEach(
        (currentQuestion, questionNumber) => {
            console.log(currentQuestion)
            // variable to store the list of possible answers
            const answers = [];

            // and for each available answer...
            for (const answer in currentQuestion.answers) {
                console.log('boobs')
                // ...add an HTML radio button
                answers.push(
                    `<label>
              <input type="radio" name="question${questionNumber}" value="${answer}">
              ${answer} :
              ${currentQuestion.answers[answer]}
            </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );
    console.log(output)
    // finally combine our output list into one string of HTML and put it on the page

    return output
}

function setQuestions() {
    const elements = buildQuiz()
    const questionsAnswerd = 0;
    elements.forEach((el, i) => {
        console.log(el)
        if (i == questionsAnswerd) {
            console.log("hi mom")
            quizContainer.innerHTML = elements.join('')[i];

        }
    })


}



function startGame() {
    title.textContent = ""
    questionTitle.textContent = ''
    startBtn.textContent = ""
    countdown()
    setQuestions()

}


// function startGame() {
//     awnserOne.textContent = "strings"
//     awnserTwo.textContent = "booleans"
//     awnserThree.textContent = "alerts"
//     awnserFour.textContent = "numbers"
//     title.textContent = ""
//     questionTitle.textContent = "Commonly used data types DO NOT include:"
//     startBtn.textContent = ""
//     awnserOne.addEventListener('click', nextQuestion)
//     awnserTwo.addEventListener('click', nextQuestion)
//     awnserThree.addEventListener('click', nextQuestion)
//     awnserFour.addEventListener('click', nextQuestion)
//     countdown()

//     body.appendChild(awnserOne,);
//     body.appendChild(awnserTwo,);
//     body.appendChild(awnserThree,);
//     body.appendChild(awnserFour,);

// }

// function nextQuestion() {
//     questionTitle.textContent = "The condition in an if/else statement is enclosed within _____."
//     awnserOne.textContent = "quotes"
//     awnserTwo.textContent = "curly brackets"
//     awnserThree.textContent = "parenthesis"
//     awnserFour.textContent = "square brackets"
//     awnserOne.addEventListener('click', questionThree)
//     awnserTwo.addEventListener('click', questionThree)
//     awnserThree.addEventListener('click', questionThree)
//     awnserFour.addEventListener('click', questionThree)
//     console.log("did this work i hope so")
// }

// function questionThree() {
//     questionTitle.textContent = 'Arrays in Javascript can be used to store ______.'
//     awnserOne.textContent = "numbers and strings"
//     awnserTwo.textContent = "other arrays"
//     awnserThree.textContent = "booleans"
//     awnserFour.textContent = "all of the above"
//     awnserOne.addEventListener('click', questionFour)
//     awnserTwo.addEventListener('click', questionFour)
//     awnserThree.addEventListener('click', questionFour)
//     awnserFour.addEventListener('click', questionFour)
// }

// function questionFour() {
//     questionTitle.textContent = 'string values must be enclosed within _____ when being assignes to variables.'
//     awnserOne.textContent = "commas"
//     awnserTwo.textContent = "curly brackets"
//     awnserThree.textContent = "quotes"
//     awnserFour.textContent = "parenthesis"
//     awnserOne.addEventListener('click', quizOver)
// }

function quizOver() {
    title.textContent = "Game Over!!"
    questionTitle.textContent = "Your score is ____"
    awnserOne.textContent = ""
    awnserTwo.textContent = ""
    awnserThree.textContent = ""
    awnserFour.textContent = ""

}

function viewScores() {
    questionTitle.textContent = "Score = 42069"
    awnserOne.addEventListener('click', viewScores)
    console.log("sharted")
}



