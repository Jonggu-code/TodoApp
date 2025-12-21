import { AnimatePresence, Reorder } from 'framer-motion';
import { useState } from 'react';
import { TodoListProps } from '../../types/props';
import TodoItem from './TodoItem';

function TodoList({
  todos,
  setTodos,
  toggleTodo,
  openConfirm,
  deleteTarget,
  updateTodo,
}: TodoListProps) {
  if (todos.length === 0)
    return <p className="mt-3.5">항목이 비어있습니다 ✨</p>;

  const [draggingId, setDraggingId] = useState<number | null>(null);

  return (
    <Reorder.Group
      axis="y"
      values={todos}
      onReorder={(newOrder) => setTodos(newOrder)}
      className="flex flex-col gap-2"
    >
      <AnimatePresence>
        {todos.map((todo) => (
          <Reorder.Item
            key={todo.id}
            value={todo}
            dragListener={true}
            whileDrag={{ scale: 1.02 }}
            animate={{ scale: 1 }}
            onDragStart={() => setDraggingId(null)}
            onDragEnd={() => setDraggingId(null)}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            style={{ overflow: 'hidden' }}
          >
            <TodoItem
              todo={todo}
              toggleTodo={toggleTodo}
              openConfirm={openConfirm}
              deleteTarget={deleteTarget}
              updateTodo={updateTodo}
              dragging={draggingId === todo.id}
            />
          </Reorder.Item>
        ))}
      </AnimatePresence>
    </Reorder.Group>
  );
}

export default TodoList;
