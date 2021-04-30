import {TodoList} from "./TodoList";

export function TodoPendingList({ todos, toggleTodo }) {
    return (
        <div className="todo-pending-list">
            <h2>Pending Tasks</h2>
            <TodoList todos={todos} toggleTodo={toggleTodo} completed = {false}/>
        </div>
    );
}
