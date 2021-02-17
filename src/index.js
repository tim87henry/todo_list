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
navbar.innerHTML="Project List"+"<br>"+showProjects();
content.appendChild(navbar);

function showProjects() {
    let list="";
    for (let i=0;i<listOfProjects.length;i++) {
        list=list+listOfProjects[i].name+"<br>";
    }
    return list;
}

const todoData = document.createElement('div');
todoData.id="todo_data";
todoData.innerHTML="Here are the list of Todos : "+"<br>"+test_project.listTodos();
content.appendChild(todoData);