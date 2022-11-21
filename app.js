const loginForm = document.querySelector(".login-form");

const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

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
    console.log(event);
    const username = loginInput.value;
}

loginForm.addEventListener("submit", onLoginSubmit)