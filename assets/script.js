var questions = [
    { 
        prompt: "Arrays in Javascript are used to store ______.",
        answerA: "Numbers and strings",
        answerB: "Other arrays",
        answerC: "Objects",
        answerD: "All of the above"
        correct: "answerD"
    },
    {
        prompt: "Which of the following is the proper way to declare a class in javascript?",
        answerA: "class.apple",
        answerB: "apple.class",
        answerC: "appleClass",
        answerD: "class Apple"
        correct: answerD
    },
    {
        prompt: "",
        answerA: "",
        answerB: "",
        answerC: "",
        answerD: ""
    },
    {  
        prompt: "",
        answerA: "",
        answerB: "",
        answerC: "",
        answerD: ""
    },
    {  
        prompt: "",
        answerA: "",
        answerB: "",
        answerC: "",
        answerD: ""
    }
]


function displayQuestions(){
    for (let i = 0; i < questions.length; i++) {
       //display the questions one by one
        displayQuestion(i)
    }

}

function displayQuestion(questionNumber){
    question = questions[questionNumber]
    prompt = question[prompt]
    //TODO get the rest of the attributes and do things with them

}

//TODO figure out how to get user input and store it / check it against the correct answer. Maybe store correct answer in the questions objects?

//TODO figure out timer

//TODO Level DK, pussy bitch