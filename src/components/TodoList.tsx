import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

interface TodoItemed {
  id: number;
  text: string;
  isComplete: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<TodoItemed[]>([]);

  const addTodo = (todo: TodoItemed) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const updateTodo = (todoId: number, updatedTodo: { id: number; text: string }) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === todoId ? { ...item, text: updatedTodo.text } : item
      )
    );
  };

  const removeTodo = (id: number) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removedArr);
  };

  const completeTodo = (id: number) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <TodoItem
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
};

export default TodoList;
