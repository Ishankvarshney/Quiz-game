const questions = [
  {
    question: "Which is largest continent?",
    answers: [
      {
        text: "africa",
        correct: false,
      },
      {
        text: "asia",
        correct: true,
      },
      {
        text: "germany",
        correct: false,
      },
      {
        text: "america",
        correct: false,
      },
    ],
  },
  {
    question: "Which is largest river?",
    answers: [
      {
        text: "nile",
        correct: false,
      },
      {
        text: "ganga",
        correct: false,
      },
      {
        text: "amazon",
        correct: true,
      },
      {
        text: "yamuna",
        correct: false,
      },
    ],
  },
  {
    question: "Which is longest river?",
    answers: [
      {
        text: "nile",
        correct: true,
      },
      {
        text: "ganga",
        correct: false,
      },
      {
        text: "amazon",
        correct: false,
      },
      {
        text: "yamuna",
        correct: false,
      },
    ],
  },
  {
    question: "Which is smallest continent?",
    answers: [
      {
        text: "africa",
        correct: false,
      },
      {
        text: "asia",
        correct: false,
      },
      {
        text: "australia",
        correct: true,
      },
      {
        text: "america",
        correct: false,
      },
    ],
  },
];

const questionBox = document.querySelector(".question");
const answerButton = document.querySelector(".answer-buttons");
const nextButton = document.querySelector(".next");
const quiz = document.querySelector(".quiz");
const card = document.querySelector(".card");
var currentQuestionIndex = 0;
var score = 0;

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    startQuestion();
  } else if (currentQuestionIndex == questions.length) {
    currentQuestionIndex += 1;
    showScore();
  } else {
    currentQuestionIndex = 0;
    startQuestion();
  }
});

function startQuiz() {
  let score = 0;
  nextButton.innerHTML = "Next";
  startQuestion();
}

function startQuestion() {
  resetQuiz();
  const que = questions[currentQuestionIndex];
  currentQuestionIndex = currentQuestionIndex + 1;
  questionBox.innerHTML = que.question;
  let i = 0;
  while (i < que.answers.length) {
    const currentoption = que.answers[i];
    const optionButton = document.createElement("button");
    optionButton.innerHTML = currentoption.text;
    optionButton.classList.add("btn");
    answerButton.appendChild(optionButton);
    if (currentoption.correct) {
      optionButton.dataset.correct = currentoption.correct;
    }
    optionButton.addEventListener("click", selectAnswer);
    i++;
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct) {
      button.classList.add("correct");
    } else {
      button.classList.add("incorrect");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function resetQuiz() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

function showScore() {
  resetQuiz();
  questionBox.innerHTML = `You have Scored ${score} out of ${questions.length}.`;
  nextButton.innerHTML = "Play again";
  nextButton.style.display = "block";
}

startQuiz();
