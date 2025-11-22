import { StatsBarProps } from '../../types/props';

const StatsBar: React.FC<StatsBarProps> = ({ todos }) => {
  const totalCount = todos.length;
  const doneCount = todos.filter((t) => t.completed).length;
  const todoCount = totalCount - doneCount;

  return (
    <div className="flex">
      전체 {totalCount}개 - 미완료 {todoCount}개 - 완료 {doneCount}개
    </div>
  );
};

export default StatsBar;
