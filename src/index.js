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
new_project.addEventListener('click',function (e) {
    addProject();
});

const project_list = document.createElement('div');
project_list.id="project_list";
navbar.appendChild(project_list);
content.appendChild(navbar);
showProjects();

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
            const todoData = document.createElement('div');
            todoData.id="todo_data";
            todoData.innerHTML="Here are the list of Todos : "+"<br>"+listOfProjects[i].listTodos();
            content.appendChild(todoData);
        });
    }
}

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
