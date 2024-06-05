/* Monica Quiz javascript */

const counter = document.getElementById("count");

// Make an array for all element with the class question
const answerCheck = document.querySelectorAll(".question");
const submitContainer = document.querySelector(".submit-container");
const buttonSubmit = document.querySelector("btn-submit");
let allFinal = document.querySelector(".all-final");

// Make a counter for the correct answers

// I use forEach to loop through the array and match all elements with the class true and sum 1 to correctAnswer everytime a correct answer is clicked
let correctAnswer = 0;
answerCheck.forEach((checkbox) => {
  checkbox.addEventListener("click", () => {
    if (checkbox.classList.contains("true")) {
      correctAnswer++;
      counter.textContent = correctAnswer;
      console.log("I am checked with a loop");
    }
    if (correctAnswer >= 3) {
      allFinal.setAttribute("href", "./finalOk.html");
    } else if (correctAnswer < 3) {
      allFinal.setAttribute("href", "./finalNok.html");
    } else if (correctAnswer === 0) {
      allFinal.setAttribute("href", "./index.html");
    }
  });

  console.log(correctAnswer);
});

// Disable input checkbox when checked

function blockCheck(el) {
  const checkbox = document.querySelectorAll(".question1");
  checkbox.forEach((box) => (box.disabled = "disabled"));
}

function blockCheck2(el) {
  const checkbox = document.querySelectorAll(".question2");
  checkbox.forEach((box) => (box.disabled = "disabled"));
}

function blockCheck3(el) {
  const checkbox = document.querySelectorAll(".question3");
  checkbox.forEach((box) => (box.disabled = "disabled"));
}

function blockCheck4(el) {
  const checkbox = document.querySelectorAll(".question4");
  checkbox.forEach((box) => (box.disabled = "disabled"));
}

function blockCheck5(el) {
  const checkbox = document.querySelectorAll(".question5");
  checkbox.forEach((box) => (box.disabled = "disabled"));
}

// Partie Antoine

document.addEventListener("DOMContentLoaded", (event) => {
  const images = document.querySelectorAll(".display-img");
  const button = document.querySelector(".button");

  const princessePage2 = document.querySelector(".image-princesse-bouge")
  const princesse = document.createElement("img");



  images.forEach((image) => {

    image.addEventListener("click", () => {

      if (image.classList.contains("expanded")) {
        image.classList.remove("expanded");
        button.classList.remove("enabled");

      } else {
        images.forEach((img) => img.classList.remove("expanded"));
        image.classList.add("expanded");
        button.classList.add("enabled");
        localStorage.setItem("princesse", image.src);


      }


    });
  });

  princesse.src = localStorage.getItem("princesse");
  princesse.className = "princesse-img";
  princessePage2.appendChild(princesse);

});

const like = document.querySelector(".like");

let countLike = 0;
like.addEventListener("click", () => {
  if (countLike === 0) {
    like.classList.toggle("anim-like");
    countLike = 1;
    like.style.backgroundPosition = "right";
  } else {
    countLike = 0;
    like.style.backgroundPosition = "left";
  }
});
