function createProject(name) {
    return {
        name,
        todoList:[],
        addTodo: function(todo) {
            this.todoList.push(todo);
        },
        deleteTodo: function(todo_name) {
            let todo=this.todoList.find(x => x.name === todo_name)
            const index=this.todoList.indexOf(todo)
            if (index > -1) {
                this.todoList.splice(index,1);
            }
        },
        listTodos: function() {
            return this.todoList;
        },
        showTodo: function(todo_name) {
            console.log("It's act "+document.getElementById(todo_name))
            let todo=this.todoList.find(x => x.name === todo_name)
            const index=this.todoList.indexOf(todo)
            if (index > -1) {
                const details=document.getElementById(todo_name+"info");
                if (details.style.display==="block") {
                    details.style.display="none";
                } else {
                    details.innerHTML="Name : "+this.todoList[index].name+"<br>"+"Desc : "+this.todoList[index].description+"<br>"+"Due by : "+this.todoList[index].dueDate+"<br>"+"Priority : "+this.todoList[index].priority;
                    details.style.display="block";
                }
            }
        }
    }
}

export default createProject;