import './TodoList.css'

function TodoList(props) {
  // props.children si usamos render function...
  // ...props.render si usamos render props
  const renderFunction = props.children || props.render;

  return (
    <section className="TodoList-container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {(!props.loading && !props.totalTasks) && props.onEmptyTodos()}

      {(!!props.totalTasks && !props.searchedTasks.length) && props.onEmptySearchResults(props.searchValue)}

      <ul>
        {props.searchedTasks.map(renderFunction)}
      </ul>
    </section>
  );
}

export { TodoList };