// JavaScript Logic
// 1. Quiz ka data (Sawal aur Jawab)
var questionsData = [
    
     {
        question: "What will be the output of: console.log(typeof NaN);",
        options: ["'NaN'", "'number'", "'undefined'", "'object'"],
        correct: 1 // 'number' correct hai
    },
    {
        question: "What will be the output of: console.log(2 + '2');",
        options: ["4", "'22'", "NaN", "TypeError"],
        correct: 1 // '22' correct hai
    },
    {
        question: "What will be the output of: console.log(2 - '2');",
        options: ["0", "'22'", "NaN", "Error"],
        correct: 0 // 0 correct hai (Minus string ko number me convert kar deta hai)
    },
    {
        question: "Which keyword is used to declare a block-scoped variable that can be updated but not re-declared?",
        options: ["var", "let", "const", "fixed"],
        correct: 1 // let correct hai
    },
    {
        question: "What will be the output of: console.log(true + false);",
        options: ["truefalse", "NaN", "1", "0"],
        correct: 2 // 1 correct hai (true = 1, false = 0)
    },
    {
        question: "Which method is used to add a new element to the END of an array?",
        options: ["pop()", "push()", "shift()", "unshift()"],
        correct: 1 // push() correct hai
    },
    {
        question: "Which method removes the FIRST element from an array?",
        options: ["pop()", "push()", "shift()", "unshift()"],
        correct: 2 // shift() correct hai
    },
    {
        question: "What is the output of: console.log(3 === '3');",
        options: ["true", "false", "undefined", "Error"],
        correct: 1 // false correct hai (=== type bhi check karta hai)
    },
    {
        question: "How do you write a single-line comment in JavaScript?",
        options: ["<!-- Comment -->", "/* Comment */", "// Comment", "# Comment"],
        correct: 2 // // Comment correct hai
    },
     {
        question: "Which built-in method converts a JSON string into a JavaScript object?",
        options: ["JSON.stringify()", "JSON.parse()", "JSON.toObject()", "JSON.convert()"],
        correct: 1 // JSON.parse() correct hai
    },
    {
        question: "What will be the output of: console.log(typeof []);",
        options: ["'array'", "'object'", "'null'", "'undefined'"],
        correct: 1 // 'object' correct hai (JS me arrays objects hote hain)
    },
    {
        question: "Which operator is used to check if two values and their types are NOT equal?",
        options: ["!=", "!==", "==", "==="],
        correct: 1 // !== correct hai
    },
     {
        question: "What will be the output of: console.log(50 % 7);",
        options: ["7", "1", "0", "0.5"],
        correct: 1 // 1 correct hai (Remainder bachta hai)
    },
    {
        question: "Which function is used to schedule code execution after a specific delay (in milliseconds)?",
        options: ["setInterval()", "setTimeout()", "delay()", "wait()"],
        correct: 1 // setTimeout() correct hai
    },
    {
        question: "How do you find the number of elements in an array named 'users'?",
        options: ["users.count", "users.length", "users.size()", "users.length()"],
        correct: 1 // users.length correct hai
    },
    {
        question: "What will be the output of: console.log(Math.floor(4.7));",
        options: ["4", "5", "4.7", "0.7"],
        correct: 0 // 4 correct hai
    },
    {
        question: "Which of the following is NOT a primitive data type in JavaScript?",
        options: ["String", "Number", "Boolean", "Object"],
        correct: 3 // Object correct hai
    },
    {
        question: "What will be the output of: console.log(typeof null);",
        options: ["'null'", "'undefined'", "'object'", "'void'"],
        correct: 2 // 'object' correct hai (Yeh JS ka ek purana bug/feature hai)
    },
     {
        question: "Which array method creates a new array by filtering out elements that don't pass a condition?",
        options: ["map()", "filter()", "forEach()", "reduce()"],
        correct: 1 // filter() correct hai
    },
    {
        question: "What will be the output of: console.log(10 + 20 + '30');",
        options: ["60", "'102030'", "'3030'", "Error"],
        correct: 2 // '3030' correct hai (10+20=30, phir + '30' string ban gaya)
    }

];



var currentQuestionIndex = 0;
var score = 0;
var selectedAnswerIndex = null;


var quizScreen = document.getElementById("quiz-screen");
var resultScreen = document.getElementById("result-screen");
var questionText = document.getElementById("question-text");
var optionsList = document.getElementById("options-list");
var submitBtn = document.getElementById("submit-btn");
var scoreText = document.getElementById("score-text");
var retryBtn = document.getElementById("retry-btn");


function loadQuestion() {
    selectedAnswerIndex = null;
    submitBtn.disabled = true; 
    optionsList.innerHTML = ""; 

    var currentData = questionsData[currentQuestionIndex];
    questionText.innerText = `${currentQuestionIndex + 1}. ${currentData.question}`;

    
    currentData.options.forEach((option, index) => {
        var button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option-btn");
        
        // Option click karne par function chalega
        button.addEventListener("click", () => {
            selectOption(index, button);
        });
        
        optionsList.appendChild(button);
    });
}


function selectOption(index, clickedButton) {
    selectedAnswerIndex = index;
    submitBtn.disabled = false; 

    var allButtons = optionsList.querySelectorAll(".option-btn");
    allButtons.forEach(btn => btn.classList.remove("selected"));

    
    clickedButton.classList.add("selected");
}


submitBtn.addEventListener("click", () => {
    if (selectedAnswerIndex === null) return;

    
    if (selectedAnswerIndex === questionsData[currentQuestionIndex].correct) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questionsData.length) {
        loadQuestion();
    } else {
        showResult();
    }
});


function showResult() {
    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");
    scoreText.innerText = `You scored ${score} out of ${questionsData.length}!`;
}


retryBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    resultScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    loadQuestion();
});


loadQuestion();
