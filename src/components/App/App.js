import React from 'react';
import { useTasks } from '../../customHooks/useTasks';
import { TodoHeader } from '../TodoHeader/TodoHeader';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { Modal } from '../../Modal/Modal';
import { TodoForm } from '../TodoForm/TodoForm';
import { TodosLoading } from '../TodosLoading/TodosLoading';
import { TodosError } from '../TodosError/TodosError';
import { EmptyTodos } from '../EmptyTodos/EmptyTodos';
import { EmptySearchResults } from '../EmptySearchResults/EmptySearchResults';

function App() {
  const {
    error,
    loading,
    searchedTasks,
    toggleCompleted,
    deleteTask,
    openModal,
    addTask,
    setOpenModal,
    totalTasks,
    completedTasks,
    searchValue,
    setSearchValue
  } = useTasks();

  return (
    <>
      <TodoHeader loading={loading}>
        <TodoCounter
          totalTasks={totalTasks}
          completedTasks={completedTasks}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTasks={searchedTasks}
        searchValue={searchValue}
        totalTasks={totalTasks}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={(searchValue) => <EmptySearchResults searchValue={searchValue} />}
        // render={todo => (
        //   <TodoItem
        //     key={todo.text}
        //     text={todo.text}
        //     completed={todo.completed}
        //     onComplete={() => toggleCompleted(todo.text)}
        //     onDelete={() => deleteTask(todo.text)}
        //   />
        // )}
      >
        {todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            priority={todo.priority}
            date={todo.date}
            time={todo.time}
            onComplete={() => toggleCompleted(todo.text)}
            onDelete={() => deleteTask(todo.text)}
          />
        )}
      </TodoList>

      {openModal && (
        <Modal>
          <TodoForm
            addTask={addTask}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </>
  );
}

export default App;