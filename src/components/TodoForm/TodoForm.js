import React, { useState } from "react";
import './TodoForm.css';

const TodoForm = ({ addTask, setOpenModal }) => {
    const [text, setText] = useState('');
    const [priority, setPriority] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const onChangeText = (event) => {
        setText(event.target.value);
    }

    const onChangePriority = (event) => {
        setPriority(event.target.value);
    }

    const onChangeDate = (event) => {
        setDate(event.target.value);
    }

    const onChangeTime = (event) => {
        setTime(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (text.length === 0 || priority.length === 0 || date.length === 0 || time.length === 0) {
            alert("Whoops! No puedes dejar campos vacíos.");
            return;
        }
        addTask(text, priority, date, time);
        setOpenModal(false);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nueva tarea</label>
            <textarea
                value={text}
                onChange={onChangeText}
            />
            <label>Escribe la prioridad (baja, media, alta)</label>
            <textarea
                className="textarea--low"
                value={priority}
                onChange={onChangePriority}
            />
            {/* <label>Selecciona la prioridad</label>
            <select>
                <option value={value} onChange={onChange}>Baja</option>
                <option value={value} onChange={onChange}>Media</option>
                <option value={value} onChange={onChange}>Alta</option>
            </select> */}
            <label>Escribe la fecha límite (DD/MM/AAAA)</label>
            <textarea
                className="textarea--low"
                value={date}
                onChange={onChangeDate}
            />
            <label>Escribe el tiempo para completar</label>
            <textarea
                className="textarea--low"
                value={time}
                onChange={onChangeTime}
            />
            {/* <label>Selecciona el tiempo para completar</label>
            <select>
                <option value={value} onChange={onChange}>10 minutos</option>
                <option value={value} onChange={onChange}>30 minutos</option>
                <option value={value} onChange={onChange}>1 hora</option>
                <option value={value} onChange={onChange}>3 horas</option>
                <option value={value} onChange={onChange}>1 dia</option>
                <option value={value} onChange={onChange}>1 semana</option>
            </select> */}
            <div className="TodoForm-buttonContainer">
                <button
                    className="TodoForm-button TodoForm-button-cancel"
                    type="button"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    className="TodoForm-button TodoForm-button-add"
                    type="submit"
                >
                    Agregar
                </button>
            </div>
        </form>
    )
}

export { TodoForm };