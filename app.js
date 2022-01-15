const quizData = [
  {
    question: "What is Harith's Favourite Colour?",
    a: "Green",
    b: "Blue",
    c: "BLack",
    d: "Purple",
    correct: "b",
  },
  {
    question: "Which Premier League Team Does Harith Support?",
    a: "Chelsea",
    b: "Manchester United",
    c: "Liverpool",
    d: "Manchester City",
    correct: "a",
  },
  {
    question: "Which season does Harith Like the Most?",
    a: "Spring",
    b: "Summer",
    c: "Fall",
    d: "Winter",
    correct: "d",
  },
  {
    question: "What was Harith's nickname as a child?",
    a: "Clone",
    b: "Sprint",
    c: "Jedi",
    d: "Dash",
    correct: "a",
  },

  {
    question: "How tall is Harith?",
    a: "4ft",
    b: "5ft",
    c: "6ft",
    d: "7ft",
    correct: "c",
  },

  {
    question: "Which pets does Harith Have?",
    a: "Dog",
    b: "Cat",
    c: "Bird",
    d: "None of the above",
    correct: "d",
  },

  {
    question: "Which Football Team does Harith Hate?",
    a: "PSG",
    b: "Bayern Munich",
    c: "Juventus",
    d: "Manchester United",
    correct: "c",
  },
];
const quiz = document.getElementById("quiz");

const answerEls = document.querySelectorAll(".answer");

const questionEl = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerHTML = currentQuizData.question;

  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answerEl.checked = false;
    }
  });
}
submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You've answered ${score}/${quizData.length} questions correctly.</h2>`;
    }
  }
});
