// Quiz Questions
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

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const resultElement = document.getElementById("result");

// Load Question
function loadQuestion() {
  questionElement.textContent = questions[currentQuestion].question;
  optionsElement.innerHTML = "";

  questions[currentQuestion].options.forEach((option, index) => {
    const div = document.createElement("div");
    div.textContent = option;
    div.classList.add("option");
    div.onclick = () => checkAnswer(index);
    optionsElement.appendChild(div);
  });
}

// Check Answer
function checkAnswer(selected) {
  if (selected === questions[currentQuestion].answer) {
    score++;
  }

  nextBtn.classList.remove("hidden");
}

// Next Question
nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
    nextBtn.classList.add("hidden");
  } else {
    showResult();
  }
});

// Show Result
function showResult() {
  document.getElementById("quiz").classList.add("hidden");
  resultElement.classList.remove("hidden");
  restartBtn.classList.remove("hidden");

  const percentage = ((score / questions.length) * 100).toFixed(2);
  resultElement.textContent = You scored ${score} out of ${questions.length} (${percentage}%);
}

// Restart Quiz
restartBtn.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  document.getElementById("quiz").classList.remove("hidden");
  resultElement.classList.add("hidden");
  restartBtn.classList.add("hidden");
  nextBtn.classList.add("hidden");
  loadQuestion();
});

// Start quiz
loadQuestion();
nextBtn.classList.add("hidden");