import React from 'react';
import "./list-item.scss";
import { useDispatch } from 'react-redux';

const ListItem = ({ id, status, text }) => {

    const dispatch = useDispatch()

    const handleRemove = (id) => {
        console.log(id);
    };

    return (
        <li className={status ? "completed" : null}>
            <div className="view">
                <input className="toggle" type="checkbox" />
                <label>{text}</label>
                <button className="destroy" onClick={e => handleRemove(id)}></button>
            </div>
        </li>
    )
}

export default ListItem