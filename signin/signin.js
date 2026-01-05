let username = document.getElementById("username");
let password = document.getElementById("password");
let error = document.getElementById("error");

password.addEventListener("click", () => {
    if (username.value === "") {
        document.querySelector("#mini-error").style.display = "block"
        username.focus();

    } else {
        document.querySelector("#mini-error").style.display = "none"
    }
})

let btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
    e.preventDefault()
    if (username.value === "" && password.value === "") {
        error.style.display = "block"
        document.querySelector("#mini-error").style.display = "block"


    }
    else if (username.value === "") {
        error.style.display = "none"
        document.querySelector("#mini-error").style.display = "block"


    }
    else if (password.value === "") {
        error.style.display = "block"
        document.querySelector("#mini-error").style.display = "none"


    }
    else {
        error.style.display = "none"
        document.querySelector("#mini-error").style.display = "none"
        localStorage.setItem("email", username.value);
        localStorage.setItem("pass", password.value);
        setTimeout(() => {
            alert("Register Successfully");
            window.location.href = "../home/home.html"
        }, 70);
    }


})
let togglebtn = document.querySelector("svg");
togglebtn.addEventListener("click", () => {
    if (password.type === "password") {
        password.type = "text"

    } else {
        password.type = "password"

    }

})
