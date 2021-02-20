import todo from './todo';
import createProject from './project';

document.body.style.background="lightsalmon";

let listOfProjects=[]
const doto = new todo("Clean room","Clean the damn room","today","very high");
const test_project=createProject("Room")
test_project.addTodo(doto);
const doto1 = new todo("Eat Chips","eat some crisps","next year","pretty low");
test_project.addTodo(doto1);
listOfProjects.push(test_project);
const test_project1=createProject("Kitchen")
test_project1.addTodo(doto1);
listOfProjects.push(test_project1)

const content = document.getElementById("content");

const navbar = document.createElement('div');
navbar.id="navbar";
navbar.innerHTML="Project List"+"<br>"+"<br>";
const new_project=document.createElement("button");
new_project.innerHTML="Add project";
navbar.appendChild(new_project)
const project_list = document.createElement('div');
project_list.id="project_list";
navbar.appendChild(project_list);
content.appendChild(navbar);
showProjects();

function showProjects() {
    for (let i=0;i<listOfProjects.length;i++) {
        let project_link=document.createElement('div');
        project_link.innerText=listOfProjects[i].name;
        project_link.className="project_link";
        project_list.appendChild(project_link);
        let line_break=document.createElement('div');
        line_break.innerHTML="";
        project_list.appendChild(line_break);
    }
}

let project_links=document.getElementsByClassName("project_link");
for (let i=0;i<project_links.length;i++) {
    project_links[i].addEventListener('click', function (e) {
        const todoData = document.createElement('div');
        todoData.id="todo_data";
        todoData.innerHTML="Here are the list of Todos : "+"<br>"+listOfProjects[i].listTodos();
        content.appendChild(todoData);
    });
}