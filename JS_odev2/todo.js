// get the elements by those codes

const btnAdd = document.getElementById("btnAdd");
const txtTodo = document.getElementById("txtTodo");
const todoList = document.querySelector(".list-group");
const firstBody = document.querySelectorAll(".card-body")[0];
const secondBody = document.querySelectorAll(".card-body")[1];
const txtFilter = document.getElementById("filter");
const btnClearAll = document.getElementById("clear-todos");


//all events are there


secondBody.addEventListener("click", btnDelete);
document.addEventListener("DOMContentLoaded", loadScreen);
btnAdd.addEventListener("click", addFunction);
txtFilter.addEventListener("keyup", filterTodos);
btnClearAll.addEventListener("click", clearAll);

function addFunction(e) { //btnAdd function
    let todoText = txtTodo.value.trim();
  

    if (todoText == "") {
        showAlert("danger", "Please enter a todo!");
    }
    else {
        addToTheList(todoText);
        addTodosToLocal(todoText);
        showAlert("info", "You've successfully added a new todo!");
    }

    e.preventDefault();
}



function addToTheList(todo) { //add the ToDo into "ul" 
    let newTodo = document.createElement("li");
    let deleteTag = document.createElement("a");

    newTodo.className = "list-group-item list-group-item-action list-group-item-secondary d-flex justify-content-between ";
    
    
    newTodo.id = "newTodo";
    newTodo.appendChild(document.createTextNode(todo));
    newTodo.appendChild(deleteTag);
    deleteTag.className = "delete-item";
    deleteTag.href = "#";
    deleteTag.innerHTML = "<i id='xButton' class = 'fa fa-remove'></i>";
    todoList.appendChild(newTodo);
    txtTodo.value = "";
}

function addTodosToLocal(newTodo) {

    let todos = getTodosFromLocal();

    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}



function loadScreen(e) {
    let todos = getTodosFromLocal();

    todos.forEach(todo => {
        addToTheList(todo);
    });
}
function btnDelete(e) {

    if (e.target.id === "xButton") {
        e.target.parentElement.parentElement.remove();
        showAlert("warning", "the Todo has been deleted succesfully!")
        deleteFromLocal(e.target.parentElement.parentElement.textContent);
    }
    
    if (e.target.id === "newTodo") {
     
        if (e.target.className.indexOf("active") == -1) {
            e.target.className = "list-group-item list-group-item-action active list-group-item-secondary d-flex justify-content-between ";
          
           
            
        }
        else{
            e.target.className = "list-group-item list-group-item-action list-group-item-secondary d-flex justify-content-between ";
            e.target.innerHTML = e.target.textContent;
        }

       
    }
    e.preventDefault();

}




// 


function deleteFromLocal(todo) {

    let delTodos = getTodosFromLocal();

    delTodos.forEach(function (delTodo, index) {
        if (delTodo === todo) {
            delTodos.splice(index, 1);
        }
    });

    localStorage.setItem("todos", JSON.stringify(delTodos));
}


function filterTodos(e) {

    let filterText = e.target.value.toLowerCase();


    const listGroupTodos = document.querySelectorAll("#newTodo");



    listGroupTodos.forEach(function (eachTodo) {
        let lowerTodo = eachTodo.textContent.toLowerCase();

        if (lowerTodo.indexOf(filterText) === -1) {

            eachTodo.setAttribute("style", "display : none !important;");
        }
        else {
            eachTodo.setAttribute("style", "display : block;");
        }


    });
}




function getTodosFromLocal() {

    let todos;

    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}
function showAlert(type, message) {


    const createAlert = document.createElement("div");
    createAlert.className = `alert alert-${type}`;
    createAlert.textContent = message;
    firstBody.append(createAlert);

    setTimeout(function () {  //with that method, the alertDiv will be appear only  for 1.5 seconds.
        createAlert.remove();
    }, 1500);

}


function clearAll(e) {

    const a = todoList.children.length;
    for (let index = 0; index < a; index++) {
        todoList.firstElementChild.remove();
        localStorage.removeItem("todos");

    }
    showAlert("success", "All todos have been deleted!");
}


















