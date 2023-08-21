const logInInput = document.querySelector(".login-form input");
const logInBtn = document.querySelector(".login-form button");

function handleLoginBtnClick() {
    const username = logInInput.value;
    if(username === "") {
        alert("Please write your name.");
    } else if(username.length > 15) {
        alert("Your name is too long.")
    }
}

logInBtn.addEventListener("click", handleLoginBtnClick);