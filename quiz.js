function submitQuiz() {
    var score = 0;
    var totalQuestions = 5;
    var answers = {
        q1: "1", // Correct answer for question 1
        q2: "2", // Correct answer for question 2
        q3: ["1", "2"], // Correct answers for question 3
        q4: "Cascading Style Sheets", // Correct answer for fill-in-the-blank question
        q5: "1" // Correct answer for question 5
    };
    var form = document.forms["quizForm"];

    // Check answers for question 1
    if (form["q1"].value === answers.q1) {
        score++;
    }

    // Check answers for question 2
    if (form["q2"].value === answers.q2) {
        score++;
    }

    // Check answers for question 3
    var q3Answers = form["q3"];
    var q3Score = 0;
    for (var i = 0; i < q3Answers.length; i++) {
        if (q3Answers[i].checked && answers.q3.includes(q3Answers[i].value)) {
            q3Score++;
        }
    }
    if (q3Score === answers.q3.length) {
        score++;
    }

    // Check answer for question 4
    if (form["q4"].value.trim().toLowerCase() === answers.q4.toLowerCase()) {
        score++;
    }

    // Check answer for question 5
    if (form["q5"].value === answers.q5) {
        score++;
    }

    // Display the results
    var result = document.getElementById("result");
    result.innerHTML = "<h3>Your Score: " + score + " / " + totalQuestions + "</h3>";

    if (score === totalQuestions) {
        result.innerHTML += "<p>Congratulations! You passed the quiz!</p>";
    } else {
        result.innerHTML += "<p>Try again to improve your score.</p>";
    }
}

function resetQuiz() {
    document.getElementById("quizForm").reset();
    document.getElementById("result").innerHTML = "";
}
