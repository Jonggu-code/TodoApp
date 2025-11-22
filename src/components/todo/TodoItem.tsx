import { useAutoFocus } from '../../hooks/useAutoFocus';
import { useClickGuard } from '../../hooks/useClickGuard';
import { useTodoItem } from '../../hooks/useTodoItem';
import { TodoItemProps } from '../../types/props';

function TodoItem({
  todo,
  toggleTodo,
  openConfirm,
  deleteTarget,
  updateTodo,
  dragging,
}: TodoItemProps) {
  const {
    removing,

    isEditing,
    setIsEditing,

    editText,
    setEditText,

    startEdit,
    cancelEdit,
  } = useTodoItem(todo, deleteTarget);

  const { registerDown, shouldToggle } = useClickGuard();
  const inputRef = useAutoFocus<HTMLInputElement>(isEditing);

  const btnStyle = 'p-2 transition duration-300 rounded-sm hover:bg-lime-500';

  const handleSave = () => {
    const trimmed = editText.trim();
    if (!trimmed) return; // 필요하면 alert 사용 가능
    updateTodo(todo.id, trimmed);
    setIsEditing(false);
  };

  return (
    <div
      className={`relative flex items-center justify-between px-4 py-3 mb-2 rounded-md shadow cursor-grab active:cursor-grabbing transition-all duration-200  ${removing ? 'slide-out-left' : ''} ${
        todo.completed
          ? 'bg-lime-600 text-white font-bold'
          : 'bg-white hover:text-lime-600 bg-'
      } `}
      onMouseDown={registerDown}
      onMouseUp={(e) => {
        if (shouldToggle(e, { dragging, isEditing })) {
          toggleTodo(todo.id);
        }
      }}
    >
      <div className="flex items-center gap-2 flex-1">
        <input
          type="checkbox"
          checked={todo.completed}
          onClick={(e) => e.stopPropagation()}
          onChange={() => toggleTodo(todo.id)}
        />
        {isEditing ? (
          <input
            className={`flex-1 outline-none ${isEditing ? 'font-semibold text-lime-600 bg-lime-100' : ''}`}
            ref={inputRef}
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSave();
              if (e.key === 'Escape') cancelEdit();
            }}
          />
        ) : (
          <span className="flex-1">{todo.text} </span>
        )}
        {isEditing ? (
          <>
            <button
              className={`${btnStyle}`}
              onClick={(e) => {
                e.stopPropagation();
                handleSave();
              }}
            >
              ✅
            </button>
            <button
              className={`${btnStyle}`}
              onClick={(e) => {
                e.stopPropagation();
                cancelEdit();
              }}
            >
              ❌
            </button>
          </>
        ) : (
          <>
            <button
              className={`${btnStyle}`}
              onClick={(e) => {
                e.stopPropagation();
                setIsEditing(true);
              }}
            >
              📝
            </button>
            <button
              className={`${btnStyle}`}
              onClick={(e) => {
                e.stopPropagation();
                openConfirm(todo.id, todo.text);
              }}
            >
              🗑️
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default TodoItem;
