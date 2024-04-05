class TodoList {
    constructor(name) {
        this.name = name;
        this.todos = [];
    }

    addTodo(todoText) {
        const todo = {
            text: todoText,
            completed: false
        };
        this.todos.push(todo);
    }

    completeTodo(todoIndex) {
        if (todoIndex >= 0 && todoIndex < this.todos.length) {
            this.todos[todoIndex].completed = true;
        } else {
            console.log("Invalid todo index.");
        }
    }

    deleteTodo(todoIndex) {
        if (todoIndex >= 0 && todoIndex < this.todos.length) {
            this.todos.splice(todoIndex, 1);
        } else {
            console.log("Invalid todo index.");
        }
    }

    listTodos() {
        console.log(`Todos for ${this.name}:`);
        this.todos.forEach((todo, index) => {
            console.log(`${index + 1}. ${todo.text} - ${todo.completed ? 'Completed' : 'Not Completed'}`);
        });
    }
}

// Example usage:
const myTodoList = new TodoList("My Todo List");
myTodoList.addTodo("Learn JavaScript");
myTodoList.addTodo("Build a todo list manager");
myTodoList.addTodo("Complete assignment");
myTodoList.listTodos(); // Display all todos
myTodoList.completeTodo(1); // Mark second todo as completed
myTodoList.listTodos(); // Display all todos after marking one as completed
myTodoList.deleteTodo(2); // Delete third todo
myTodoList.listTodos(); // Display all todos after deletion
