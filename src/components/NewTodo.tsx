import React, { useRef } from 'react';

import './NewTodo.css';

interface AddTodoProps {
  onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<AddTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.onAddTodo(enteredText);
    textInputRef.current!.value = '';
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='todo-text'>Todo List</label>
        <input type='text' id='todo-text' ref={textInputRef} />
      </div>
      <button type='submit'>Add Todo</button>
    </form>
  );
};

export default NewTodo;
