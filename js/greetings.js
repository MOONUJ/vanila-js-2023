const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginBtn = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");
const appearElement = document.getElementsByClassName("afterLoginAppear");

const HIDDEN_CLASSNAME = "hidden";
const FLEX_CLASSNAME = "flex";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.remove(FLEX_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello! ${username}`;
    paintAppearElement(appearElement.length);
}

function paintAppearElement(length) {
    for(i=0; i < length; i++){
        appearElement[i].classList.add(FLEX_CLASSNAME);
        appearElement[i].classList.remove(HIDDEN_CLASSNAME);
    }
}

loginForm.addEventListener("submit", onLoginSubmit);


const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
     //show the form
     loginForm.classList.add(FLEX_CLASSNAME);
     loginForm.classList.remove(HIDDEN_CLASSNAME);
     loginForm.addEventListener("submit", onLoginSubmit);
} else {
    //show the h1
    paintGreetings(savedUsername);
}