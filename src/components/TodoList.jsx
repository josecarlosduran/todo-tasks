import React from 'react';
import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, completed }) {
    return (
       <ul className="todo-list">
           {todos.filter((todo) => (todo.completed === completed)).map((todo) => (
               <TodoItem key={todo.id} todo = {todo} toggleTodo={toggleTodo}/>
           ))}
       </ul>
    );
}

