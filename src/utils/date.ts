const formatDateToInt = (date: Date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return parseInt(`${year}${month}${day}`, 10);
};

const formateISODate = (date: Date) => {
  return date.toISOString().split('T')[0];
};

export const getLastMonthDates = () => {
  const today = new Date();
  const firstDay = new Date(today.getFullYear(), today.getMonth() - 1, 1);
  const lastDay = new Date(today.getFullYear(), today.getMonth(), 0);
  return {
    firstDay: formatDateToInt(firstDay),
    lastDay: formatDateToInt(lastDay),
  };
};

export const getCurrentAndPastWeek = () => {
  const today = new Date();
  const onWeekago = new Date();
  onWeekago.setDate(today.getDate() - 7);
  return {
    currentDate: formateISODate(today),
    onWeekago: formateISODate(onWeekago),
  };
};
