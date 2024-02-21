interface Todo {
    id: number;
    title: string;
    description: string;
};

const Todos: Todo[] = [];

function showTodos(amountToShow: number): Todo[] {

    const firstTodo = {
        id: 1, title: "yes", description: 'My first todo'
    };

    Todos.push(firstTodo);

    // Show todos based on amount to show parameter
    for(let i:number = 0; i < amountToShow; i++) {
        console.log(Todos[i])
    }

    return Todos;
};

showTodos(1);
