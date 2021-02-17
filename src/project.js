function createProject(name) {
    return {
        name,
        todoList:[],
        addTodo: function(todo) {
            this.todoList.push(todo.name);
        },
        listTodos: function() {
            return this.todoList;
        }
    }
}

export default createProject;