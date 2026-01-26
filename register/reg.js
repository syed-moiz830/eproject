let msgbtn = document.querySelector(".btn");
msgbtn.addEventListener("click", () => {
    let firstname = document.getElementById("first-name");
    let lastname = document.getElementById("last-name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    switch (true) {
        case firstname.value.trim() === "":
            firstname.focus()
               alert("Fullfill All The Requirements First")
            break;
        case lastname.value.trim() === "":
            lastname.focus()
               alert("Fullfill All The Requirements First")
            break;
        case email.value.trim() === "":
            email.focus()
               alert("Fullfill All The Requirements First")
            break;
        case password.value.trim() === "":
            password.focus()
            alert("Fullfill All The Requirements First")
            break;

        default:
            alert("Register Sucessfully");
            localStorage.setItem("email", email.value);
            localStorage.setItem("pass", password.value);
            password.value =""
            email.value = ""
            lastname.value = ""
            firstname.value = ""
            window.location.href="../signin/signin.html"
            break;
    }
     
        


})
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
