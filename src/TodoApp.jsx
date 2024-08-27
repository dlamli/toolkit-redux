import { useState } from "react";
import { useGetTodoByIdQuery, useGetTodosQuery } from "./store/slices/apis";

export const TodoApp = () => {
    // const { data: todos = [], isLoading } = useGetTodosQuery();
    const [todoId, setTodoId] = useState(1);
    const { data: todoById = [], isLoading } = useGetTodoByIdQuery(todoId);

    const handleNextTodo = () => setTodoId((id) => id + 1);
    
    const handlePrevTodo = () => {
        if (todoId === 1) return;
        setTodoId((id) => id - 1);
    };

    return (
        <>
            <h1>TodoApp - RTK Query</h1>
            <hr />
            <span>Loading: {isLoading ? "True" : "False"}</span>

            <pre>{JSON.stringify(todoById)}</pre>
            {/* <ul>
                    {todos.map((todo) => (
                        <li key={todo.id}>
                            <strong>
                                {todo.completed ? "Done:" : "Pending:"}
                            </strong>
                            {todo.title}
                        </li>
                    ))}
                </ul> */}

            <button onClick={handlePrevTodo}>Previous Todo</button>
            <button onClick={handleNextTodo}>Next Todo</button>
        </>
    );
};
