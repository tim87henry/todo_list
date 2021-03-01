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
        }
    }
}

export default createProject;