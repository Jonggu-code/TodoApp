import { useRef, useState } from 'react';

interface GuardOptions {
  dragging: boolean;
  isEditing: boolean;
}

export function useClickGuard() {
  const startY = useRef<number | null>(null);

  const registerDown = (e: React.MouseEvent) => {
    startY.current = e.clientY;
  };

  const shouldToggle = (
    e: React.MouseEvent,
    { dragging, isEditing }: GuardOptions,
  ) => {
    const target = e.target as HTMLElement;

    // 버튼이나 인풋 안에서 발생한 mouseup이면 무조건 토글 금지
    if (target.closest('button') || target.closest('input')) {
      return false;
    }

    // 기준점 없으면 토글 X
    if (startY.current === null) return false;

    const diff = Math.abs(e.clientY - startY.current);

    // 드래그로 판단되면 토글 X
    if (diff > 5) return false;

    // Reorder에서 드래그 중이거나, 수정 중이면 토글 X
    if (dragging) return false;
    if (isEditing) return false;

    // 전부 통과시 "정상 클릭" 토글 허용
    return true;
  };
  return {
    registerDown,
    shouldToggle,
  };
}
