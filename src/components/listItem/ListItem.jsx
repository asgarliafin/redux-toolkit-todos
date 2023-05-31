import React from 'react';
import "./list-item.scss";
import { useDispatch } from 'react-redux';
import { deleteTodo, setTodoStatus } from '../../features/todos/todosSlice';

const ListItem = ({ id, status, text }) => {

    const dispatch = useDispatch()

    const handleRemove = (id) => {
        dispatch(deleteTodo({ id, status }));
    };

    const handleSetStatus = () => {
        dispatch(setTodoStatus({
            id,
            status
        }));
    };

    return (
        <li className={status ? "completed" : null}>
            <div className="view">
                <input className={status ? 'active toggle' : 'toggle'} type="checkbox" onClick={handleSetStatus} />
                <label>{text}</label>
                <button className="destroy" onClick={e => handleRemove(id)}></button>
            </div>
        </li>
    )
}

export default ListItem