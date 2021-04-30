import React from 'react';
import {TodoList} from "./TodoList";

export function TodoCompletedList({ todos, toggleTodo }) {
    return (
        <div className="todo-completed-list">
            <h2>Completed Tasks</h2>
            <TodoList todos={todos} toggleTodo={toggleTodo} completed = {true}/>
        </div>
    );
}

