const question1 = document.querySelector(".question1");
const question2 = document.querySelector(".question2");

question1.addEventListener("click", () => {
    question1.classList.add("active");
    question2.classList.remove("active");
});

question2.addEventListener("click", () => {
    question2.classList.add("active");
    question1.classList.remove("active");
});