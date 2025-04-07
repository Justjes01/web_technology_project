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
    var resultHTML = "";

    // Check answers for question 1
    if (form["q1"].value === answers.q1) {
        score++;
        resultHTML += "<p>Question 1: Correct</p>";
    } else {
        resultHTML += "<p>Question 1: Incorrect (Correct Answer: Hyper Text Markup Language)</p>";
    }

    // Check answers for question 2
    if (form["q2"].value === answers.q2) {
        score++;
        resultHTML += "<p>Question 2: Correct</p>";
    } else {
        resultHTML += "<p>Question 2: Incorrect (Correct Answer: Style and format the web page)</p>";
    }

    // Check answers for question 3 (Multiple correct answers)
    var q3Answers = form["q3"];
    var selectedQ3 = [];
    for (var i = 0; i < q3Answers.length; i++) {
        if (q3Answers[i].checked) {
            selectedQ3.push(q3Answers[i].value);
        }
    }

    if (selectedQ3.length === answers.q3.length && selectedQ3.every(val => answers.q3.includes(val))) {
        score++;
        resultHTML += "<p>Question 3: Correct</p>";
    } else {
        resultHTML += "<p>Question 3: Incorrect (Correct Answers: color, font-size)</p>";
    }

    // Check answer for question 4 (Fill in the blank)
    if (form["q4"].value.trim().toLowerCase() === answers.q4.toLowerCase()) {
        score++;
        resultHTML += "<p>Question 4: Correct</p>";
    } else {
        resultHTML += "<p>Question 4: Incorrect (Correct Answer: Cascading Style Sheets)</p>";
    }

    // Check answer for question 5
    if (form["q5"].value === answers.q5) {
        score++;
        resultHTML += "<p>Question 5: Correct</p>";
    } else {
        resultHTML += "<p>Question 5: Incorrect (Correct Answer: &lt;h1&gt;)</p>";
    }

    // Display the total score
    resultHTML += "<h3>Your Total Score: " + score + " / " + totalQuestions + "</h3>";

    // Pass/Fail message
    if (score >= 4) {
        resultHTML += "<p>Congratulations! You passed the quiz!</p>";
    } else {
        resultHTML += "<p>Try again to improve your score.</p>";
    }

    // Display the result
    var result = document.getElementById("result");
    result.innerHTML = resultHTML;
}

function resetQuiz() {
    document.getElementById("quizForm").reset();
    document.getElementById("result").innerHTML = "";
}
