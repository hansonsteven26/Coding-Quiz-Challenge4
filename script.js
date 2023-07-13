let startButtonEl = document.getElementById("start-button");
let titleEl = document.getElementById("title");
let timerTextEl = document.getElementById("timer");
let containerEl = document.getElementById("container");
let retryButton = document.createElement("button");

let questionOneButtonOne = document.createElement("button");
let questionOneButtonTwo = document.createElement("button");
let questionOneButtonThree = document.createElement("button");
let questionOneButtonFour = document.createElement("button");

let questionTwoButtonOne = document.createElement("button");
let questionTwoButtonTwo = document.createElement("button");
let questionTwoButtonThree = document.createElement("button");
let questionTwoButtonFour = document.createElement("button");

let questionThreeButtonOne = document.createElement("button");
let questionThreeButtonTwo = document.createElement("button");

let questionFourButtonOne = document.createElement("button");
let questionFourButtonTwo = document.createElement("button");

let quiz = {
    questionOne: {
        question: "How many equal signs do you use when you are assigning?",
        answerOne: "None",
        answerTwo: "One",
        answerThree: "Two",
        answerFour: "You don't use an equal sign"
    },

    questionTwo: {
        question: "How many values can a boolean type variable have?",
        answerOne: "Three",
        answerTwo: "Two",
        answerThree: "One",
        answerFour: "None"
    },

    questionThree: {
        question: "True or False: The first index in an array is 1",
        answerOne: "True",
        answerTwo: "False"
    },

    questionFour: {
        question: "True or False: jQuery is an API",
        answerOne: "True",
        answerTwo: "False"
    }    
}

let secondsLeft = 0;
let timerInterval = 0;

startButtonEl.addEventListener("click", function() {
    setTime();
    startButtonEl.setAttribute("style", "display: none");
    titleEl.setAttribute("style", "width: 50%");
    displayQuestionOne();
})

function setTime() {
    secondsLeft = 60;
    timerInterval = setInterval(function() {
        secondsLeft--;
        timerTextEl.textContent = "Timer: " + secondsLeft;

        if (secondsLeft <= 0) {
            gameOver();
            clearInterval(timerInterval);
        }
    }, 1000)
}

function gameOver() {
    questionOneButtonOne.setAttribute("style", "display: none");
    questionOneButtonTwo.setAttribute("style", "display: none");
    questionOneButtonThree.setAttribute("style", "display: none");
    questionOneButtonFour.setAttribute("style", "display: none");

    questionTwoButtonOne.setAttribute("style", "display: none");
    questionTwoButtonTwo.setAttribute("style", "display: none");
    questionTwoButtonThree.setAttribute("style", "display: none");
    questionTwoButtonFour.setAttribute("style", "display: none");

    questionThreeButtonOne.setAttribute("style", "display: none");
    questionThreeButtonTwo.setAttribute("style", "display: none");

    questionFourButtonOne.setAttribute("style", "display: none");
    questionFourButtonTwo.setAttribute("style", "display: none");

    titleEl.textContent = "Game over, man!";
    containerEl.appendChild(retryButton);
    retryButton.textContent = "Retry";
    retryButton.setAttribute("style", "height: 5%; width: 5%; font-size: 16px; justify-content: center; align-items: center; background-color: darkblue; color: white");
}

retryButton.addEventListener("click", function () {
    setTime();
    retryButton.setAttribute("style", "display: none");
    titleEl.setAttribute("style", "width: 50%");
    displayQuestionOne();
})

