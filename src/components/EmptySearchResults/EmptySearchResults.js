import '../TodoList/TodoList.css';

const EmptySearchResults = ({ searchValue }) => {
    return (
        <p className='message'>Whoops! No hay resultados para {searchValue}.</p>)
}

export { EmptySearchResults };