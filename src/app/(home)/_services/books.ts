import { fetchPopularBooks, fetchRisingBooks } from '@/services';
import { GetPopularBooksParamsProps } from '@/services/endpoints/naruEndpoint';
import { NaruApiBookData } from '@/types';
import { formatNaruApiBookDataToBookItemData } from '@/utils';

export const getPopularBooks = async (props: GetPopularBooksParamsProps) => {
  const data = await fetchPopularBooks(props);
  const { docs, numFound, resultNum } = data.response;
  const books = docs.map(({ doc }: { doc: NaruApiBookData }) => {
    return formatNaruApiBookDataToBookItemData(doc);
  });

  if (!props.pageNo) return { books, isLastPage: true };

  const isLastPage = (Number(props.pageNo) - 1) * Number(props.pageSize) + resultNum >= numFound;

  return { books, isLastPage };
};

export const getRisingBooks = async () => {
  const data = await fetchRisingBooks();

  const books = data.response.results[0].result.docs.map(({ doc }: { doc: NaruApiBookData }) => {
    return formatNaruApiBookDataToBookItemData(doc);
  });

  return { books };
};
