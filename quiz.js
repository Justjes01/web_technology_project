function submitQuiz() {
    const form = document.forms["quizForm"];
    let score = 0;
    const total = 5;
  
    const correctAnswers = {
      q1: "1", // HTML
      q2: "2", // CSS
      q3: "3", // <p>
      q4: "cascading style sheets",
      q5: ["1", "2", "4"] // Valid CSS properties
    };
  
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "<h3>Quiz Results:</h3>";
  
    // Question 1
    let userQ1 = form["q1"].value;
    if (userQ1 === correctAnswers.q1) score++;
    resultDiv.innerHTML += `<p>1. Your answer: ${getOptionText("q1", userQ1)}<br>Correct: ${getOptionText("q1", correctAnswers.q1)}</p>`;
  
    // Question 2
    let userQ2 = form["q2"].value;
    if (userQ2 === correctAnswers.q2) score++;
    resultDiv.innerHTML += `<p>2. Your answer: ${getOptionText("q2", userQ2)}<br>Correct: ${getOptionText("q2", correctAnswers.q2)}</p>`;
  
    // Question 3
    let userQ3 = form["q3"].value;
    if (userQ3 === correctAnswers.q3) score++;
    resultDiv.innerHTML += `<p>3. Your answer: ${getOptionText("q3", userQ3)}<br>Correct: ${getOptionText("q3", correctAnswers.q3)}</p>`;
  
    // Question 4
    let userQ4 = form["q4"].value.trim().toLowerCase();
    if (userQ4 === correctAnswers.q4) score++;
    resultDiv.innerHTML += `<p>4. Your answer: ${userQ4}<br>Correct: ${correctAnswers.q4}</p>`;
  
    // Question 5
    let userQ5 = [];
    const checkboxes = document.querySelectorAll("input[name='q5']:checked");
    checkboxes.forEach((box) => userQ5.push(box.value));
  
    const isQ5Correct = userQ5.length === correctAnswers.q5.length &&
                        userQ5.every(val => correctAnswers.q5.includes(val));
    if (isQ5Correct) score++;
  
    resultDiv.innerHTML += `<p>5. Your answers: ${userQ5.join(", ")}<br>Correct: ${correctAnswers.q5.join(", ")}</p>`;
  
    resultDiv.innerHTML += `<h3>Your Score: ${score} / ${total}</h3>`;
    resultDiv.innerHTML += `<p>${score >= 3 ? "✅ You passed!" : "❌ You did not pass. Try again!"}</p>`;
  }
  
  function resetQuiz() {
    document.getElementById("quizForm").reset();
    document.getElementById("result").innerHTML = "";
  }
  
  function getOptionText(name, value) {
    const options = document.querySelectorAll(`input[name='${name}']`);
    for (let option of options) {
      if (option.value === value) {
        return option.parentElement.textContent.trim();
      }
    }
    return "(No answer)";
  }
  