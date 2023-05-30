import React from 'react'
import ListItem from '../listItem/ListItem';
import { useSelector, useDispatch } from 'react-redux';

const List = () => {

  const dispatch = useDispatch();
  const { list } = useSelector(state => state.todos);


  return (
    <ul className="todo-list">
      {list.map(item => {
        return <ListItem key={item.id} {...item} />
      })}
    </ul>
  )
}

export default List