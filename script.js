/* Monica Quiz javascript */

const counter = document.getElementById("count");

// Make an array for all element with the class question
const answerCheck = document.querySelectorAll(".question");

// Make a counter for the correct answers
let correctAnswer = 0;

// I use forEach to loop through the array and match all elements with the class true and sum 1 to correctAnswer everytime a correct answer is clicked
answerCheck.forEach((checkbox) => {
    checkbox.addEventListener("click", () => {
        if (checkbox.classList.contains("true")) {
            correctAnswer++;
            counter.textContent = correctAnswer;
            console.log("I am checked with a loop");
            console.log(correctAnswer);
        }
    });
});

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


document.addEventListener('DOMContentLoaded', (event) => {
    const images = document.querySelectorAll('.display-img');
    const button = document.querySelector(".button")

    images.forEach(image => {
        image.addEventListener('click', () => {
            if (image.classList.contains('expanded')) {
                image.classList.remove('expanded');
                button.classList.remove("enabled");
            } else {
                images.forEach(img => img.classList.remove('expanded'));
                image.classList.add('expanded');
                button.classList.add("enabled");
            }
        });
    });
});