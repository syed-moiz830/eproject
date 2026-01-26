let username = document.getElementById("username");
let password = document.getElementById("password");
let error = document.getElementById("error");
let previousPage = document.referrer;
let reg_email=localStorage.getItem("email");
let pass= localStorage.getItem("pass");
//  js for each empty input error apperance
// if both boxes are full

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
// if user box is empty and password box is clicked
password.addEventListener("click",()=>{
    if (username.value==="") {
        document.querySelector("#mini-error").style.visibility = "visible"
        username.focus()

        
    } else {
         document.querySelector("#mini-error").style.visibility = "hidden"
    }
})
// if both boxes are empty and register btn is clicked
let btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
    e.preventDefault()
    if (username.value === "" && password.value === "") {
        error.style.visibility= "visible"
        document.querySelector("#mini-error").style.visibility= "visible"
    }
    // if user box is empty and register btn is clicked
    else if (username.value === "") {
        error.style.visibility = "hidden"
        document.querySelector("#mini-error").style.visibility= "visible"
    }
      // if password box is empty and register btn is clicked
    else if (password.value === "") {
        error.style.visibility = "visible"
        document.querySelector("#mini-error").style.visibility = "hidden"
    }
    // if both are filled
    else {
        error.style.visibility= "hidden"
        document.querySelector("#mini-error").style.visibility= "hidden"
        if (username.value==reg_email &&
  password.value === pass) {
             alert("Sign In Successfully");
             window.location.href=PreviousPage
            
        } else {
            alert("Enter Correct Information")
        }
        
      
    }
})
//  password show and hide
let togglebtn = document.querySelector(".eye-icon");
togglebtn.addEventListener("click", () => {
    if (password.type === "password") {
        password.type = "text"

    } else {
        password.type = "password"

    }

})
 