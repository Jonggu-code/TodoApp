import { useState } from 'react';

export const useAlert = () => {
  const [alert, setAlert] = useState<string | null>(null);
  const [isAlertActive, setIsAlertActive] = useState(false);

  const showAlert = (msg: string) => {
    if (isAlertActive) return;

    setIsAlertActive(true);
    setAlert(msg);

    setTimeout(() => {
      setAlert(null); // motion-framer exit 시작
      setTimeout(() => {
        setIsAlertActive(false); // exit 애니메이션 종료 후 다시 허용
      }, 400); // exit duration과 동일하게
    }, 1000);
  };

  return {
    alert,
    setAlert,
    isAlertActive,
    setIsAlertActive,

    showAlert,
  };
};
