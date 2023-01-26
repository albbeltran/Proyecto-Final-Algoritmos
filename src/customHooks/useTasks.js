import React, { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

const useTasks = () => {
    const { storedValue: tasks, setValue: saveTasks, loading, error } = useLocalStorage('TODO_V1', []);
    const [searchValue, setSearchValue] = useState('');
    const [openModal, setOpenModal] = useState(false);

    // Contar las tareas completadas
    const completedTasks = tasks.filter(task => task.completed).length;
    const totalTasks = tasks.length;

    let searchedTasks = [];

    if (!searchValue.length >= 1) {
        searchedTasks = tasks;
    } else {
        searchedTasks = tasks.filter((task) => {
            return task.text.toLowerCase().includes(searchValue.toLowerCase());
        })
    };

    const toggleCompleted = (text) => {
        saveTasks(tasks.map((task) => {
            if (task.text === text) return { ...task, completed: !task.completed };
            return task;
        }))
    };

    const addTask = (text, priority, date, time) => {
        saveTasks([...tasks, {
            text: text,
            completed: false,
            priority: priority,
            date: date,
            time: time
        }])
    };

    const deleteTask = (text) => {
        saveTasks(tasks.filter((task) => {
            if (task.text !== text) {
                return task;
            }
            return;
        }))
    }

    return ({
        loading,
        error,
        totalTasks,
        completedTasks,
        searchValue,
        setSearchValue,
        searchedTasks,
        toggleCompleted,
        addTask,
        deleteTask,
        openModal,
        setOpenModal
    });
}

export { useTasks };