'use server';

import { fetchSearchBooks } from '@/services/books/bookList';
import { GetSearchBooksParamsParams } from '@/services/endpoints/naruEndpoint';
import { NaruApiBookData } from '@/types/api/bookApi';
import { formatNaruApiBookDataToBookItemData } from '@/utils/bookDataFormatter';

export const getSearchBooks = async (params: GetSearchBooksParamsParams) => {
  const data = await fetchSearchBooks(params);

  const { docs, request, numFound } = data.response;
  const { pageNo, pageSize } = request;

  const isLastPage: boolean = numFound == 0 ? true : Math.ceil(numFound / pageSize) <= pageNo;

  const books = docs.map(({ doc }: { doc: NaruApiBookData }) => formatNaruApiBookDataToBookItemData(doc));

  return {
    isLastPage,
    books,
  };
};
