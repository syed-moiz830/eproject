let msgbtn = document.querySelector(".btn");
msgbtn.addEventListener("click", () => {
    let firstname = document.getElementById("first-name");
    let lastname = document.getElementById("last-name");
    let email = document.getElementById("email");
    let msg = document.getElementById("message");
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
        case msg.value.trim() === "":
            msg.focus()
            alert("Fullfill All The Requirements First")
            break;

        default:
            alert("Message Is Sent");
            msg.value === ""
            email.value === ""
            lastname.value === ""
            firstname.value === ""
            break;
    }

})