// Display the first question
function displayQuestionOne() {
    titleEl.textContent = quiz.questionOne.question;
    
    // Change the text of all the buttons to the multiple choice answers
    questionOneButtonOne.textContent = quiz.questionOne.answerOne;
    questionOneButtonTwo.textContent = quiz.questionOne.answerTwo;
    questionOneButtonThree.textContent = quiz.questionOne.answerThree;
    questionOneButtonFour.textContent = quiz.questionOne.answerFour;

    // Actually make the buttons shown
    containerEl.appendChild(questionOneButtonOne);
    containerEl.appendChild(questionOneButtonTwo);
    containerEl.appendChild(questionOneButtonThree);
    containerEl.appendChild(questionOneButtonFour);

    // Format the buttons
    questionOneButtonOne.setAttribute("style", "height: 5%; width: 15%; font-size: 16px; justify-content: center; align-items: center; margin-top: 10px; margin-bottom: 5px; background-color: darkblue; color: white");
    questionOneButtonTwo.setAttribute("style", "height: 5%; width: 15%; font-size: 16px; justify-content: center; align-items: center; margin: 5px 0; background-color: darkblue; color: white");
    questionOneButtonThree.setAttribute("style", "height: 5%; width: 15%; font-size: 16px; justify-content: center; align-items: center; margin: 5px 0; background-color: darkblue; color: white");
    questionOneButtonFour.setAttribute("style", "height: 5%; width: 15%; font-size: 16px; justify-content: center; align-items: center; margin: 5px 0; background-color: darkblue; color: white");

    // Go to the next question when an answer is clicked
    // Also give feedback, saying "correct" or "incorrect"
    questionOneButtonOne.onclick = function() {
        secondsLeft -= 10;
        displayQuestionTwo();
        answerIncorrectly();
        questionOneButtonOne.setAttribute("style", "display: none")
        questionOneButtonTwo.setAttribute("style", "display: none")
        questionOneButtonThree.setAttribute("style", "display: none")
        questionOneButtonFour.setAttribute("style", "display: none")
    }
    questionOneButtonTwo.onclick = function() {
        displayQuestionTwo();
        answerCorrectly();
        questionOneButtonOne.setAttribute("style", "display: none")
        questionOneButtonTwo.setAttribute("style", "display: none")
        questionOneButtonThree.setAttribute("style", "display: none")
        questionOneButtonFour.setAttribute("style", "display: none")
    }
    questionOneButtonThree.onclick = function() {
        secondsLeft -= 10;
        displayQuestionTwo();
        answerIncorrectly();
        questionOneButtonOne.setAttribute("style", "display: none")
        questionOneButtonTwo.setAttribute("style", "display: none")
        questionOneButtonThree.setAttribute("style", "display: none")
        questionOneButtonFour.setAttribute("style", "display: none")
    }
    questionOneButtonFour.onclick = function() {
        secondsLeft -= 10;
        displayQuestionTwo();
        answerIncorrectly();
        questionOneButtonOne.setAttribute("style", "display: none")
        questionOneButtonTwo.setAttribute("style", "display: none")
        questionOneButtonThree.setAttribute("style", "display: none")
        questionOneButtonFour.setAttribute("style", "display: none")
    }
}

// Display the second question
function displayQuestionTwo() {
    titleEl.textContent = quiz.questionTwo.question;

    // Change the text of all the buttons to the multiple choice answers
    questionTwoButtonOne.textContent = quiz.questionTwo.answerOne;
    questionTwoButtonTwo.textContent = quiz.questionTwo.answerTwo;
    questionTwoButtonThree.textContent = quiz.questionTwo.answerThree;
    questionTwoButtonFour.textContent = quiz.questionTwo.answerFour;

    // Actually make the buttons shown
    containerEl.appendChild(questionTwoButtonOne);
    containerEl.appendChild(questionTwoButtonTwo);
    containerEl.appendChild(questionTwoButtonThree);
    containerEl.appendChild(questionTwoButtonFour);

    // Format the buttons
    questionTwoButtonOne.setAttribute("style", "height: 5%; width: 15%; font-size: 16px; justify-content: center; align-items: center; margin-top: 10px; margin-bottom: 5px; background-color: darkblue; color: white");
    questionTwoButtonTwo.setAttribute("style", "height: 5%; width: 15%; font-size: 16px; justify-content: center; align-items: center; margin: 5px 0; background-color: darkblue; color: white");
    questionTwoButtonThree.setAttribute("style", "height: 5%; width: 15%; font-size: 16px; justify-content: center; align-items: center; margin: 5px 0; background-color: darkblue; color: white");
    questionTwoButtonFour.setAttribute("style", "height: 5%; width: 15%; font-size: 16px; justify-content: center; align-items: center; margin: 5px 0; background-color: darkblue; color: white");

    // Go to the next question when an answer is clicked
    // Also give feedback, saying "correct" or "incorrect"
    questionTwoButtonOne.onclick = function() {
        secondsLeft -= 10;
        displayQuestionThree();
        answerIncorrectly();
        questionTwoButtonOne.setAttribute("style", "display: none")
        questionTwoButtonTwo.setAttribute("style", "display: none")
        questionTwoButtonThree.setAttribute("style", "display: none")
        questionTwoButtonFour.setAttribute("style", "display: none")
    }
    questionTwoButtonTwo.onclick = function() {
        displayQuestionThree();
        answerCorrectly();
        questionTwoButtonOne.setAttribute("style", "display: none")
        questionTwoButtonTwo.setAttribute("style", "display: none")
        questionTwoButtonThree.setAttribute("style", "display: none")
        questionTwoButtonFour.setAttribute("style", "display: none")
    }
    questionTwoButtonThree.onclick = function() {
        secondsLeft -= 10;
        displayQuestionThree();
        answerIncorrectly();
        questionTwoButtonOne.setAttribute("style", "display: none")
        questionTwoButtonTwo.setAttribute("style", "display: none")
        questionTwoButtonThree.setAttribute("style", "display: none")
        questionTwoButtonFour.setAttribute("style", "display: none")
    }
    questionTwoButtonFour.onclick = function() {
        secondsLeft -= 10;
        displayQuestionThree();
        answerIncorrectly();
        questionTwoButtonOne.setAttribute("style", "display: none")
        questionTwoButtonTwo.setAttribute("style", "display: none")
        questionTwoButtonThree.setAttribute("style", "display: none")
        questionTwoButtonFour.setAttribute("style", "display: none")
    }
}

