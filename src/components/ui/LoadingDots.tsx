import { useEffect, useState } from 'react';

export default function LoadingDots() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '.' : prev + '.'));
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className="text-lime-800 text-xl font-bold">할 일 불러오는 중 {dots}</p>
  );
}
