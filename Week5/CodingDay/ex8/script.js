// question object constructor =================================
function Question(question, rightAnswer, wrongAnswer1, wrongAnswer2) {
    this.question = question;
    this.rightAnswer = rightAnswer;
    this.wrongAnswer1 = wrongAnswer1;
    this.wrongAnswer2 = wrongAnswer2;
};


// question objects =================================
var quiz = [];
quiz[0] = new Question("Is javaScript is case sensitive?", "Yes", "No", "No Idea");
quiz[1] = new Question("Are Java and JavaScript same?", "No", "Maybe", "Yes");
quiz[2] = new Question("Which tag is used for header", "h1", "p", "ul");




// shuffle for answers =================================
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array;
}


// provide question =================================
var randomQuestion;
var answers = [];

function btnProvideQuestion() {

    var randomNumber = Math.floor(Math.random() * quiz.length);
    console.log("random number" + randomNumber);
    randomQuestion = quiz[randomNumber]; //getQuestion

    answers = [randomQuestion.rightAnswer, randomQuestion.wrongAnswer1, randomQuestion.wrongAnswer2];

    shuffle(answers);

    document.getElementById("question").innerHTML = randomQuestion.question;

    document.getElementById("answerA").value = answers[0];
    document.getElementById("answerA").innerHTML = answers[0];

    document.getElementById("answerB").value = answers[1];
    document.getElementById("answerB").innerHTML = answers[1];

    document.getElementById("answerC").value = answers[2];
    document.getElementById("answerC").innerHTML = answers[2];

}

//  Start to quiz =========================
let start = document.getElementById("start");
start.addEventListener("click", btnProvideQuestion);


// select answer =================================
function answerA_clicked() {
    var answerA = document.getElementById("answerA").value;
    checkAnswer(answerA);
}

function answerB_clicked() {
    var answerB = document.getElementById("answerB").value;
    checkAnswer(answerB);
}

function answerC_clicked() {
    var answerC = document.getElementById("answerC").value;
    checkAnswer(answerC);
}


// check answer =================================
function checkAnswer(answer) {
    if (answer == randomQuestion.rightAnswer) {
        adjustScore(true);
        btnProvideQuestion();
    } else {
        alert("Loser!");
        adjustScore(false);
    }
}




// calculate score =================================
var currentScore = 0;

function adjustScore(isCorrect) {
    debugger;
    if (isCorrect) {
        currentScore++;
    } else {
        if (currentScore > 0) {
            currentScore--;
        }
    }
    document.getElementById("score").innerHTML = currentScore;
}