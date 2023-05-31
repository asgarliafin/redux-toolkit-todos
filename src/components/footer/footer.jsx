import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCompleted, showAll, showCompleted, showUnCompleted } from '../../features/todos/todosSlice';

const Footer = () => {

    const { numbserOfUnCompleted } = useSelector(state => state.todos);

    const dispatch = useDispatch();

    const handleDeleteCompleted = () => {
        dispatch(deleteCompleted());
    };

    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{numbserOfUnCompleted}</strong>
                items left
            </span>

            <ul className="filters">
                <li>
                    <a href="#/" className="selected" onClick={e => dispatch(showAll())}>All</a>
                </li>
                <li>
                    <a href="#/" onClick={e => dispatch(showUnCompleted())}>Active</a>
                </li>
                <li>
                    <a href="#/" onClick={e => dispatch(showCompleted())}>Completed</a>
                </li>
            </ul>

            <button className="clear-completed" onClick={handleDeleteCompleted}>
                Clear completed
            </button>
        </footer>
    )
}

export default Footer