const questions = [
  {
    question: "What is the capital of Pakistan?",
    options: ["Karachi", "Islamabad", "Lahore", "Quetta"],
    answer: 1
  },
  {
    question: "Who is the founder of Pakistan?",
    options: ["Allama Iqbal", "Quaid-e-Azam", "Liaquat Ali Khan", "Sir Syed Ahmed Khan"],
    answer: 1
  },
  {
    question: "When did Pakistan get independence?",
    options: ["1940", "1945", "1947", "1950"],
    answer: 2
  }
];

let currentQuestion = 0;
let score = 0;
let selectedOption = null;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
const quizBox = document.getElementById("quiz-box");
const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restart-btn");

// Load a question
function loadQuestion() {
  questionEl.textContent = questions[currentQuestion].question;
  optionsEl.innerHTML = "";
  selectedOption = null;

  for (let i = 0; i < questions[currentQuestion].options.length; i++) {
    const div = document.createElement("div");
    div.textContent = questions[currentQuestion].options[i];
    div.classList.add("option");
    div.onclick = function () {
      selectOption(div, i);
    };
    optionsEl.appendChild(div);
  }
}

// Select an option
function selectOption(element, index) {
  const options = document.querySelectorAll(".option");
  for (let i = 0; i < options.length; i++) {
    options[i].classList.remove("selected");
  }
  element.classList.add("selected");
  selectedOption = index;
}

// Next button click
nextBtn.addEventListener("click", function () {
  console.log("Next button clicked ✅"); // test line

  if (selectedOption === null) {
    alert("Please select an option before continuing!");
    return;
  }

  if (selectedOption === questions[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

// Show result
function showResult() {
  quizBox.classList.add("hidden");
  resultBox.classList.remove("hidden");

  const percentage = Math.round((score / questions.length) * 100);
  scoreEl.textContent = You scored ${score} out of ${questions.length} (${percentage}%);
}

// Restart quiz
restartBtn.addEventListener("click", function () {
  currentQuestion = 0;
  score = 0;
  quizBox.classList.remove("hidden");
  resultBox.classList.add("hidden");
  loadQuestion();
});

// Start quiz
loadQuestion();