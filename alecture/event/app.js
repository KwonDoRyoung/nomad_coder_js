const title = document.querySelector(".hello h1")
const h1 = document.querySelector(".hello:first-child h1")

// function handleTitleClick() {
//     if (title.style.color === "tomato") {
//         title.style.color = "orange"
//         title.innerText = "Grab me!"
//     } else {
//         title.style.color = "tomato";
//         title.innerText = "hello";
//     }
// }

// function handleTitleClick() {
//     const currentColor = title.style.color;
//     let newColor;
//     if (currentColor === "tomato") {
//         newColor = "orange"
//         title.innerText = "Grab me!"
//     } else {
//         newColor = "tomato";
//         title.innerText = "hello";
//     }
//     title.style.color = newColor;
// }

// function handleTitleClick() {
//     const clickedClass = "active"
//     if (h1.className === clickedClass) {
//         h1.className = "";
//     } else {
//         h1.className = clickedClass;
//     }
// }

// function handleTitleClick() {
//     const clickedClass = "active"
//     if (h1.classList.contains(clickedClass)) {
//         h1.classList.remove(clickedClass);
//     } else {
//         h1.classList.add(clickedClass);
//     }
// }
function handleTitleClick() {
    h1.classList.toggle("active")
}

h1.addEventListener("click", handleTitleClick);

// function handleMouseEnter() {
//     title.innerText = "xxx xxx!";
//     title.style.color = "blue";
// }
//
// function handleMouseLeave() {
//     title.innerText = "Mouse is gone!";
// }
//
// function handleWindowResize() {
//     document.body.style.backgroundColor = "orange";
//
// }
//
// function handleWindowCopy(){
//     alert("copier!!!")
// }
//
// function handleWindowOffline() {
//     alert("SOS no WIFI!!")
// }
//
// function handleWindowOnline() {
//     alert("on the WIFI")
// }
//
// //
// title.onClick = handleTitleClick;
// title.addEventListener("mouseenter", handleMouseEnter)
// title.addEventListener("mouseleave", handleMouseLeave)
//
//
// window.addEventListener("resize", handleWindowResize)
// window.addEventListener("copy", handleWindowCopy)
//
// window.addEventListener("offline", handleWindowOffline)
// window.addEventListener("online", handleWindowOnline)