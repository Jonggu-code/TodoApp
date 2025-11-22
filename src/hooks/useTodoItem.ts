import { useEffect, useState } from 'react';
import { Todo } from '../types/todo';

export const useTodoItem = (todo: Todo, deleteTarget: number | null) => {
  const [removing, setRemoving] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const [startY, setStartY] = useState<number | null>(null);
  const [clickedInside, setClickedInside] = useState(false);

  useEffect(() => {
    if (deleteTarget === todo.id) {
      setRemoving(true);
    }
  }, [deleteTarget]);

  const startEdit = () => setIsEditing(true);

  const cancelEdit = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };
  return {
    removing,
    setRemoving,

    isEditing,
    setIsEditing,

    editText,
    setEditText,

    startY,
    setStartY,
    clickedInside,
    setClickedInside,

    startEdit,
    cancelEdit,
  };
};
