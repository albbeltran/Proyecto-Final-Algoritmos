import React from 'react';
import './TodoCounter.css'

function TodoCounter({ totalTasks, completedTasks, loading }) {
    return (
        <h2
            className={`TodoCounter ${loading && "TodoCounter--loading"}`}
        >
            Has completado {completedTasks} de {totalTasks} tareas
        </h2>
    )
}

export { TodoCounter };