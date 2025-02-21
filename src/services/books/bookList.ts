import { ERROR_MESSAGE, ERROR_NAME } from '@/constants/error';
import { ONE_DAY_IN_SECONDS } from '@/constants/time';
import { NaruApiBookData } from '@/types/api/bookApi';
import { formatNaruApiBookDataToBookItemData } from '@/utils/bookDataFormatter';
import { throwRequestError } from '@/utils/errorHandler';

import { GetPopularBooksParamsProps, GetSearchBooksParamsParams, naruEndpoint } from '../endpoints/naruEndpoint';

// --- 인기 대출 도서
export const fetchPopularBooks = async (props: GetPopularBooksParamsProps) => {
  const response = await fetch(naruEndpoint.gettingpopularBooks(props), {
    next: { revalidate: ONE_DAY_IN_SECONDS },
  });

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
/**
 * 인기 대출 도서 데이터를 가져와서, 클라이언트에 필요한 형식으로 변경해 반환
 */
export const getPopularBooks = async (props: GetPopularBooksParamsProps) => {
  const data = await fetchPopularBooks(props);
  const { docs, numFound, resultNum } = data.response;
  const books = docs.map(({ doc }: { doc: NaruApiBookData }) => {
    return formatNaruApiBookDataToBookItemData(doc);
  });

  if (!props.pageNo) return { books, isLastPage: true };

  const isLastPage = (Number(props.pageNo) - 1) * Number(props.pageSize) + resultNum >= numFound;

  return { books, isLastPage, totalBooksLength: numFound };
};
// --- 인기 대츌 도서

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
