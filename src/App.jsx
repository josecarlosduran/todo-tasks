import React, { useState, useRef, useEffect } from 'react';
import { TodoPendingList } from './components/TodoPendingList'
import {TodoCompletedList} from "./components/TodoCompletedList";
import { HeaderBar} from "./components/HeaderBar";
import { v4 as uuidV4 } from 'uuid'

import './styles/App.scss'


const LOCAL_STORAGE_KEY = "todoTasksApp.todos"

export function App(){
    const [todos, setTodos] = useState([]);

    const todoTaskRef = useRef()

    useEffect(() =>{
            const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
            if (storedTodos) {
                setTodos(storedTodos)
            }
        },
        []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
        },
        [todos]);

    const toggleTodo = (id) => {
        const newTodos = [...todos];
        const todo = newTodos.find ((todo) => todo.id === id);
        todo.completed = !todo.completed;
        setTodos(newTodos);
    }

    const handleTodoAdd = () =>{
        const task = todoTaskRef.current.value;
        if (task === '') return;

        setTodos((prevTodos) => {
            return [...prevTodos, {id: uuidV4(), task, completed: false}]
        })

        todoTaskRef.current.value = null

    };

    const handleClearAll = () => {
        const newTodos =todos.filter((todo) => !todo.completed);
        setTodos(newTodos);
    }


    const remainingTasksText = () => {
        const remainingTasks = todos.filter((todo) =>!todo.completed).length;
        if (remainingTasks === 0 ){
            return ('');
        }
        return (
            <div>
                Te quedan {remainingTasks} tareas por terminar
            </div>
        );
    };

    return (
        <>
            <HeaderBar />
            <button onClick={handleTodoAdd}>➕</button>
            <button onClick={handleClearAll}>🗑</button>
            <input ref={todoTaskRef} type="text" placeholder="Nueva Tarea" />
            <TodoPendingList todos={todos} toggleTodo={toggleTodo} />
            {remainingTasksText()}
            <TodoCompletedList todos={todos} toggleTodo={toggleTodo} />
        </>
    );
}