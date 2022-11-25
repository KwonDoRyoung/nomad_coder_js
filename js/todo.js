const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = []

function paintToDo(newTodoObj){
    const liTodo = document.createElement("li");
    const spanTodo = document.createElement("span");
    const buttonTodo = document.createElement("button");

    spanTodo.innerText = newTodoObj["text"];
    buttonTodo.innerText = "❌";
    buttonTodo.addEventListener("click", deleteToDo)

    liTodo.id = newTodoObj["id"]
    liTodo.appendChild(spanTodo);
    liTodo.appendChild(buttonTodo);
    toDoList.appendChild(liTodo);
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    li.remove();
    saveToDos()
}

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value
    toDoInput.value = ""
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }
    toDos.push(newTodoObj)
    paintToDo(newTodoObj)
    saveToDos()
}

toDoForm.addEventListener("submit", handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY)

if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos)
    // parsedToDos.forEach((item) => console.log(`hello my love ${item}`))
    toDos = parsedToDos
    parsedToDos.forEach(paintToDo)
}
