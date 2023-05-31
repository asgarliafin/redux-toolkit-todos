import React from 'react';
import './form.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, setTodosStatus, updateInput } from '../../features/todos/todosSlice';

const Form = () => {

  const { value } = useSelector(state => state.todos);

  const state = useSelector(state => state);



  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(updateInput(e.target.value));
  };

  const allChange = () => {
  
      dispatch(setTodosStatus());
  };

  const handleSubmit = (e) => {
    dispatch(addTodo());
    e.preventDefault();
  };

  return (
    <form id='form' onSubmit={handleSubmit}>
      <input className="toggle-all" type="checkbox" onClick={allChange} />
      <label htmlFor="toggle-all">
        Mark all as complete
      </label>
      <input className="new-todo" placeholder="What needs to be done?" autoFocus value={value} onChange={handleChange} />
    </form>
  )
}

export default Form