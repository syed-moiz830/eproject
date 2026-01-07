let username = document.getElementById("username");
let password = document.getElementById("password");
let error = document.getElementById("error");

username.addEventListener("input", () => {
    if (username.value !== "") {
        document.querySelector("#mini-error").style.visibility = "hidden"

    } 
})
password.addEventListener("input", () => {
    if (password.value !== "") {
        error.style.visibility = "hidden"

    } 
})
password.addEventListener("click",()=>{
    if (username.value==="") {
        document.querySelector("#mini-error").style.visibility = "visible"
        username.focus()

        
    } else {
         document.querySelector("#mini-error").style.visibility = "hidden"
    }
})
let btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
    e.preventDefault()
    if (username.value === "" && password.value === "") {
        error.style.visibility= "visible"

        document.querySelector("#mini-error").style.visibility= "visible"


    }
    else if (username.value === "") {
        error.style.visibility = "hidden"
        document.querySelector("#mini-error").style.visibility= "visible"


    }
    else if (password.value === "") {
        error.style.visibility = "visible"
        document.querySelector("#mini-error").style.visibility = "hidden"


    }
    else {
        error.style.visibility= "hidden"
        document.querySelector("#mini-error").style.visibility= "hidden"
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
