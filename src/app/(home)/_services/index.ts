import { fetchLastMonthLibrarianPick, formatLastMonthLibrarianPick } from '@/services';

export const getLastMonthLibrarianPick = async () => {
  const response = await fetchLastMonthLibrarianPick();
  const result = await formatLastMonthLibrarianPick(response);

  return result;
};
