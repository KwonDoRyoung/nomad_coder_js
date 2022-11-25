const clock = document.querySelector("h2#clock")


// function sayHello(){
//     console.log("Hello!!! D!")
// }

// setInterval(sayHello, 5000)
// setTimeout(sayHello, 5000)
//
// const date = new Date()
// console.log(date.getTime())

function getClock(){
    const date = new Date()
    const hour = String(date.getHours()).padStart(2, "0")
    const minute = String(date.getMinutes()).padStart(2, "0")
    const second = String(date.getSeconds()).padStart(2, "0")
    clock.innerText = `${hour}:${minute}:${second}`;
}
getClock()
setInterval(getClock, 1000)