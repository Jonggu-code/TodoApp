import { useEffect, useRef } from 'react';

export function useAutoFocus<T extends HTMLElement>(trigger: boolean) {
  // 컴포넌트 실행 시 input 자동 포커스 훅
  const ref = useRef<T>(null);

  useEffect(() => {
    if (trigger) {
      ref.current?.focus();
    }
  }, [trigger]);

  return ref;
}
