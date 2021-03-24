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
                const details=document.getElementById(todo_name+"info");
                if (details.style.display==="block") {
                    details.style.display="none";
                } else {
                    details.innerHTML="Name : "+this.todoList[index].name+"<br>"+"Desc : "+this.todoList[index].description+"<br>"+"Due by : "+this.todoList[index].dueDate+"<br>"+"Priority : "+this.todoList[index].priority;
                    details.style.display="block";
                }
            }
        },
        editTodo: function(todo_name) {
            let todo=this.todoList.find(x => x.name === todo_name)
            const index=this.todoList.indexOf(todo)
            if (index > -1) {
                document.getElementById("todo_edit_name_text").value=this.todoList[index].name;
                document.getElementById("todo_edit_descr_text").value=this.todoList[index].description;
                document.getElementById("todo_edit_due_date").value=this.todoList[index].dueDate;
                document.getElementById("todo_edit_priority_value").value=this.todoList[index].priority;
            }
        },
        editValues: function() {
            var todo_name=document.getElementById("todo_edit_name_text").value;
            let todo=this.todoList.find(x => x.name === todo_name)
            const index=this.todoList.indexOf(todo)
            if (index > -1) {
                this.todoList[index].name=document.getElementById("todo_edit_name_text").value;
                this.todoList[index].description=document.getElementById("todo_edit_descr_text").value;
                this.todoList[index].dueDate=document.getElementById("todo_edit_due_date").value;
                this.todoList[index].priority=document.getElementById("todo_edit_priority_value").value;
            }
        }
    }
}

export default createProject;