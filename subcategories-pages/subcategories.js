//  display btn js
let btn1 = document.querySelectorAll(".display-btn-name")[0];
let btn2 = document.querySelectorAll(".display-btn-name")[1];
let btn3 = document.querySelectorAll(".display-btn-name")[2];
let btn4 = document.querySelectorAll(".display-btn-name")[3];
let btn5 = document.querySelectorAll(".display-btn-name")[4];
let card1 = document.querySelector(".albumcards");
let card3 = document.querySelector(".artistcards");
let card4 = document.querySelector(".eventcards");
let card5 = document.querySelector(".instrumentscards");
let card2 = document.querySelector(".track-cards");
btn1.addEventListener("click", () => {
    card1.style.display = "flex";
    card2.style.display = "none";
    card3.style.display = "none";
    card4.style.display = "none";
    card5.style.display = "none";
})
btn2.addEventListener("click", () => {
    card1.style.display = "none";
    card2.style.display = "flex";
    card3.style.display = "none";
    card4.style.display = "none";
    card5.style.display = "none";
})
btn3.addEventListener("click", () => {
    card1.style.display = "none";
    card2.style.display = "none";
    card3.style.display = "flex";
    card4.style.display = "none";
    card5.style.display = "none";
})
btn4.addEventListener("click", () => {
    card1.style.display = "none";
    card2.style.display = "none";
    card3.style.display = "none";
    card4.style.display = "flex";
    card5.style.display = "none";
})
btn5.addEventListener("click", () => {
    card1.style.display = "none";
    card2.style.display = "none";
    card3.style.display = "none";
    card4.style.display = "none";
    card5.style.display = "flex";
})
// sign out btn js

let email = localStorage.getItem("email");
let password = localStorage.getItem("pass")
let signBtn = document.querySelector(".sign-in-btn");

if (email && password) {
    signBtn.textContent = "Sign-out";
    signBtn.href = "#";

    signBtn.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem("email");
        localStorage.removeItem("pass");
        location.reload();
    });
}