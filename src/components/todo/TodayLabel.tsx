const TodayLabel = () => {
  const today = new Date();
  const weekday = new Intl.DateTimeFormat('ko-KR', {
    weekday: 'long', // "월요일" 로 받고싶으면 long
  }).format(today);

  const dateLabel = `${today.getFullYear()}. ${today.getMonth() + 1}. ${today.getDate()} (${weekday})`;

  return <div className="text-md">{dateLabel}</div>;
};

export default TodayLabel;
