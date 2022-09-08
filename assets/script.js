const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById("question-screen")
const questionElement = document.getElementById ("question")
const answerButtonsElement = document.getElementById("answer-buttons")
const header = document.getElementById("header")
let shuffledQuestions, currentQuestionIndex 

startButton.addEventListener("click",startQuiz)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
  })


function startQuiz() {
    startButton.classList.add("hide")
    header.classList.add("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
}
function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
      const button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('btn')
      if (answer.correct) {
        button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectAnswer)
      answerButtonsElement.appendChild(button)
    })
  }

  function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
  }
  function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide')
    } else {
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
    }
  }

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
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
            { text: "Numbers and strings", correct: false },
            { text: "Other arrays", correct: false },
            { text: "Objects", correct: false },
            { text: "All of the above", correct: true },
        ]
    },
    {
        question: "Which of the following is the proper way to declare a class in javascript?",
        answers: [
            { text: "class.apple", correct: true },
            { text: "apple.class", correct: false },
            { text: "appleClass", correct: false },
            { text: "class Apple", correct: false },
        ]
    },
    {
        question: "What is the HTML element used to link the index.html to the javascript?",
        answers: [
            { text: "<js>", correct: false},
            { text: "<script>", correct: true },
            { text: "<stylesheet>", correct: false },
            { text: "<scripter>", correct: false },
        ]
    },
    {  
        question: "How do you write a message in an alert box?",
        answers: [
            { text: "alert(message)", correct: true },
            { text: "msg(message)", correct: false },
            { text: "message(alert)", correct: false },
            { text: "alert(msg)", correct: false },
        ]
    },
    {  
        question: "What of the following expresses correct javascript syntax?",
        answers: [
            { text: "appendChild{}", correct: false },
            { text: "AppendChild()", correct: false },
            { text: "appendChild()", correct: true},
            { text: "childAppend()", correct: false},
        ]
    }
] 
