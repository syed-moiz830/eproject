let signBtn = document.querySelector(".sign-in-btn");
let login = localStorage.getItem("login");

if (login) {
    signBtn.textContent = "Sign-out";
    signBtn.href = "#";

    signBtn.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem("login");
        location.reload();
    });
}