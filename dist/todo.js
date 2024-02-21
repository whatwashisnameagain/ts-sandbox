"use strict";
;
const Todos = [];
function showTodos(amountToShow) {
    const firstTodo = {
        id: 1, title: "yes", description: 'My first todo'
    };
    Todos.push(firstTodo);
    for (let i = 0; i < amountToShow; i++) {
        console.log(Todos[i]);
    }
    return Todos;
}
;
showTodos(1);
