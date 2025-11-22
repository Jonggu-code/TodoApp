import { useEffect, useRef, useState } from 'react';
import { TodoInputProps } from '../../types/props';
import { useAutoFocus } from '../../hooks/useAutoFocus';

function TodoInput({ addTodo, showAlert }: TodoInputProps) {
  const [text, setText] = useState('');
  const inputRef = useAutoFocus<HTMLInputElement>(true);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text.trim()) {
      showAlert('빈칸은 입력할 수 없어요 !');
      return;
    }
    addTodo(text);
    setText('');
    inputRef.current?.focus();
  };

  return (
    <form className="mb-5 flex justify-center gap-3" onSubmit={handleSubmit}>
      <input
        className="w-[90%] px-3 rounded bg-white transition-all duration-300  outline-1 outline-lime-300 focus:ring-lime-600 focus:ring-2"
        ref={inputRef}
        type="text"
        placeholder="오늘의 할 일은 무엇인가요?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className='w-[10%] box-border rounded-sm p-3 bg-lime-600 text-sm text-white font-bold cursor-pointer hover:bg-green-800"'
        type="submit"
      >
        추가
      </button>
    </form>
  );
}
export default TodoInput;
