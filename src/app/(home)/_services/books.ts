import { fetchPopularBooks, fetchRisingBooks } from '@/services';
import { BookItemData, NaruApiBookData } from '@/types';
import { formatNaruApiBookDataToBookItemData } from '@/utils';

export const getPopularBooks = async (): Promise<BookItemData[]> => {
  const data = await fetchPopularBooks();

  return data.response.docs.map(({ doc }: { doc: NaruApiBookData }) => {
    return formatNaruApiBookDataToBookItemData(doc);
  });
};

export const getRisingBooks = async () => {
  const data = await fetchRisingBooks();

  const books = data.response.results[0].result.docs.map(({ doc }: { doc: NaruApiBookData }) => {
    return formatNaruApiBookDataToBookItemData(doc);
  });

  return books;
};
