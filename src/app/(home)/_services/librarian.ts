import { fetchLastMonthLibrarianPick, parseLastMonthLibrarianPick } from '@/services/books/librarianPick';

export const getLastMonthLibrarianPick = async () => {
  const response = await fetchLastMonthLibrarianPick();
  const result = await parseLastMonthLibrarianPick(response);

  return result;
};
