import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

interface Todo {
  id: number;
  text: string;
  isComplete: boolean;
}

interface TodoProps {
  todos: Todo[];
  completeTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  updateTodo: (id: number, updatedTodo: { id: number; text: string }) => void;
}

const TodoItem: React.FC<TodoProps> = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState<{ id: number | null; value: string }>({ id: null, value: '' });

  const submitUpdate = (updatedTodo: { id: number; text: string }) => {
    if (edit.id !== null) {
      updateTodo(edit.id, updatedTodo);
      setEdit({ id: null, value: '' });
    }
  };

  if (edit.id !== null) {
    return <TodoForm edit={edit} onSubmit={(todo) => submitUpdate({ id: todo.id, text: todo.text })} />;
  }

  return (
    <>
      {todos.map((todo, index) => (
        <div
          className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
          key={index}
        >
          <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
          </div>
          <div className='icons'>
            <RiCloseCircleLine
              onClick={() => removeTodo(todo.id)}
              className='delete-icon'
            />
            <TiEdit
              onClick={() => setEdit({ id: todo.id, value: todo.text })}
              className='edit-icon'
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default TodoItem;
