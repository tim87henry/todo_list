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
            let todo=this.todoList.find(x => x.name === todo_name)
            const index=this.todoList.indexOf(todo)
            if (index > -1) {
                console.log("It's actually "+this.todoList[index].description)
                const details=document.createElement("div")
                details.innerHTML="Name : "+this.todoList[index].name+"<br>"+"Desc : "+this.todoList[index].description+"<br>"+"Due by : "+this.todoList[index].dueDate+"<br>"+"Priority : "+this.todoList[index].priority;
                document.getElementById("todo_data").appendChild(details)
                //this.todoList.splice(index,1);
            }
        }
    }
}

export default createProject;