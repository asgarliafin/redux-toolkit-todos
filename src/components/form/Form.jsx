import React from 'react';
import './form.scss';

const Form = () => {
  return (
    <form id='form'>
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">
        Mark all as complete
      </label>
      <input className="new-todo" placeholder="What needs to be done?" autoFocus />
    </form>
  )
}

export default Form