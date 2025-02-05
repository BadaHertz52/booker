export const getLastMonthDates = () => {
  const today = new Date();
  const firstDay = new Date(today.getFullYear(), today.getMonth() - 1, 1);
  const lastDay = new Date(today.getFullYear(), today.getMonth(), 0);

  const formatDate = (date: Date) => date.toISOString().split('T')[0]; // YYYY-MM-DD 형식으로 변환

  return {
    firstDay: formatDate(firstDay),
    lastDay: formatDate(lastDay),
  };
};
