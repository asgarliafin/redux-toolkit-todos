import React from 'react'
import ListItem from '../listItem/ListItem';
import { useSelector, useDispatch } from 'react-redux';

const List = () => {

  const state = useSelector(state => state.todos);

  const { list, option } = state;

  return (
    <ul className="todo-list">
      {list?.filter((elm) => option == "All" ? elm : (elm?.status == option))?.map(item => {
        return <ListItem key={item.id} {...item} />
      })}
    </ul>
  )
}

export default List