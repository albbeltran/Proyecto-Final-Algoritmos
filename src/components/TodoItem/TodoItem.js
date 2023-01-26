import './TodoItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faSquare, faTimes } from '@fortawesome/free-solid-svg-icons';

function TodoItem({ text, completed, priority, date, time, onComplete, onDelete }) {
    return (
        <li className="TodoItem">
            <FontAwesomeIcon
                icon={completed ? faCheckSquare : faSquare}
                className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
                onClick={onComplete}
            >
            </FontAwesomeIcon>
            <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
                {text}
            </p>
            <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'} 
            ${priority === 'baja' && 'TodoItem-p--low'} 
            ${priority === 'media' && 'TodoItem-p--mid'} 
            ${priority === 'alta' && 'TodoItem-p--high'}`}>
                {priority}
            </p>
            <p className={`TodoItem-p--date ${completed && 'TodoItem-p--complete'}`}>
                {date}
            </p>
            <p className={`TodoItem-p--time ${completed && 'TodoItem-p--complete'}`}>
                {time}
            </p>
            <FontAwesomeIcon
                icon={faTimes}
                className="Icon Icon-delete"
                onClick={onDelete}
            >
            </FontAwesomeIcon>
        </li>
    );
}

export { TodoItem };