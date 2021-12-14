var questionID = 0;
var rightAnswer = 0;
var wrongAnswer = 0;

window.onload = function() {
    document.getElementById("game").style.display = "none";
    document.getElementById("end").style.display = "none";
};

function hideStart() {
    document.getElementById("start").style.display = "none";
    document.getElementById("game").style.display = "block";
    viewQuestion();
}

function viewQuestion() {
    document.getElementById("game:frage").innerText = questions[questionID].question;
    document.getElementById("game:1").innerText = questions[questionID].answers.one
    document.getElementById("game:2").innerText = questions[questionID].answers.two
    document.getElementById("game:3").innerText = questions[questionID].answers.three
    document.getElementById("game:4").innerText = questions[questionID].answers.four
}

function setResult() {
    document.getElementById("end:result:right").innerText = rightAnswer + " Richtige";
    document.getElementById("end:result:wrong").innerText = wrongAnswer + " Falsche";
}

function checkAnswer(answer) {
    if (answer == questions[questionID].correct) {
        rightAnswer++;
        Swal.fire(
            'Richtig!',
            questions[questionID].info,
            'success'
        )
    } else {
        wrongAnswer++;
        Swal.fire(
            'Leider Falsch!',
            questions[questionID].info,
            'error'
        )
    }
    questionID++;
    if (questionID < questions.length) {
        viewQuestion();
    } else {
        document.getElementById("game").style.display = "none";
        document.getElementById("end").style.display = "block";
        setResult();
    }
}


