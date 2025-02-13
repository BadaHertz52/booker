import { fetchRisingBooks } from '@/services';
import { NaruApiBookData } from '@/types';
import { formatNaruApiBookDataToBookItemData } from '@/utils';

export const getRisingBooks = async () => {
  const data = await fetchRisingBooks();

  const books = data.response.results[0].result.docs.map(({ doc }: { doc: NaruApiBookData }) => {
    return formatNaruApiBookDataToBookItemData(doc);
  });

  return { books };
};
