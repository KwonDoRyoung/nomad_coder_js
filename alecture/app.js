const loginForm = document.querySelector(".login-form");

const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// const link = document.querySelector("a");

// function handleLinkClick(event) {
//     event.preventDefault()
//     console.log(event)
//     alert("click")
// }
//
// link.addEventListener("click", handleLinkClick)

// function handleLoginBtnClick(){
//     const username = loginInput.value;
//     // html form 으로 방어 가능
//     // if (username === ""){
//     //     alert("Please write your name!")
//     // } else if (username.length > 15){
//     //     alert("Your name is too long!")
//     // }
// }

// loginButton.addEventListener("click", handleLoginBtnClick);

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username)
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(username)
}

function paintGreetings(name){
    greeting.innerText = `Hello ${name}`;  // greeting.innerText = "Hello " + username;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


const savedUsername = localStorage.getItem(USERNAME_KEY)

if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit)
}else{
    paintGreetings(savedUsername)
}