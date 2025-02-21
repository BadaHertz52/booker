import { fetchRisingBooks } from '@/services/books/bookList';
import { NaruApiBookData } from '@/types/api/bookApi';
import { formatNaruApiBookDataToBookItemData } from '@/utils/bookDataFormatter';

export const getRisingBooks = async () => {
  const data = await fetchRisingBooks();

  const books = data.response.results[0].result.docs.map(({ doc }: { doc: NaruApiBookData }) => {
    return formatNaruApiBookDataToBookItemData(doc);
  });

  return { books };
};
