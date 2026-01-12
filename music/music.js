// js for sign out button
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