

// Variables
const quizContainer = document.querySelector('.quiz');
const resultsContainer = document.querySelector('.results');
const submitButton = document.querySelector('.submit');

// 1. Use object literals for individual questions and an array to make it easy to loop over:
const myQuestions = [
    {
        question: "Which two sports did Indigenous people inspire?", 
        answers: {
            a: "Hockey and soccer",
            b: "Basketball and lacrosse",
            c: "Hockey and lacrosse",
            d: "Basketball and baseball"
        },
        correctAnswer: "a"
    },
    {
        question: "What is a 'toque'?",
        answers: {
            a: "A hat",
            b: "A scarf",
            c: "A baseball cap",
            d: "A shirt"
        },
        correctAnswer: "a"
    },
    {
        question: "Which Canadian celebrity has the highest net worth?",
        answers: {
            a: "Justin Bieber",
            b: "Drake",
            c: "Jim Carrey",
            d: "Celine Dion"    
        },
        correctAnswer: "d"
    },
    {
        question: "Aside from English and French, what is the most spoken language in Canada?",
        answers: {
            a: "Mandarin",
            b: "Punjabi",
            c: "Cantonese",
            d: "Spanish"    
        },
        correctAnswer: "a"
    },
    {
        question: "Who was Canada's first female prime minister?",              
        answers: {
            a: "Angela Merkel",
            b: "Suzanne Rice",
            c: "Joanna Cunningham",    
            d: "Kim Campbell"
        },
        correctAnswer: "d" 
    },
    {
        question: "Canada was the ___ country to legalise same-sez marriage."        ,
        answers: {
            a: "1st",
            b: "4th",
            c: "7th",
            d: "8th"    
        },
        correctAnswer: "b"
    },
    {
        question: "What percentage of Canada's population identifies as 'people of colour'?",
        answers: {
            a: "15",
            b: "18",
            c: "20",
            d: "22"    
        },
        correctAnswer: "d"
    },
    {
        question: "Canada only has one official bilingual province. Which is it?",
        answers: {
            a: "Quebec",
            b: "Ontario",
            c: "New Brunswick",
            d: "P.E.I"
        },
        correctAnswer: "c"
    },
    {
        question: "What flavour of potato chips can only be found in Canada?",
        answers: {
            a: "Maple Bacon",
            b: "Ketcup",
            c: "Dill Pickle",
            d: "Barbeque"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the most purchased grocery store item in Canada?",
        answers: {
            a: "McCain's French Fries",
            b: "Kraft Dinner",
            c: "Maple Syrup",
            d: "Bagged Milk"
        },
        correctAnswer: "b"
    }
];


// Functions

function startQuiz(){
    // create output variable to store the HTML output (all Q&A)
    const output = [];

    // for each question... Use current value (currentQuestion) and index (questionNumber) as parameters:
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {

        // variable to store list of possible answer choices
        const answers = [];

        // and for each available choice ...
        for(letter in currentQuestion.answers){

            // add an HTML radio button WITH label so user can click anywhere on the text, not JUST radio button
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter}:
                    ${currentQuestion.answers[letter]}
                </label>`
            );
        }

        // add this question and its answers to the output

        output.push(
            `<div class="question">${currentQuestion.question}</div>
             <div class="answers">${answers.join('')}</div>`
        );
      }
    );

// Combine output list into one string of HTML and put it on the page 

quizContainer.innerHTML = output.join('');

    }


function showResults(){
    const answerContainers = quizContainer.querySelectorAll('.answers'); 
    let numCorrect = 0;
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {

        // find selected answer in HTML
        const answerContainer = answerContainers[questionNumber];  // 1. First, look in the right answer container for the current question
        const selector = `input[name=question${questionNumber}]:checked`; // 2. Define a CSS selector `:checked` to find which radio button is checked
        const userAnswer = (answerContainer.querySelector(selector) || {}).value; // 3. Use querySelecto to search for the just defined CSS selector to find the checked button. Get the value of that answer using .value

        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
            numCorrect++;
        }
        else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });

// Show number of correct answers

resultsContainer.innerHTML = `You got ${numCorrect} out of ${myQuestions.length}`;


// Display quiz right away

startQuiz();


// On submit, show results
submitButton.addEventListener('click', showResults) }

;
