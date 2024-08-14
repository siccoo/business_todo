import React, { useState, useEffect, useRef } from 'react';

interface TodoFormProps {
  onSubmit: (todo: { id: number; text: string; isComplete: boolean }) => void;
  edit?: { id: number | null; value: string };
}

const TodoForm: React.FC<TodoFormProps> = ({ onSubmit, edit }) => {
  const [input, setInput] = useState<string>(edit ? edit.value : '');

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit({
      id: edit ? edit.id ?? Math.floor(Math.random() * 10000) : Math.floor(Math.random() * 10000),
      text: input,
      isComplete: false
    });

    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      <input
        placeholder={edit ? 'Update your item' : 'Add a todo'}
        value={input}
        onChange={handleChange}
        name='text'
        className={`todo-input ${edit ? 'edit' : ''}`}
        ref={inputRef}
      />
      <button type="submit" className={`todo-button ${edit ? 'edit' : ''}`}>
        {edit ? 'Update' : 'Add todo'}
      </button>
    </form>
  );
};

export default TodoForm;
