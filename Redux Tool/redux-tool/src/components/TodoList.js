import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodosRequest } from '../actions/todoActions';

const TodoList = () => {
  console.log('TodoList component rendered'); // Проверка рендеринга

  const dispatch = useDispatch();
  const { loading, todos, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchTodosRequest());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Todo List</h1>
      <p>This is a static text to check if TodoList is rendered.</p>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} - {todo.completed ? 'Completed' : 'Not Completed'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList; 