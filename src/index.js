import todo from './todo';
import createProject from './project';

document.body.style.background="#47B28C";

// Create a few default projects and todos
let listOfProjects=[]
let currentProject;
const doto = new todo("Clean room","Clean the damn room","today","very high");
const test_project=createProject("Room")
currentProject=test_project;
test_project.addTodo(doto);
const doto1 = new todo("Eat Chips","eat some crisps","next year","pretty low");
test_project.addTodo(doto1);
listOfProjects.push(test_project);
const test_project1=createProject("Kitchen")
test_project1.addTodo(doto1);
listOfProjects.push(test_project1)


// Add navbar and todo display areas
const content = document.getElementById("content");

const navbar = document.createElement('div');
navbar.id="navbar";
const navbar_heading=document.createElement("div");
navbar_heading.id="navbar_heading";
navbar_heading.innerHTML="Project List"+"<br>"+"<br>";
navbar.appendChild(navbar_heading);

const new_project=document.createElement("button");
new_project.innerHTML='<i class="material-icons">add</i>';
new_project.id="new_project_button";
navbar.appendChild(new_project)
new_project.addEventListener('click',function (e) {
    addProject();
});
let line_break=document.createElement('div');
line_break.innerHTML="<br>";
navbar.appendChild(line_break);

const project_list = document.createElement('div');
project_list.id="project_list";
navbar.appendChild(project_list);
content.appendChild(navbar);
showProjects();

const projectData = document.createElement('div');
projectData.id="todo_data";
content.appendChild(projectData);

displayTodos();

// Function to display projects in the navbar
function showProjects() {
    project_list.innerHTML="";
    for (let i=0;i<listOfProjects.length;i++) {
        let project_link=document.createElement('div');
        project_link.innerText=listOfProjects[i].name;
        project_link.className="project_link";
        project_list.appendChild(project_link);
        let line_break=document.createElement('div');
        line_break.innerHTML="";
        project_list.appendChild(line_break);
    }
    let project_links=document.getElementsByClassName("project_link");
    for (let i=0;i<project_links.length;i++) {
        project_links[i].addEventListener('click', function (e) {
            currentProject=listOfProjects[i];
            displayTodos();
        });
    }
}

function displayTodos() {
    projectData.innerHTML="";
    projectData.innerHTML=currentProject.name+"'s Todos : "+"<br><br>";
    for (let i=0;i<currentProject.listTodos().length;i++) {
        const todo_div=document.createElement("div");
        todo_div.innerHTML=currentProject.listTodos()[i].name+"&emsp;";
        todo_div.className="todo_div";
       
        const todo_options=document.createElement("div");
        todo_options.className="todo_options";
        const delete_button=document.createElement("button");
        delete_button.id=currentProject.listTodos()[i].name;
        delete_button.className="delete_button";
        delete_button.innerHTML='<i class="material-icons delete_todo">delete</i>';
        todo_options.appendChild(delete_button);
        todo_options.innerHTML=todo_options.innerHTML+"&emsp;";

        const show_button=document.createElement("button");
        show_button.id=currentProject.listTodos()[i].name;
        show_button.className="show_button";
        show_button.innerHTML='<i class="material-icons show_todo">keyboard_arrow_down</i>';
        todo_options.appendChild(show_button);
        todo_div.appendChild(todo_options);

        const details=document.createElement("div");
        details.id=currentProject.listTodos()[i].name+"info";
        details.style.display="none";
        todo_div.appendChild(details);

        projectData.appendChild(todo_div);
    }
    const deleteBtns=document.getElementsByClassName("delete_button");
    for (let i=0;i<deleteBtns.length;i++) {
        deleteBtns[i].addEventListener('click', function (e) {
            deleteTodo(deleteBtns[i].id)
        });
    }
    
    const showBtns=document.getElementsByClassName("show_button");
    for (let i=0;i<showBtns.length;i++) {
        showBtns[i].addEventListener('click', function (e) {
            showTodo(showBtns[i].id)
        });
    }

    let line_break=document.createElement('div');
    line_break.innerHTML="<br>";
    projectData.appendChild(line_break);

    addNewTodo();
}

