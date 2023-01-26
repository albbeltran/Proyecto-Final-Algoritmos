import React from 'react';
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue, loading }) {
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <input
            className="TodoSearch"
            placeholder="Encuentra una tarea"
            value={searchValue}
            onChange={onSearchValueChange}
            // desactivar si se está cargando
            disabled={loading}
        />
    );
}

export { TodoSearch };