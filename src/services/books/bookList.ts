import { ERROR_MESSAGE, ERROR_NAME, ONE_DAY_IN_SECONDS } from '@/constants';
import { throwRequestError } from '@/utils';

import { GetPopularBooksParamsProps, GetSearchBooksParamsParams, naruEndpoint } from '../endpoints/naruEndpoint';

export const fetchPopularBooks = async (props: GetPopularBooksParamsProps) => {
  const response = await fetch(naruEndpoint.gettingpopularBooks(props), {
    next: { revalidate: ONE_DAY_IN_SECONDS },
  });
  console.log('✨props///', props);
  console.log('🌱result//', response);

  if (!response.ok) {
    throwRequestError({
      statusCode: response.status,
      errorMessage: ERROR_MESSAGE.popularBooks,
      errorName: ERROR_NAME.popularBooks,
    });
  }

  const data = await response.json();

  return data;
};

export const fetchRisingBooks = async () => {
  const response = await fetch(naruEndpoint.risingBooks, {
    next: { revalidate: ONE_DAY_IN_SECONDS },
  });

  if (!response.ok) {
    throwRequestError({
      statusCode: response.status,
      errorMessage: ERROR_MESSAGE.risingBooks,
      errorName: ERROR_NAME.risingBooks,
    });
  }

  const data = await response.json();
  return data;
};

export const fetchSearchBooks = async (params: GetSearchBooksParamsParams) => {
  // 무한 스크롤할때 까지
  const response = await fetch(naruEndpoint.gettingSearchBooks(params));

  if (!response.ok) {
    throwRequestError({
      statusCode: response.status,
      errorMessage: ERROR_MESSAGE.searchBooks,
      errorName: ERROR_NAME.searchBooks,
    });
  }

  const data = await response.json();

  return data;
};

export const fetchBooksForMania = async (isbn: string) => {
  const response = await fetch(naruEndpoint.gettingBooksForMania(isbn), { next: { revalidate: ONE_DAY_IN_SECONDS } });

  if (!response.ok) {
    throwRequestError({
      statusCode: response.status,
      errorMessage: ERROR_MESSAGE.booksForMania,
      errorName: ERROR_NAME.booksForMania,
    });
  }

  const data = await response.json();

  return data;
};
