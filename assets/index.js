let question = document.querySelector(".question");
let option1 = document.querySelector(".option1");
let option2 = document.querySelector(".option2");
let progress = document.querySelector(".progress");

let answer1 = document.querySelector(".answer1");
let answer2 = document.querySelector(".answer2");

document
  .querySelectorAll(".answer")
  .forEach((element) => element.addEventListener("click", buildQuiz));

const questions = {
  first: {
    question: "Have You Ever Made Money Online Before?",
    answer1: "Yes, but not for a long time or was little",
    answer2: "Never",
  },

  second: {
    question: "What is your relationship with your work?",
    answer1: "I HATE MY BOSS!",
    answer2: "I like my job",
    answer3: "I don't have a job",
  },

  third: {
    question:
      "Do You Want to Know How A 41 Year Old Dad Made His First $269/Day Online Profits Just By Following A Few Steps Of A Millionaire?",
    answer1: "Yes, of course!",
    answer2: "Yes, show me!",
  },

  final: {
    loading: "Checking if you are eligible for this content",
  },
};

let point = "first";

function buildQuiz() {
  switch (point) {
    case "first":
      progress.style.width = "10%";
      question.innerHTML = questions.first.question;

      option1.innerHTML = questions.first.answer1;
      option2.innerHTML = questions.first.answer2;
      point = "second";
      break;

    case "second":
      progress.style.width = "50%";
      question.innerHTML = questions.second.question;

      option1.innerHTML = questions.second.answer1;
      option2.innerHTML = questions.second.answer2;
      let answer3 = document.createElement("div");
      answer3.className = "answer answer3";
      document.querySelector(".answers").appendChild(answer3);
      document.querySelector(".answer3").addEventListener("click", buildQuiz);

      let circle = document.createElement("span");
      circle.className = "circle circle1";
      let answerText = document.createElement("span");
      answerText.className = "answer-option";
      answerText.innerHTML = questions.second.answer3;
      document.querySelector(".answer3").appendChild(circle);
      document.querySelector(".answer3").appendChild(answerText);

      point = "third";
      break;

    case "third":
      progress.style.width = "100%";
      document.querySelector(".answer3").remove();
      question.innerHTML = questions.third.question;

      option1.innerHTML = questions.third.answer1;
      option2.innerHTML = questions.third.answer2;
      point = "final";
      break;

    case "final":
      progress.style.width = "0";
      progress.classList.add("loading");
      document.querySelector(".answers").remove();
      question.innerHTML = questions.final.loading;

      let warning = document.createElement("p");
      warning.innerHTML =
        '"Hang Tight. Do Not Leave The Page or Preload The Page..."';
      warning.style.textAlign = "center";
      document.querySelector(".quiz").appendChild(warning);

      setTimeout(() => {
        let link = "https://437e3gzhcz1u0u0bn8nf4x3s39.hop.clickbank.net/";
        window.location.replace(link);
      }, 2500);

      break;
  }
}
buildQuiz();
