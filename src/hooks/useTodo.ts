import { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { Todo } from '../types/todo';
import { FILTERS, FilterType } from '../types/filter';

export const useTodo = () => {
  const {
    value: todos,
    setValue: setTodos,
    loading,
  } = useLocalStorage<Todo[]>('todos', []);

  const [confirm, setConfirm] = useState<{
    id: number;
    text: string;
  } | null>(null);

  const [deleteTarget, setDeleteTarget] = useState<number | null>(null);
  const [filter, setFilter] = useState<FilterType>(FILTERS.ALL);

  // 할 일 검색용 상태 관리
  const [search, setSearch] = useState('');
  const [searchOn, setSearchOn] = useState(false);

  // 삭제 되돌리기 용 상태관리
  const [lastDeleted, setLastDeleted] = useState<Todo | null>(null);
  const [undoTimer, setUndoTimer] = useState<number | null>(null);

  // 할 일 상태에 따른 필터링 여부
  const filterTodos = (todos: Todo[], filter: FilterType, search: string) => {
    const keyword = search.trim().toLowerCase();

    return todos.filter((todo) => {
      if (filter === FILTERS.DONE && !todo.completed) return false;
      if (filter === FILTERS.TODO && todo.completed) return false;

      if (keyword && !todo.text.toLowerCase().includes(keyword)) {
        return false;
      }

      return true;
    });
  };
  const filteredTodos = filterTodos(todos, filter, search);

  // 새로운 할 일 추가
  const addTodo = (text: string) => {
    setTodos((prev) => [...prev, { id: Date.now(), text, completed: false }]);
  };

  // 할 일 수정
  const updateTodo = (id: number, text: string) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)));
  };

  // 할 일 상태 (완료, 미완료) 토글 기능
  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  // 할 일 삭제 기능 + 삭제 복구를 위한 targetid 설정
  const deleteTodo = (id: number) => {
    const target = todos.find((t) => t.id === id) || null;
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    setLastDeleted(target);

    if (undoTimer) {
      window.clearTimeout(undoTimer);
    }

    const timerId = window.setTimeout(() => {
      setLastDeleted(null);
      setUndoTimer(null);
    }, 10000);

    setUndoTimer(timerId);
  };

  // 할 일 삭제버튼 클릭 시 모달창 띄우는 기능
  const openConfirm = (id: number, text: string) => {
    setConfirm({ id, text });
  };

  // 모달창에서 삭제버튼 확인 클릭 시 항목 삭제 기능 (slide-out 애니메이션 추가 버전)
  const handelConfirmDelete = () => {
    if (!confirm) return;

    setDeleteTarget(confirm.id); // todoItem에게 "애니메이션 시작" 신호 보내기
    setConfirm(null); // 모달 닫기

    setTimeout(() => {
      deleteTodo(confirm.id);
      setDeleteTarget(null); // 상태 리셋
    }, 200); // slide-out 애니메이션 시간과 동일하게 세팅
  };
  return {
    todos,
    setTodos,
    addTodo,
    updateTodo,
    toggleTodo,
    loading,

    search,
    setSearch,
    searchOn,
    setSearchOn,

    deleteTodo,
    lastDeleted,
    setLastDeleted,
    undoTimer,
    setUndoTimer,

    filter,
    setFilter,

    filteredTodos,

    confirm,
    setConfirm,
    openConfirm,
    handelConfirmDelete,

    deleteTarget,
  };
};