function deleteTodo(todo_name) {
    currentProject.deleteTodo(todo_name);
    displayTodos();
}

function showTodo(todo_name) {
    const detailedTodo=document.createElement("div");
    detailedTodo.className="detailed_todo";
    currentProject.showTodo(todo_name);
}

// Add a new project
const add_project_box=document.createElement('div');
const name_div=document.createElement('div');
const name_label=document.createElement('div');
name_label.innerHTML="Name :: ";
name_div.appendChild(name_label);
const name_text=document.createElement('input');
name_div.appendChild(name_text);
add_project_box.appendChild(name_div);

const okayBtn=document.createElement('button');
okayBtn.innerHTML="Okay";
add_project_box.appendChild(okayBtn);
okayBtn.addEventListener('click',function(e) {
    const new_project=createProject(name_text.value);
    listOfProjects.push(new_project);
    name_text.value="";
    add_project_box.style.display="none";
    showProjects();
});

const cancelBtn=document.createElement('button');
cancelBtn.innerHTML="Cancel";
add_project_box.appendChild(cancelBtn);
cancelBtn.addEventListener('click',function(e) {
    name_text.value="";
    add_project_box.style.display="none";
});

add_project_box.id="add_project_box";
add_project_box.style.display="none";
navbar.appendChild(add_project_box);


function addProject() {
    add_project_box.style.display="block";
}

// Add a new Todo
function addNewTodo() {
    const new_todo=document.createElement("button");
    new_todo.id="new_todo_button";
    new_todo.innerHTML='<i class="material-icons">fiber_new</i>';
    projectData.appendChild(new_todo)
    new_todo.addEventListener('click',function (e) {
        addTodo();
    });

}

const add_todo_box=document.createElement('div');
const todo_name_div=document.createElement('div');
const todo_name_label=document.createElement('div');
todo_name_label.innerHTML="Name :: ";
todo_name_div.appendChild(todo_name_label);
const todo_name_text=document.createElement('input');
todo_name_div.appendChild(todo_name_text);
add_todo_box.appendChild(todo_name_div);

const todo_descr_div=document.createElement('div');
const todo_descr_label=document.createElement('div');
todo_descr_label.innerHTML="Description :: ";
todo_descr_div.appendChild(todo_descr_label);
const todo_descr_text=document.createElement('input');
todo_descr_div.appendChild(todo_descr_text);
add_todo_box.appendChild(todo_descr_div);

const todo_due_div=document.createElement('div');
const todo_due_label=document.createElement('div');
todo_due_label.innerHTML="Due by :: ";
todo_due_div.appendChild(todo_due_label);
const todo_due_date=document.createElement('input');
todo_due_date.type='date';
todo_due_div.appendChild(todo_due_date);
add_todo_box.appendChild(todo_due_div);

const todo_priority_div=document.createElement('div');
const todo_priority_label=document.createElement('div');
todo_priority_label.innerHTML="Priority :: ";
todo_priority_div.appendChild(todo_priority_label);
const todo_priority_value=document.createElement('input');
todo_priority_div.appendChild(todo_priority_value);
add_todo_box.appendChild(todo_priority_div);

const todoOkayBtn=document.createElement('button');
todoOkayBtn.innerHTML="Okay";
add_todo_box.appendChild(todoOkayBtn);
todoOkayBtn.addEventListener('click',function(e) {
    const new_todo=new todo(todo_name_text.value,todo_descr_text.value,todo_due_date.value,todo_priority_value.value);
    currentProject.addTodo(new_todo)
    todo_name_text.value="";
    add_todo_box.style.display="none";
    displayTodos();
});

const todoCancelBtn=document.createElement('button');
todoCancelBtn.innerHTML="Cancel";
add_todo_box.appendChild(todoCancelBtn);
todoCancelBtn.addEventListener('click',function(e) {
    todo_name_text.value="";
    add_todo_box.style.display="none";
});

add_todo_box.id="add_todo_box";
add_todo_box.style.display="none";
content.appendChild(add_todo_box);


function addTodo() {
    add_todo_box.style.display="block";
}