// Display the third question
function displayQuestionThree() {
    titleEl.textContent = quiz.questionThree.question;

    // Change the text of all the buttons to the multiple choice answers
    questionThreeButtonOne.textContent = quiz.questionThree.answerOne;
    questionThreeButtonTwo.textContent = quiz.questionThree.answerTwo;

    // Actually make the buttons shown
    containerEl.appendChild(questionThreeButtonOne);
    containerEl.appendChild(questionThreeButtonTwo);

    // Format the buttons
    questionThreeButtonOne.setAttribute("style", "height: 5%; width: 15%; font-size: 16px; justify-content: center; align-items: center; margin-top: 10px; margin-bottom: 5px; background-color: darkblue; color: white");
    questionThreeButtonTwo.setAttribute("style", "height: 5%; width: 15%; font-size: 16px; justify-content: center; align-items: center; margin: 5px 0; background-color: darkblue; color: white");

    // Go to the next question when an answer is clicked
    // Also give feedback, saying "correct" or "incorrect"
    questionThreeButtonOne.onclick = function() {
        secondsLeft -= 10;
        displayQuestionFour();
        answerIncorrectly();
        questionThreeButtonOne.setAttribute("style", "display: none")
        questionThreeButtonTwo.setAttribute("style", "display: none")
    }
    questionThreeButtonTwo.onclick = function() {
        displayQuestionFour();
        answerCorrectly();
        questionThreeButtonOne.setAttribute("style", "display: none")
        questionThreeButtonTwo.setAttribute("style", "display: none")
    }
}

// Display the fourth question
function displayQuestionFour() {
    titleEl.textContent = quiz.questionFour.question;

    // Change the text of all the buttons to the multiple choice answers
    questionFourButtonOne.textContent = quiz.questionFour.answerOne;
    questionFourButtonTwo.textContent = quiz.questionFour.answerTwo;

    // Actually make the buttons shown
    containerEl.appendChild(questionFourButtonOne);
    containerEl.appendChild(questionFourButtonTwo);

    // Format the buttons
    questionFourButtonOne.setAttribute("style", "height: 5%; width: 15%; font-size: 16px; justify-content: center; align-items: center; margin-top: 10px; margin-bottom: 5px; background-color: darkblue; color: white");
    questionFourButtonTwo.setAttribute("style", "height: 5%; width: 15%; font-size: 16px; justify-content: center; align-items: center; margin: 5px 0; background-color: darkblue; color: white");

    // Go to the end of the game
    // Give feedback, saying "correct" or "incorrect"
    questionFourButtonOne.onclick = function() {
        displayEndCard();
        answerCorrectly();
    }
    questionFourButtonTwo.onclick = function() {
        // displayQuestionFour();
        answerIncorrectly();
        secondsLeft -= 10;
    }
}

function displayEndCard() {
    clearInterval(timerInterval);
    questionFourButtonOne.setAttribute("style", "display: none");
    questionFourButtonTwo.setAttribute("style", "display: none");
    titleEl.textContent = "You did it! You earned " + secondsLeft;
}

function answerCorrectly() {
    // Make a green-colored feedback message saying "Correct!"
    let feedbackMessage = document.createElement("p");
    containerEl.appendChild(feedbackMessage);
    feedbackMessage.textContent = "Correct!";
    feedbackMessage.setAttribute("style", "color: green; font-size: 16px");

    // Remove the message after 1 second
    setTimeout(function() {
        feedbackMessage.setAttribute("style", "display: none");
    }, 1000)
}

function answerIncorrectly() {
    // Make a red-colored feedback message saying "Incorrect!"
    let feedbackMessage = document.createElement("p");
    containerEl.appendChild(feedbackMessage);
    feedbackMessage.textContent = "Incorrect!";
    feedbackMessage.setAttribute("style", "color: red; font-size: 16px");

    // Remove the message after 1 second
    setTimeout(function() {
        feedbackMessage.setAttribute("style", "display: none");
    }, 1000)
}