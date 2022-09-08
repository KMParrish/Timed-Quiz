const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionScreenElement = document.getElementById("question-screen")
const questionElement = document.getElementById ("question-title")
const answerButtonsElement = document.getElementsByClassName("btn")
const header = document.getElementById("header")
let shuffledQuestions, currentQuestionIndex 

startButton.addEventListener("click",startQuiz)


function startQuiz() {
    console.log("Started")
    startButton.classList.add("hide")
    header.classList.add("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionScreenElement.classList.remove("hide")
    setNextQuestion()
}
function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("btn")
        button.innerText = answer.innerText
        button.classList.add("button")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    });
    }

function resetState() {
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    nextButton.classList.remove("hide")
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add ("wrong")
    }
}
function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}
const questions = [
    { 
        question: "Arrays in Javascript are used to store ______.",
        answers: [
        { answerA: "Numbers and strings", correct: false },
        { answerB: "Other arrays", correct: false},
        { answerC: "Objects", correct: false},
        { answerD: "All of the above", correct: true},
        ]
    },
    {
        question: "Which of the following is the proper way to declare a class in javascript?",
        answerA: "class.apple",
        answerB: "apple.class",
        answerC: "appleClass",
        answerD: "class Apple"
        
    },
    {
        question: "",
        answerA: "",
        answerB: "",
        answerC: "",
        answerD: ""
    },
    {  
        question: "",
        answerA: "",
        answerB: "",
        answerC: "",
        answerD: ""
    },
    {  
        question: "",
        answerA: "",
        answerB: "",
        answerC: "",
        answerD: ""
    }
] 