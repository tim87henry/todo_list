import todo from './todo';
import createProject from './project';

document.body.style.background="lightsalmon";

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
navbar.innerHTML="Project List"+"<br>"+"<br>";

const new_project=document.createElement("button");
new_project.innerHTML="Add project";
navbar.appendChild(new_project)
new_project.addEventListener('click',function (e) {
    addProject();
});

const project_list = document.createElement('div');
project_list.id="project_list";
navbar.appendChild(project_list);
content.appendChild(navbar);
showProjects();

const projectData = document.createElement('div');
projectData.id="todo_data";
content.appendChild(projectData);

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
    displayTodos();
}

function displayTodos() {
    projectData.innerHTML="";
    projectData.innerHTML="Here are the list of Todos : "+"<br><br>";
    for (let i=0;i<currentProject.listTodos().length;i++) {
        projectData.innerHTML=projectData.innerHTML+currentProject.listTodos()[i].name+"&emsp;";
        const delete_button=document.createElement("button");
        delete_button.id=currentProject.listTodos()[i].name;
        delete_button.className="delete_button";
        delete_button.innerHTML="Delete";
        projectData.appendChild(delete_button);
        projectData.innerHTML=projectData.innerHTML+"<br>";
    }
    const deleteBtns=document.getElementsByClassName("delete_button");
    for (let i=0;i<deleteBtns.length;i++) {
        deleteBtns[i].addEventListener('click', function (e) {
            deleteTodo(deleteBtns[i].id)
        });
    }
    addNewTodo();
}

function deleteTodo(todo_name) {
    currentProject.deleteTodo(todo_name);
    displayTodos();
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
    new_todo.innerHTML="Add todo";
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

const todoOkayBtn=document.createElement('button');
todoOkayBtn.innerHTML="Okay";
add_todo_box.appendChild(todoOkayBtn);
todoOkayBtn.addEventListener('click',function(e) {
    const new_todo=createProject(todo_name_text.value);
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
