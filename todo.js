let renderTodos = (clear=false) => {
    if (clear) {
        listElement.innerHTML = '';
    }
    for(i in todos) {
        // create list item
        li = document.createElement('li');
        li.innerHTML = todos[i] + ' ';
        li.id = i;
        li.setAttribute('class', 'card');

        // create del button
        a = document.createElement('a');
        a.setAttribute('href', '#');
        a.setAttribute('class', 'card-link');
        a.onclick = delTodo;
        a.innerHTML = 'Excluir';

        // add list item to list
        li.appendChild(a);
        listElement.appendChild(li);
    }
    console.log(todos);
}

let addTodo = () => {
    if (inputElement.value != ""){
        // add value to todo list;
        todos.push(inputElement.value);

        // clear input 
        inputElement.value = ''; 

        // render todos
        renderTodos(true);
        saveStorage();
    }
}

function delTodo() {
    // remove todo in html
    li = this.parentNode;
    ul = li.parentNode;
    // ul.removeChild(li);

    // remove todo in array
    todos.splice(li.id, 1);

    //
    renderTodos(true);

    // save changes
    saveStorage();
}

let saveStorage = () => {
    // save in local storage
    localStorage.setItem('list_todo', JSON.stringify(todos));
}

// getting elements
let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");
let todos = JSON.parse(localStorage.getItem('list_todo')) || Array();

// initial run
buttonElement.onclick = addTodo;
renderTodos();