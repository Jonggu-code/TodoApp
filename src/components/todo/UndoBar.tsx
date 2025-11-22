import { UndoProps } from '../../types/props';
import UndoIcon from '../ui/icons/UndoIcon';

export default function UndoBar({
  lastDeleted,
  setTodos,
  setLastDeleted,
  showAlert,
}: UndoProps) {
  const handleUndo = () => {
    if (!lastDeleted) {
      showAlert('최근 삭제한 할 일이 없습니다 !');
      return;
    }

    setTodos((prev) => [lastDeleted, ...prev]);
    setLastDeleted(null);
    showAlert('삭제한 할 일이 복원되었습니다 !');
  };

  return (
    <div>
      <button
        className="p-2 w-11 flex justify-center items-center rounded-xl hover:bg-lime-200 transition-all duration-300"
        onClick={handleUndo}
      >
        <UndoIcon
          className="w-7 text-lime-400 cursor-pointer"
          strokeWidth={2}
        />
      </button>
    </div>
  );
}
